export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  longDesc?: string;
  fullContent?: string;
  conditions?: string[];
  benefits?: string[];
  process?: { step: number; title: string; desc: string }[];
  category: 'behavioral' | 'innovative' | 'medical';
  image: string;
}

export interface Doctor {
  id: string;
  name: string;
  title: string;
  specialty: string;
  credential: string;
  image: string;
  description: string;
  location: string;
}

export interface JobPost {
  id: string;
  title: string;
  department: 'Clinical' | 'Nursing' | 'Medical' | 'Admissions' | 'Finance' | 'Operations';
  location: string;
  category: 'Clinical' | 'Administrative';
  type: string;
  description: string;
}

export interface Appointment {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  serviceId: string;
  doctorId?: string;
  date: string;
  timeSlot: string;
  message?: string;
  createdAt: string;
}

export interface PatientInquiry {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  serviceId: string;
  message: string;
  createdAt: string;
}

export interface InsuranceProvider {
  id: string;
  name: string;
  shortName: string;
  websiteUrl?: string;
  phone?: string;
  logoColor: string; // Theme/accent color representation for premium badges
  popular: boolean;
}

