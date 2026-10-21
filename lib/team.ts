export type Member = {
  slug: string;
  name: string;
  role: string;
  department: string;
  initials: string;
  gradient: [string, string];
  /** Drop a photo at /public/images/team/<slug>.jpg and set this to that path. */
  photo?: string;
  short: string;
  since: string;
  hours: string;
  bio: string[];
  owns: string[];
  facts: { label: string; value: string }[];
};

export const team: Member[] = [
  {
    slug: 'muhammad-abdullah',
    name: 'Muhammad Abdullah',
    role: 'Chief Executive Officer',
    department: 'Executive',
    initials: 'MA',
    gradient: ['#2E6BD6', '#16305C'],
    short: 'Sets direction across the six departments and owns client relationships at board level.',
    photo: '/images/team/muhammad-abdullah.jpg',
    since: '2021',
    hours: 'UK & US hours',
    bio: [
      'Abdullah founded East Tech Hub in 2021 after three years running operations for a UK private-hire group. He started the company with a single overnight dispatch desk and the conviction that outsourcing fails when nobody writes anything down.',
      'He now sets direction across all six departments, holds the commercial relationships with our factoring partners and the larger UK operators, and still reads every runbook before a new account goes live.',
    ],
    owns: [
      'Company strategy and department structure',
      'Partner relationships — factoring companies and dispatch vendors',
      'Client escalation of last resort',
      'Runbook standards across all desks',
    ],
    facts: [
      { label: 'Leads', value: 'Executive' },
      { label: 'Based', value: 'Lahore, PK' },
      { label: 'Focus', value: 'Strategy & partners' },
    ],
  },
  {
    slug: 'abid-naeem',
    name: 'Abid Naeem',
    role: 'Managing Director',
    department: 'Executive',
    initials: 'AN',
    gradient: ['#2FA8E4', '#0C6BA6'],
    photo: '/images/team/abid-naeem.jpg',
    short: 'Runs the business day to day, and owns Meta advertising and Shopify delivery.',
    since: '2021',
    hours: 'UK hours',
    bio: [
      'Abid runs the company day to day. He is the person who decides whether a desk can genuinely be staffed for the hours a client is asking about, and he would rather turn work away than start a rota the team cannot hold.',
      'He owns commercial terms, capacity planning across the six departments, and the monthly review that every client account goes through.',
      'He also runs the Meta advertising and Shopify side of the growth department himself — campaign strategy, creative direction and the storefront work behind it — because it is the part of the business he came up through and he would rather stay close to the numbers than read them in a report.',
    ],
    owns: [
      'Meta Ads — strategy, creative direction and spend',
      'Shopify builds, migrations and conversion work',
      'Commercial terms and pricing by desk',
      'Capacity and rota planning across departments',
      'Monthly client account reviews',
    ],
    facts: [
      { label: 'Leads', value: 'Meta Ads & Shopify' },
      { label: 'Based', value: 'Lahore, PK' },
      { label: 'Focus', value: 'Paid social & commerce' },
    ],
  },
  {
    slug: 'usman-majeed',
    name: 'Usman Majeed',
    role: 'Head of Department — East Tech Hub',
    department: 'Operations',
    initials: 'UM',
    gradient: ['#3FC49B', '#0C6BA6'],
    photo: '/images/team/usman-majeed.jpg',
    short: 'Owns service delivery across the operations floor and the standard every desk is held to.',
    since: '2021',
    hours: 'Rotating',
    bio: [
      'Usman heads the operations floor. Where Abid decides what we take on, Usman is accountable for how it is delivered — quality standards, training, escalation handling and the audits that check a desk is following its own runbook.',
      'He built the two-week induction that every new starter goes through, and he personally signs off each team lead before they take an account of their own.',
    ],
    owns: [
      'Service delivery standards across all desks',
      'Induction, training and lead certification',
      'Runbook audits and quality reviews',
      'Escalations that cross departments',
    ],
    facts: [
      { label: 'Leads', value: 'Operations floor' },
      { label: 'Based', value: 'Lahore, PK' },
      { label: 'Focus', value: 'Delivery & quality' },
    ],
  },
  {
    slug: 'umair-altaf',
    name: 'Umair Altaf',
    role: 'Head of Software Development',
    department: 'Software Development',
    initials: 'UA',
    gradient: ['#7C6BF0', '#16305C'],
    photo: '/images/team/umair-altaf.jpg',
    short: 'Heads software development — web apps, mobile apps and custom software across the full stack.',
    since: '2022',
    hours: 'PKT + UK overlap',
    bio: [
      'Umair heads software development, our largest department. His team builds web applications, mobile apps, APIs and custom business software — Python, Django and Django REST on the back end, React and Next.js on the front, React Native and Flutter for mobile, Laravel and PHP where the stack calls for it, with PostgreSQL and MySQL underneath.',
      'He also owns Google Ads and SEO, the search side of the growth department, and maintains the internal tooling the operations desks run on. He is uncompromising about performance budgets and accessibility, which is why nothing ships without passing Core Web Vitals and a keyboard-navigation check.',
    ],
    owns: [
      'Web, mobile and custom software delivery',
      'Architecture and technology selection on every build',
      'Performance, accessibility and technical SEO standards',
      'Google Ads and SEO delivery',
      'Internal tooling for the operations desks',
    ],
    facts: [
      { label: 'Leads', value: 'Software development' },
      { label: 'Based', value: 'Lahore, PK' },
      { label: 'Focus', value: 'Full-stack, mobile & growth' },
    ],
  },
  {
    slug: 'faizan-shahid',
    name: 'Faizan Shahid',
    role: 'Team Lead — Call Services',
    department: 'Operations',
    initials: 'FS',
    gradient: ['#E9B44C', '#0C6BA6'],
    photo: '/images/team/faizan-shahid.jpg',
    short: 'Runs the overnight UK dispatch desk and the rota that keeps it covered.',
    since: '2022',
    hours: 'UK nights',
    bio: [
      'Faizan came up through the phones and now leads the overnight UK dispatch desk. He owns the night rota, the shift handover notes your day team reads each morning, and the first line of escalation when something goes wrong at 3am.',
      'If you run a private-hire operation and outsource your nights to us, Faizan is the person whose name is on your account.',
    ],
    owns: [
      'Overnight UK dispatch desk',
      'Night rota and shift handover',
      'Driver and passenger escalation after hours',
      'Answer-time and cancellation reporting',
    ],
    facts: [
      { label: 'Leads', value: 'Night dispatch' },
      { label: 'Covers', value: 'UK 21:00–07:00' },
      { label: 'Focus', value: 'Dispatch & escalation' },
    ],
  },
  {
    slug: 'daud-ather',
    name: 'Daud Ather',
    role: 'Meta Ads Handler',
    department: 'Software Development',
    initials: 'DA',
    gradient: ['#38BDD0', '#16305C'],
    photo: '/images/team/daud-athar.jpg',
    short: 'Plans and runs Meta ad campaigns, and keeps the reporting honest.',
    since: '2023',
    hours: 'US hours',
    bio: [
      'Daud handles Meta advertising — Facebook and Instagram campaigns from audience build to creative testing to the weekly read on what actually worked. He works inside your own Business Manager, so the account, the audiences and the learning stay yours.',
      'He reports on booked work rather than impressions. If a campaign is spending without producing enquiries he will say so and turn it off, which is a shorter conversation than most agencies are willing to have.',
    ],
    owns: [
      'Meta campaign strategy and build',
      'Audience research and creative testing',
      'Ad spend against booked work, reported monthly',
      'Pixel, conversions API and tracking setup',
    ],
    facts: [
      { label: 'Runs', value: 'Meta advertising' },
      { label: 'Based', value: 'Lahore, PK' },
      { label: 'Focus', value: 'Paid social & reporting' },
    ],
  },
];

export const getMember = (slug: string) => team.find((m) => m.slug === slug);
