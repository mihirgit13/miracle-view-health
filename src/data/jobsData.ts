import { JobPost } from '../types';

export const jobsData: JobPost[] = [
  {
    id: 'licensed-therapist',
    title: 'Licensed Therapist (LCSW, LPC, LMFT)',
    department: 'Clinical',
    location: 'Tempe, AZ',
    category: 'Clinical',
    type: 'Full-time',
    description: 'We are seeking a compassionate Licensed Therapist to provide individual counseling, group therapy support, and trauma recovery programs. Must hold an active AZ license (LCSW, LMFT, LPC) and be skilled in evidence-based models such as CBT, DBT, or EMDR.'
  },
  {
    id: 'wellness-coach',
    title: 'Wellness Coach',
    department: 'Clinical',
    location: 'Tempe, AZ',
    category: 'Clinical',
    type: 'Full-time',
    description: 'We are seeking an engaging Wellness Coach to guide patients through behavioral health habits, lifestyle adjustments, goal-setting, and emotional wellness routines. You will collaborate with our clinical team to provide integrated support.'
  },
  {
    id: 'behavioural-health-tech',
    title: 'Behavioural Health Technician',
    department: 'Clinical',
    location: 'Tempe, AZ',
    category: 'Clinical',
    type: 'Full-time',
    description: 'Seeking a compassionate Behavioural Health Technician / Peer Support Specialist to assist clients in their recovery journey. You will facilitate peer groups, support daily recovery routines, share lived experiences when appropriate, and provide a welcoming therapeutic space.'
  },
  {
    id: 'psychiatrist',
    title: 'Consulting Psychiatrist (MD / DO)',
    department: 'Medical',
    location: 'Tempe, AZ',
    category: 'Clinical',
    type: 'Part-time / Full-time',
    description: 'Join our physical team in Tempe to perform intake assessments, configure therapeutic TMS mapping values, manage medication regimens, and integrate treatments across other clinical disciplines.'
  },
  {
    id: 'intake-coordinator',
    title: 'Intake Coordinator',
    department: 'Admissions',
    location: 'Tempe, AZ',
    category: 'Administrative',
    type: 'Full-time',
    description: 'Act as the primary customer experience contact for incoming patient inquiries. You will guide new clients through verification of benefits, introduce programs, and book initial consultation calendars.'
  },
  {
    id: 'patient-experience-specialist',
    title: 'Patient Experience Specialist',
    department: 'Operations',
    location: 'Tempe, AZ',
    category: 'Administrative',
    type: 'Full-time',
    description: 'Ensure patients receive a warm, welcoming, and seamless journey at our clinics. You will manage patient satisfaction surveys, support client check-ins, streamline patient portal communications, and coordinate customer service initiatives.'
  },
  {
    id: 'office-manager',
    title: 'Office Manager',
    department: 'Operations',
    location: 'Tempe, AZ',
    category: 'Administrative',
    type: 'Full-time',
    description: 'Support the daily physical flow of our Tempe clinic. You will maintain surgical/clinical inventory, direct clerical staff, supervise record security, and keep public lobby spaces immaculate.'
  }
];
export const officePhotos = [
  'https://miracleviewhealth.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-13-at-01.02.00_3a49b5f0.jpg',
  'https://miracleviewhealth.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-13-at-01.02.01_7a38ed8c.jpg',
  'https://miracleviewhealth.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-13-at-01.02.01_c34744c7.jpg',
  'https://miracleviewhealth.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-13-at-01.02.02_649d9a9a.jpg'
];
export const processJourney = [
  { step: '1', title: 'Initial Consultation', desc: 'Customizes a plan for your initial consultation.' },
  { step: '2', title: 'Personalized Treatment', desc: 'Provide you your personalized treatment plan.' },
  { step: '3', title: 'Treatment & Therapy', desc: 'Flow analyze your treatment & therapy.' },
  { step: '4', title: 'Ongoing Support', desc: 'Compassionate guidance and ongoing support.' }
];
export const testimonialsData = [
  {
    text: '"The team of practitioners at Miracle View Health combined absolute professionalism with deep, compassionate therapy. The mental wellness results exceeded what I believed possible after years of trying."',
    author: 'Sarah L.',
    stars: 5,
    role: 'Patient since 2021',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150'
  },
  {
    text: '"My experience with TMS therapy here completely turned my treatment-resistant depression around. I am incredibly grateful for their advanced neural treatments and kind guidance."',
    author: 'Michael D.',
    stars: 5,
    role: 'Patient since 2022',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150'
  },
  {
    text: '"The virtual sessions made accessing medical therapy totally seamless during my work schedule. HIPAA security and their patient portal are outstanding and highly efficient."',
    author: 'Emily R.',
    stars: 5,
    role: 'Patient since 2023',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150'
  }
];
export const whyChooseUsData = [
  {
    title: 'Evidence Based Practices',
    desc: 'Evidence-based practices to explore clinically proven methodologies and advanced innovations.',
    iconName: 'Activity'
  },
  {
    title: 'Advanced Technology',
    desc: 'Technology technology utilizes can enhance outcomes and the healing presence.',
    iconName: 'Zap'
  },
  {
    title: 'Compassionate Staff',
    desc: 'Compassionate staff is here for your crucial consultation and partnership.',
    iconName: 'Heart'
  },
  {
    title: 'Holistic Approach',
    desc: 'Holistic approach in matching medical proportion and psychological wellness.',
    iconName: 'Leaf'
  }
];
