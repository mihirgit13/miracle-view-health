import { Doctor } from '../types';

export const teamData: Doctor[] = [
  {
    id: 'evelyn-reed',
    name: 'Dr. Evelyn Reed',
    title: 'Medical Director',
    specialty: 'Psychiatry & Neural Therapeutics',
    credential: 'MD, PMHNP',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600',
    description: 'Dr. Evelyn Reed is our leading Medical Director with over 15 years of psychiatric experience. She specializes in neuro-modulation, TMS therapeutic mapping, and integrated psychiatric protocols. She has lectured widely on neuroplasticity.',
    location: 'Las Vegas'
  },
  {
    id: 'mark-davis',
    name: 'Dr. Mark Davis',
    title: 'Clinical Director',
    specialty: 'Clinical Psychology & Somatic Therapy',
    credential: 'PsyD',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600',
    description: 'Dr. Mark Davis directs clinical therapeutic programs. He has pioneered biofeedback-based anxiety treatment and cognitive behavioral therapy models.',
    location: 'Las Vegas'
  },
  {
    id: 'anya-sharma',
    name: 'Dr. Anya Sharma',
    title: 'Board Certified Psychiatrist',
    specialty: 'Trauma & Depression Care',
    credential: 'MD, PMHNP',
    image: 'https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&q=80&w=600',
    description: 'Dr. Sharma focuses on evidence-based treatment for complex mood disturbances and PTSD. She is a certifed expert in Ketamine Infusion support and TMS mapping.',
    location: 'Tempe'
  },
  {
    id: 'creane-goms',
    name: 'Dr. Creane Goms',
    title: 'Board Certified Psychiatrist',
    specialty: 'ADHD & Mood Instability',
    credential: 'MD, PMHNP',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=600',
    description: 'Dr. Goms specializes in neurodevelopmental conditions, pharmacotherapy, and behavioral training programs for teenagers and adults.',
    location: 'Tempe'
  },
  {
    id: 'jasen-hanns',
    name: 'Dr. Jasen Hanns',
    title: 'Board Certified Psychiatrist',
    specialty: 'Addiction & Co-occurring Disorders',
    credential: 'MD, LCSW',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=600',
    description: 'Dr. Hanns brings a wealth of knowledge in detoxification protocols and comprehensive psychiatric recovery, helping patients navigate addictive habits.',
    location: 'Tempe'
  },
  {
    id: 'inoria-polton',
    name: 'Dr. Inoria Polton',
    title: 'Board Certified Psychiatrist',
    specialty: 'Geriatric Psychiatry & Dementia Care',
    credential: 'MD, PMHNP',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600',
    description: 'Dr. Polton focuses on the elderly community, designing low-impact pharmacological regimens, sleep wellness counseling, and cognitive stimulation therapies.',
    location: 'Las Vegas'
  },
  {
    id: 'davier-ptates',
    name: 'Dr. Davier Ptates',
    title: 'Board Certified Psychiatrist',
    specialty: 'Child & Adolescent Behavioral Health',
    credential: 'MD',
    image: 'https://images.unsplash.com/photo-1582750433449-6490e28c9f78?auto=format&fit=crop&q=80&w=600',
    description: 'Dr. Ptates supports younger dynamics. He conducts family counseling integration, learning-block remediation, and behavior adjustment strategies.',
    location: 'Las Vegas'
  },
  {
    id: 'jean-scsins',
    name: 'Dr. Jean Scsins',
    title: 'Board Certified Psychiatrist',
    specialty: 'Obsessive-Compulsive & Anxiety Specialists',
    credential: 'MD, PMHNP',
    image: 'https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?auto=format&fit=crop&q=80&w=600',
    description: 'Dr. Scsins is our primary counselor for heavy OCD programs, employing exposure-response prevention and deep transcranial guidance tools.',
    location: 'Tempe'
  },
  {
    id: 'aerna-sharma',
    name: 'Dr. Aerna Sharma',
    title: 'Board Certified Psychiatrist',
    specialty: 'Biological Psychiatry & Holistic Healing',
    credential: 'MD',
    image: 'https://images.unsplash.com/photo-1618015358954-115ef1ed6515?auto=format&fit=crop&q=80&w=600',
    description: 'Integrating nutrition, fitness profile reviews, and standard medicine, Dr. Aerna Sharma establishes truly comprehensive lifepaths for her patients.',
    location: 'Tempe'
  },
  {
    id: 'claurna-grarire',
    name: 'Dr. Claurna Grarire',
    title: 'Board Certified Psychiatrist',
    specialty: 'Bipolar & Severe Mood Recovery',
    credential: 'MD, LCSW',
    image: 'https://images.unsplash.com/photo-1623854767648-e7bb8c698522?auto=format&fit=crop&q=80&w=600',
    description: 'Having researched complex mood pathways for a decade, Dr. Grarire works closely with patients on lithium therapies and innovative neuro-therapeutics.',
    location: 'Tempe'
  }
];
export const specialtiesList = [
  'All Specialties',
  'Psychiatry',
  'Psychology',
  'Therapy',
  'ADHD & Focus',
  'Somatic Therapy',
  'Adolescent Health',
  'Trauma'
];

export const credentialsList = [
  'All Credentials',
  'MD, PMHNP',
  'PsyD',
  'MD',
  'MD, LCSW'
];

export const locationsList = [
  'All Locations',
  'Las Vegas',
  'Tempe'
];
