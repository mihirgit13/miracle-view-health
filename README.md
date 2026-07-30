
# Miracle View Health LLC — Official Patient Portal & Web Platform

A modern, high-performance, HIPAA-compliant web platform for **Miracle View Health LLC**, an integrative psychiatric, interventional behavioral health, and wellness clinic located in Tempe, Arizona.

---

## 🏥 Clinical Services Included

- **Interventional Psychiatry**: Transcranial Magnetic Stimulation (TMS Therapy), Spravato® (Esketamine), IV Ketamine Infusion Therapy.
- **Behavioral Health & Psychiatry**: General Outpatient Psychiatry, Medication Management, Psychotherapy, Telepsychiatry.
- **Specialty Care**: Addiction Medicine, Depression & Anxiety Care, PTSD & OCD Treatment, Wellness Services.

---

## 🛡️ Security & HIPAA Compliance Architecture

This application strictly adheres to HIPAA Privacy and Security Rules (45 CFR Parts 160 and 164):

1. **Encrypted Direct Transmission**: Patient form submissions (Insurance Verification, Patient Contact Inquiries, Appointment Bookings) bypass third-party marketing services and transmit directly to Google Workspace inboxes (`schedule@miracleviewhealthllc.com` & `schedule@advancecarehealthconnect.org`) under Google Workspace Business Associate Agreement (BAA) standards.
2. **Verifiable Consent Audit Trail**: Verifiable patient consent records (IP user-agent, timestamp, form type, disclosure acknowledgment) are logged to a PostgreSQL audit table (`consent_audit_logs`).
3. **Zero Third-Party PHI Exposure**: No protected health information (PHI) or electronic protected health information (ePHI) is transmitted to unverified third-party APIs.
4. **Performance & Reliability**: All form handlers use parallel asynchronous dispatch (`Promise.allSettled`), anti-double-click guards, and instant UI state feedback.

---

## 🛠️ Technology Stack

- **Core**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Vanilla CSS Design System, Lucide React Icons
- **Routing**: React Router v6
- **Database & Audit Logs**: Supabase PostgreSQL
- **Secure Backend Routing**: Google Apps Script Web App

---

## 📂 Directory Structure

```
miracle-view-health/
├── docs/                      # Deployment documentation and reference scripts
│   └── google_apps_script.js  # Reference Google Apps Script Web App backend code
├── policies/                  # Operational policies (HIPAA, Consent, Privacy)
├── public/                    # Static assets, logos, and favicon icons
├── src/
│   ├── components/            # Reusable UI components (Navbar, Footer, InsuranceSection, etc.)
│   ├── data/                  # Clinical services and team data
│   ├── pages/                 # Full page views (Home, Services, Contact, BookNow, Careers, etc.)
│   ├── routes/                # Client-side router configuration
│   └── utils/                 # Configuration constants (mvhConfig) & Supabase client
├── .env.example               # Environment variables template
├── index.html                 # Main HTML entry point
├── package.json               # Dependencies and scripts
├── supabase_schema.sql        # Database schema DDL for consent audit logs
└── vite.config.ts             # Vite bundler configuration
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Installation & Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/miracleviewhealth/website.git
   cd miracle-view-health
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

4. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

---

## 📦 Production Build

To create an optimized production bundle:

```bash
npm run build
```

The compiled static assets will be generated in the `dist/` directory, ready for deployment to any web host (Vercel, Netlify, AWS Amplify, Cloudflare Pages, etc.).

---

## 📄 License & Confidentiality

© Miracle View Health LLC. All Rights Reserved. Proprietary medical practice software.
