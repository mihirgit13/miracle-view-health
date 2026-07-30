import { InsuranceProvider } from '../types';

export const insuranceProviders: InsuranceProvider[] = [
  {
    id: 'medicare',
    name: 'Medicare',
    shortName: 'Medicare',
    websiteUrl: 'https://www.medicare.gov',
    phone: '1-800-633-4227',
    logoColor: '#0076a3',
    popular: true
  },
  {
    id: 'cigna',
    name: 'Cigna',
    shortName: 'Cigna',
    websiteUrl: 'https://www.cigna.com',
    phone: '1-800-997-1654',
    logoColor: '#09825d',
    popular: true
  },
  {
    id: 'bcbs',
    name: 'Blue Cross / Blue Shield',
    shortName: 'BCBS',
    websiteUrl: 'https://www.bcbs.com',
    phone: '1-800-810-BLUE',
    logoColor: '#0055a5',
    popular: true
  },
  {
    id: 'aetna',
    name: 'Aetna',
    shortName: 'Aetna',
    websiteUrl: 'https://www.aetna.com',
    phone: '1-800-872-3862',
    logoColor: '#7c1a80',
    popular: true
  },

  {
    id: 'uhc',
    name: 'UnitedHealthcare',
    shortName: 'UHC',
    websiteUrl: 'https://www.uhc.com',
    phone: '1-866-633-2446',
    logoColor: '#1e306e',
    popular: true
  },

  {
    id: 'humana',
    name: 'Humana',
    shortName: 'Humana',
    websiteUrl: 'https://www.humana.com',
    phone: '1-800-448-6262',
    logoColor: '#7aa31b',
    popular: true
  }
];
