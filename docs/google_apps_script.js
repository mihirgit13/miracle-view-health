/**
 * Miracle View Health - HIPAA Compliant Multi-Form Google Apps Script Web App
 * Handles Insurance Verification, Patient Inquiry, Appointment Booking, and Career Applications with Attachments.
 * 
 * Target Inboxes:
 * - Patient Intake/Booking/Insurance: schedule@miracleviewhealthllc.com (Primary), schedule@advancecarehealthconnect.org (CC)
 * - Careers Applications: management@miracleviewhealthllc.com (Primary), team@advancecarehealthconnect.org (CC)
 */

function doPost(e) {
  try {
    var data = {};
    
    // Safely extract parameters whether sent as form data or JSON
    if (e && e.parameter && Object.keys(e.parameter).length > 0) {
      data = e.parameter;
    } else if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (parseErr) {
        data = {};
      }
    }
    
    var formType = data.formType || (data.positionApplied || data.position ? "careers" : (data.serviceTitle ? "booking" : (data.message ? "contact" : "insurance")));
    var fullName = data.fullName || data.name || "N/A";
    var phoneNumber = data.phoneNumber || data.phone || "N/A";
    var email = data.email || "N/A";
    var selectedProvider = data.selectedProvider || data.provider || "N/A";
    var memberId = data.memberId || data.member_id || "N/A";
    var serviceTitle = data.serviceTitle || "General Consultation";
    var selectedDate = data.selectedDate || "N/A";
    var selectedSlot = data.selectedSlot || "N/A";
    var notes = data.notes || "None";
    var hasFile = data.hasFile || "None";
    var message = data.message || "N/A";
    var positionApplied = data.positionApplied || data.position || "N/A";
    var coverNote = data.coverNote || data.cover_note || "N/A";
    var timestamp = data.timestamp || new Date().toLocaleString();
    
    var subject = "";
    var body = "";
    var primaryEmail = "schedule@miracleviewhealthllc.com";
    var ccEmail = "schedule@advancecarehealthconnect.org";

    if (formType === "careers") {
      primaryEmail = "management@miracleviewhealthllc.com";
      ccEmail = "team@advancecarehealthconnect.org";
      subject = "🔒 [SECURE] New Job Application: " + positionApplied + " - " + fullName;
      body = "NEW SECURE JOB APPLICATION SUBMISSION\n\n" +
             "=====================================================\n" +
             "Applicant Full Name: " + fullName + "\n" +
             "Email Address:     " + email + "\n" +
             "Contact Phone:    " + phoneNumber + "\n" +
             "Position Applied: " + positionApplied + "\n" +
             "Cover Letter / Notes: " + coverNote + "\n" +
             "Attached Document: " + (data.fileName || hasFile) + "\n" +
             "Timestamp:        " + timestamp + "\n" +
             "=====================================================\n\n" +
             "Transmitted under Google Workspace BAA compliance standards.";
    } else if (formType === "booking") {
      subject = "🔒 [SECURE] New Appointment Request: " + serviceTitle + " - " + fullName;
      body = "NEW SECURE CLINICAL APPOINTMENT REQUEST\n\n" +
             "=====================================================\n" +
             "Patient Full Name: " + fullName + "\n" +
             "Email Address:     " + email + "\n" +
             "Contact Phone:    " + phoneNumber + "\n" +
             "Requested Service: " + serviceTitle + "\n" +
             "Preferred Date:    " + selectedDate + "\n" +
             "Preferred Slot:    " + selectedSlot + "\n" +
             "Patient Notes:     " + notes + "\n" +
             "Attached Document: " + hasFile + "\n" +
             "Timestamp:        " + timestamp + "\n" +
             "=====================================================\n\n" +
             "Transmitted under Google Workspace BAA compliance standards.";
    } else if (formType === "contact") {
      subject = "🔒 [SECURE] New Patient Inquiry from " + fullName;
      body = "NEW SECURE PATIENT INQUIRY SUBMISSION\n\n" +
             "=====================================================\n" +
             "Patient Full Name: " + fullName + "\n" +
             "Email Address:     " + email + "\n" +
             "Contact Phone:    " + phoneNumber + "\n\n" +
             "Patient Message:\n" + message + "\n\n" +
             "Timestamp:        " + timestamp + "\n" +
             "=====================================================\n\n" +
             "Transmitted under Google Workspace BAA compliance standards.";
    } else {
      subject = "🔒 [SECURE] New Insurance Verification Request: " + selectedProvider + " - " + fullName;
      body = "NEW SECURE INSURANCE COVERAGE VERIFICATION REQUEST\n\n" +
             "=====================================================\n" +
             "Patient Full Name: " + fullName + "\n" +
             "Contact Phone:    " + phoneNumber + "\n" +
             "Insurance Plan:   " + selectedProvider + "\n" +
             "Policy/Member ID: " + memberId + "\n" +
             "Timestamp:        " + timestamp + "\n" +
             "=====================================================\n\n" +
             "Transmitted under Google Workspace BAA compliance standards.";
    }

    // Process file attachment if present (enforce strict type allowlist and max 15MB limit)
    var attachments = [];
    if (data.fileData && data.fileName && data.fileData.length > 20) {
      try {
        var rawFileName = (data.fileName || "attachment").replace(/[^a-zA-Z0-9._-]/g, "_");
        var lowerName = rawFileName.toLowerCase();
        var allowedExtensions = [".pdf", ".doc", ".docx", ".png", ".jpg", ".jpeg"];
        var isAllowedExt = allowedExtensions.some(function(ext) { return lowerName.endsWith(ext); });

        if (!isAllowedExt) {
          console.warn("Blocked unsupported attachment extension: " + rawFileName);
        } else {
          var base64Parts = data.fileData.split(",");
          var base64Content = base64Parts.length > 1 ? base64Parts[1] : base64Parts[0];

          // Rough base64 size check (max ~15MB decoded, ~20MB base64)
          if (base64Content.length > 20 * 1024 * 1024) {
            console.warn("Attachment payload exceeds 15MB limit: " + rawFileName);
          } else {
            var decodedBytes = Utilities.base64Decode(base64Content);
            if (decodedBytes.length > 15 * 1024 * 1024) {
              console.warn("Decoded attachment exceeds 15MB limit: " + rawFileName);
            } else {
              var mimeType = data.fileType || "application/pdf";
              var allowedMimeTypes = [
                "application/pdf",
                "application/msword",
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                "image/png",
                "image/jpeg",
                "image/jpg"
              ];
              if (allowedMimeTypes.indexOf(mimeType) === -1) {
                mimeType = "application/octet-stream";
              }
              var fileBlob = Utilities.newBlob(decodedBytes, mimeType, rawFileName);
              attachments.push(fileBlob);
            }
          }
        }
      } catch (attachErr) {
        console.error("Attachment error: " + attachErr.toString());
      }
    }

    var mailOptions = {
      cc: ccEmail
    };
    if (attachments.length > 0) {
      mailOptions.attachments = attachments;
    }

    // Send email to primary inbox with CC to secondary inbox (and attachments if present)
    GmailApp.sendEmail(
      primaryEmail,
      subject,
      body,
      mailOptions
    );

    return ContentService.createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error("Submission processing error: " + error.toString());
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: "An error occurred while processing your submission." }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
