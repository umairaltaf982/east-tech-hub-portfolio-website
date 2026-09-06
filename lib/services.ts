export type Service = {
  slug: string;
  name: string;
  short: string;
  region: string;
  icon: 'factoring' | 'dispatch' | 'web' | 'ecommerce';
  image: string;
  tagline: string;
  intro: string;
  highlights: string[];
  stats: { value: string; label: string }[];
  tech?: { group: string; items: string[] }[];
  offerings: { title: string; body: string }[];
  included: string[];
  process: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: 'software-development',
    name: 'Software development',
    short: 'Web apps, mobile apps and custom software — plus SEO and Meta ads.',
    region: 'Global · Build, launch & grow',
    icon: 'web',
    image: '/images/dept-web.jpg',
    tagline: 'Web, mobile and custom software, built by an in-house team you can talk to.',
    intro:
      'This is our largest department. We build web applications, mobile apps, APIs and business software end to end — Python and Django on the back end, React and Next.js on the front, React Native and Flutter on mobile, Laravel and PHP where the stack calls for it, with PostgreSQL and MySQL underneath. The same team handles the marketing side once it is live: technical and local SEO, Google and Meta advertising measured against booked work rather than impressions.',
    highlights: [
      'Web apps, mobile apps, APIs and custom business software',
      'Python, Django, React, Next.js, Node, Laravel, Flutter, React Native',
      'SEO, Google Ads and Meta Ads on the same team',
    ],
    stats: [
      { value: '12+', label: 'Languages and frameworks in-house' },
      { value: 'iOS + Android', label: 'From one React Native or Flutter codebase' },
      { value: '90+', label: 'Target Lighthouse score' },
      { value: 'Monthly', label: 'Reporting cadence' },
    ],
    tech: [
      { group: 'Back end', items: ['Python', 'Django', 'Django REST Framework', 'Node.js', 'Express', 'Laravel', 'PHP', 'REST & GraphQL APIs'] },
      { group: 'Front end', items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML & CSS', 'Tailwind'] },
      { group: 'Mobile', items: ['React Native', 'Flutter', 'iOS', 'Android'] },
      { group: 'Data & platform', items: ['PostgreSQL', 'MySQL', 'SQL', 'MongoDB', 'Redis', 'Docker', 'AWS', 'Vercel', 'CI/CD'] },
      { group: 'CMS & commerce', items: ['WordPress', 'WooCommerce', 'Shopify', 'Headless CMS'] },
      { group: 'Growth', items: ['Technical SEO', 'Local SEO', 'Google Ads', 'Meta Ads', 'GA4', 'Call tracking'] },
    ],
    offerings: [
      { title: 'Custom software & web applications', body: 'Dashboards, portals, booking systems, internal tools and line-of-business software built in Django, Node or Laravel with a React or Next.js front end — scoped against how your business actually works, not a template.' },
      { title: 'Mobile app development', body: 'iOS and Android apps in React Native or Flutter from a single codebase, with native modules where the app genuinely needs them, plus store submission and release management.' },
      { title: 'APIs & integrations', body: 'REST and GraphQL APIs, third-party integrations, payment gateways and data pipelines — including connecting software you already run to systems that were never meant to talk to each other.' },
      { title: 'Websites & e-commerce', body: 'Marketing sites in WordPress or Next.js, and WooCommerce and Shopify storefronts with real payment, shipping and inventory setup rather than a theme demo with your logo on it.' },
      { title: 'SEO & search visibility', body: 'Site structure, schema markup, Core Web Vitals, crawl and index hygiene, Google Business Profile and service-area pages — the unglamorous work that actually moves rankings.' },
      { title: 'Google & Meta advertising', body: 'Search, Performance Max and Meta campaigns built around booked jobs, with call tracking so you can see which keyword rang the phone and which one only spent money.' },
    ],
    included: [
      'A named developer and a lead you speak to directly',
      'Framework chosen by fit rather than habit — and the reasoning explained',
      'Source code in your repository, from the first commit',
      'Core Web Vitals and accessibility treated as acceptance criteria',
      'Staging URL you can share with your team before anything ships',
      'Schema markup and structured data on every service page',
      'Call tracking so ad spend maps to booked work',
      'You own the hosting, the domain, the repo and every ad account',
    ],
    process: [
      { title: 'Scoping & technical discovery', body: 'We map what the software has to do, what it has to talk to, and what already exists. You get a written scope with a stack recommendation and the trade-offs spelled out before anyone estimates.' },
      { title: 'Architecture & design', body: 'Data model, API surface and screen flow agreed up front. For anything user-facing, structure and wireframes come before visual design — that is where both usability and SEO are won.' },
      { title: 'Build in visible increments', body: 'Two-week increments on a staging URL you can open whenever you like. You see working software early instead of a status report.' },
      { title: 'Launch, then growth', body: 'Monitored release with every old URL mapped, then monthly reporting on performance, rankings, traffic and enquiries — and a support arrangement if you want one.' },
    ],
    faqs: [
      { q: 'What can you actually build?', a: 'Web applications, mobile apps for iOS and Android, REST and GraphQL APIs, internal business tools, e-commerce storefronts and marketing sites. In practice: if it runs in a browser, on a phone or on a server, it is in scope. If something genuinely sits outside what we do well, we will say so rather than learn it on your budget.' },
      { q: 'Which technologies do you work in?', a: 'Python, Django and Django REST Framework, Node.js, Laravel and PHP on the back end. React, Next.js and TypeScript on the front. React Native and Flutter for mobile. PostgreSQL, MySQL and MongoDB for data, deployed on AWS or Vercel with Docker and CI/CD. WordPress, WooCommerce and Shopify where a CMS or storefront is the right answer.' },
      { q: 'Who owns the code?', a: 'You do, from the first commit. We work in your repository, or hand one over in full. The same applies to hosting, domains, ad accounts and analytics — nothing is held hostage.' },
      { q: 'Can you take over a project someone else started?', a: 'Yes, and it is a large part of what we do. We start with a paid audit of the codebase so you get an honest read on what is salvageable before you commit to a rebuild you may not need.' },
      { q: 'Do we own the ad accounts?', a: 'Always. We work inside your Google Ads and Meta accounts. If we part ways you keep the history, the audiences and the learning.' },
    ],
  },
  {
    slug: 'factoring',
    name: 'Freight factoring introductions',
    short: 'Introducing US carriers to RTS Financial for invoice factoring.',
    region: 'United States · RTS referral partner',
    icon: 'factoring',
    image: '/images/dept-factoring.jpg',
    tagline: 'Get to the right factoring company with your questions already answered.',
    intro:
      'We are a referral partner for RTS Financial, one of the largest factoring companies serving US trucking. If the gap between delivering a load and the broker paying is what holds your operation back, we will walk you through how factoring with RTS works, what it costs against what it frees up, and whether it actually suits the way you run — then introduce you directly to the RTS team. RTS holds the funding agreement and pays you. Our job is making sure you walk into that agreement understanding it.',
    highlights: [
      'A plain-English walkthrough of how RTS factoring works',
      'A direct introduction to the RTS team',
      'Your questions answered before you sign anything',
    ],
    stats: [
      { value: 'RTS', label: 'Financial — our factoring partner' },
      { value: 'US-wide', label: 'Owner-operators and small fleets' },
      { value: 'Direct', label: 'Introduction to the RTS team' },
      { value: '1 day', label: 'We reply to enquiries' },
    ],
    offerings: [
      { title: 'A conversation about your operation', body: 'Fleet size, the brokers you haul for, how long they take to pay, what fuel is costing you. Factoring suits some carriers and not others, and that call is where you find out which one you are.' },
      { title: 'How RTS factoring works', body: 'Advance rates, the reserve, recourse and non-recourse, the fuel card and the back-office tools that come with the account — explained in plain English before you speak to anyone in sales.' },
      { title: 'What the application will ask for', body: 'The documents RTS will want — MC and DOT numbers, W-9, certificate of insurance, bank details — and the terms worth reading twice, so nothing in the process catches you out.' },
      { title: 'A direct introduction', body: 'We put you in front of the right person at RTS rather than a web form, and pass on what you have already told us, so you are not explaining your situation for the third time.' },
      { title: 'The questions worth asking', body: 'What happens when a broker does not pay, how the reserve is released, how notice periods work. We will tell you what to ask so you get straight answers rather than a brochure.' },
      { title: 'The rest of your back office', body: 'If factoring is not the answer, or you also need dispatch cover, web work or marketplace support, those are desks we staff ourselves — and we will say so plainly rather than sell you something you do not need.' },
    ],
    included: [
      'A straight answer on whether factoring fits your operation',
      'How advance rates, reserves and fees actually work',
      'Recourse and non-recourse explained in plain English',
      'The document list RTS will ask for, before you apply',
      'A named contact at RTS rather than a web form',
      'Our read on the terms worth asking about',
      'No obligation to proceed after the call',
      'Conversations on US Eastern hours',
    ],
    process: [
      { title: 'Tell us where the cash is tight', body: 'A short call or a form. How long your brokers take to pay, what you have already tried, and what the gap is actually costing you in missed loads.' },
      { title: 'We walk you through RTS', body: 'What the product does, what it costs, and what it will not fix. If the numbers do not work in your favour we will tell you that here rather than later.' },
      { title: 'The introduction', body: 'We connect you directly to the RTS team with your situation already explained, so the first conversation starts somewhere useful.' },
      { title: 'Your agreement with RTS', body: 'RTS runs the application, the approval and the funding, and pays you directly. If anything they send over needs unpacking, our line stays open.' },
    ],
    faqs: [
      { q: 'Are you a factoring company?', a: 'No. We are a referral partner for RTS Financial. RTS is the factoring company — they underwrite the account, hold the agreement and pay you. What we do is explain how it works, answer your questions honestly and introduce you to the right people there.' },
      { q: 'Why RTS rather than another factor?', a: 'RTS is one of the largest factoring companies in US trucking, and it is the one we know well enough to explain properly. The fuel card, the load board and the back-office tools that come with an account often matter as much as the advance rate. If what you need sits outside what they do, we will say so.' },
      { q: 'Does factoring suit every carrier?', a: 'No. If your brokers pay inside fifteen days and your margins are thin, the fee can cost you more than the cash-flow gap is worth. We would rather tell you that on a call than introduce you to something that does not help.' },
      { q: 'What should I have ready before we talk?', a: 'Your MC and DOT numbers, a rough monthly invoice volume, the brokers you haul for most often and how long they usually take to pay. That is enough for a conversation worth having.' },
    ],
  },
  {
    slug: 'taxi-dispatch',
    name: 'Taxi & private hire dispatch',
    short: 'A 24/7 remote dispatch desk working inside your own system.',
    region: 'United Kingdom · 24/7',
    icon: 'dispatch',
    image: '/images/dept-dispatch.jpg',
    tagline: 'A private-hire desk that answers in twelve seconds, at three in the morning.',
    intro:
      'We run remote dispatch desks for UK private-hire and taxi operators, working inside your own system — Cordic, Autocab, Cab9 or iCabbi. We take the bookings, allocate the jobs, keep drivers moving and handle the account work overnight, so you are not paying a full in-house team to cover the quiet hours.',
    highlights: [
      'Booking intake and job allocation',
      'Account work and flight-tracked airport pickups',
      'Permanent night team on a fixed rota',
    ],
    stats: [
      { value: '24/7', label: 'Desk coverage available' },
      { value: '12s', label: 'Average answer time' },
      { value: '50+', label: 'Vehicles under management' },
      { value: '4', label: 'Dispatch platforms supported' },
    ],
    offerings: [
      { title: 'Booking intake', body: 'Phone, email and app bookings taken and entered with passenger details, pickup and drop-off, vehicle type and any account reference — first time, without a call-back.' },
      { title: 'Job allocation & dispatch', body: 'Jobs allocated by proximity and driver availability inside your system, with run-ins managed so drivers are not sent across town for a two-mile fare.' },
      { title: 'Airport & account work', body: 'Flight numbers tracked so pickups move with the actual landing time, and corporate account jobs handled to the rules in your runbook — including who gets a meet-and-greet.' },
      { title: 'Driver coordination', body: 'Traffic and road-closure updates relayed, waiting-time rules applied consistently, and no-shows logged with the evidence your accounts team needs.' },
      { title: 'Passenger communication', body: 'ETAs, vehicle details and fare quotations given on request, plus proactive calls when a job is running late so the complaint never happens.' },
      { title: 'Records & handover', body: 'Every booking, driver shift, cancellation and incident logged. A written handover note goes to your day team at the end of every night shift.' },
    ],
    included: [
      'Works inside your existing dispatch software — no migration',
      'Overnight cover, weekend cover or full 24/7',
      'Permanent night team on a fixed rota, not rotating volunteers',
      'Written escalation rules for accidents, breakdowns and abusive callers',
      'Account job rules applied exactly as your office would',
      'Flight tracking on airport pickups',
      'Daily shift handover notes',
      'Weekly report: volume, answer times, cancellations, no-shows',
    ],
    process: [
      { title: 'System access & shadowing', body: 'Read-only access to your dispatch system first. Our team listens to live calls for three to five days and writes down how your office actually makes decisions.' },
      { title: 'Runbook sign-off', body: 'You get a written document covering greetings, pricing logic, account rules, escalation contacts and edge cases. Nothing goes live until you have edited it.' },
      { title: 'Parallel night run', body: 'We take the overnight window while your team keeps days. Both sides review answer times and cancellations each morning for two weeks.' },
      { title: 'Agreed hours live', body: 'The desk takes its full hours. Your team lead reviews the runbook with you monthly and updates it as your account base changes.' },
    ],
    faqs: [
      { q: 'Do we have to change our dispatch software?', a: 'No. We log into yours. We are experienced on Cordic, Autocab, Cab9 and iCabbi, and we can learn another system during the shadowing period if you use something else.' },
      { q: 'How do you handle a driver refusing a job?', a: 'However your runbook says. Most operators have us log it, reallocate immediately, and flag repeat refusals in the weekly report rather than argue on the radio at 2am.' },
      { q: 'Can we start with nights only?', a: 'That is how most operators start, and it is the window where outsourcing pays for itself fastest. You can extend to full 24/7 later with a month of notice.' },
    ],
  },
  {
    slug: 'ecommerce',
    name: 'E-commerce operations',
    short: 'Amazon advertising, catalogue integrity and storefront builds.',
    region: 'Marketplaces · Storefronts',
    icon: 'ecommerce',
    image: '/images/dept-ecom.jpg',
    tagline: 'Amazon accounts run to a target ACoS, and catalogues that stay clean.',
    intro:
      'We manage Amazon advertising and catalogue operations, watch listings for suppression and Buy Box loss, and build Shopify and WooCommerce storefronts. The day-to-day monitoring is the part most sellers cannot staff — so that is the part we cover properly.',
    highlights: [
      'Amazon PPC to an agreed ACoS target',
      'Catalogue, A+ content and storefront',
      'Daily Buy Box and suppression checks',
    ],
    stats: [
      { value: 'ACoS', label: 'The number we manage to' },
      { value: 'Daily', label: 'Listing & Buy Box checks' },
      { value: 'A+', label: 'Content built in-house' },
      { value: '2', label: 'Storefront platforms supported' },
    ],
    offerings: [
      { title: 'Amazon PPC management', body: 'Sponsored Products, Brands and Display structured properly — exact, phrase and broad separated, search terms harvested weekly, bids managed to an agreed ACoS target rather than a guess.' },
      { title: 'Catalogue management', body: 'Titles, bullets, backend keywords, variations and category attributes kept correct and consistent across the whole catalogue.' },
      { title: 'A+ content & storefront', body: 'Enhanced brand content and Amazon storefront pages built to carry the brand rather than repeat the bullet points.' },
      { title: 'Store monitoring', body: 'A virtual assistant checking daily for listing suppression, Buy Box loss, hijackers, stock-out risk and negative review spikes — with a same-day alert when something breaks.' },
      { title: 'Shopify & WooCommerce builds', body: 'Storefronts with payments, shipping rules, tax and inventory actually configured, plus the analytics to see where checkout leaks.' },
      { title: 'Meta & Google shopping ads', body: 'Catalogue feeds, dynamic product ads and retargeting run alongside the marketplace work so the two are not competing for the same buyer.' },
    ],
    included: [
      'Campaigns managed to an agreed ACoS or TACoS target',
      'Weekly search-term harvesting and negative keyword work',
      'Daily Buy Box and suppression monitoring',
      'Stock-out risk flagged before it costs ranking',
      'A+ content and storefront design in-house',
      'Shopify and WooCommerce builds with real configuration',
      'Monthly report: spend, ACoS, sessions, conversion, units',
      'You keep full ownership of Seller Central and every ad account',
    ],
    process: [
      { title: 'Account audit', body: 'We review campaign structure, catalogue health and the last ninety days of performance, and give you a written list of what is actually costing money.' },
      { title: 'Restructure', body: 'Campaigns rebuilt by match type and intent, catalogue errors cleared, and a target ACoS agreed before we touch a bid.' },
      { title: 'Monitoring live', body: 'Daily checks begin: Buy Box, suppression, stock, reviews. You are alerted the same day, not in the monthly report.' },
      { title: 'Optimise & report', body: 'Weekly search-term work and bid adjustments, with a monthly report you can read in five minutes.' },
    ],
    faqs: [
      { q: 'Will you take over our Seller Central?', a: 'We work inside your account with the permissions you grant. You keep ownership, and you can revoke access at any point without losing anything.' },
      { q: 'What ACoS should we target?', a: 'It depends on margin and whether you are defending rank or harvesting profit. We agree the number with you first, then manage to it — a target chosen without knowing your margin is meaningless.' },
      { q: 'Can you do the storefront and the ads?', a: 'Yes, and it works better together. The same team building the Shopify store also runs the catalogue feed, so product data does not drift between the two.' },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

/* Short technology rail used on software-development pages. */
export const techRail = [
  'Python', 'Django', 'Django REST', 'React', 'Next.js', 'Node.js', 'TypeScript',
  'React Native', 'Flutter', 'Laravel', 'PHP', 'PostgreSQL', 'MySQL', 'MongoDB',
  'WordPress', 'Shopify', 'AWS', 'Docker',
];
