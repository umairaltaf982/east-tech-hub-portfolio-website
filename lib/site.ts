export const site = {
  name: 'East Tech Hub',
  tagline: 'Operations and digital partner',
  url: 'https://easttechhub.com',
  email: 'info@easttechhub.com',
  phone: '+92 328 2777277',
  phoneHref: 'tel:+923282777277',
  whatsapp: 'https://wa.me/923282777277',
  whatsappDisplay: '+92 328 2777277',
  address: {
    line1: 'Sharazi Street, unit 6/7',
    line2: 'Lahore, Punjab, Pakistan',
  },
  socials: {
    facebook: 'https://www.facebook.com/profile.php?id=61589039654274',
    instagram: 'https://www.instagram.com/easttechhub_/?hl=en',
    linkedin: 'https://www.linkedin.com/in/muhammad-abdullah-5b47513b2',
  },
  countries: ['United Kingdom', 'United States', 'Canada', 'Ireland', 'Saudi Arabia', 'United Arab Emirates'],
} as const;

export const stats = [
  { value: '5+', label: 'Years in operation' },
  { value: '50+', label: 'Projects delivered' },
  { value: '40+', label: 'Active client accounts' },
  { value: '24/7', label: 'Desk coverage' },
];

export const deskHours = [
  { desk: 'UK dispatch desk', hours: '24 / 7' },
  { desk: 'US factoring desk', hours: '09:00–18:00 EST' },
  { desk: 'Web, SEO & e-commerce', hours: '10:00–19:00 PKT, Mon–Sat' },
  { desk: 'New enquiries', hours: 'Answered daily' },
];

/* Placeholder client marks. Replace with real client names you have
   written permission to display, or delete the strip entirely. */
export const clientMarks = [
  { name: 'NORTHGATE', style: '' },
  { name: 'Calder & Co.', style: 'italic' },
  { name: 'MERIDIAN', style: 'tracked' },
  { name: 'brightline/', style: 'mono' },
  { name: 'PORTSIDE', style: '' },
  { name: 'KESTREL', style: 'tracked' },
];
