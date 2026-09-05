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
  offerings: { title: string; body: string }[];
  included: string[];
  process: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: 'factoring',
    name: 'Factoring & back office',
    short: 'Freight invoice funding and back-office support for US trucking carriers.',
    region: 'United States · RTS partner',
    icon: 'factoring',
    image: '/images/dept-factoring.jpg',
    tagline: 'Turn a delivered load into working capital before the next dispatch.',
    intro:
      'We work with owner-operators and small fleets across the United States to get invoices funded through RTS Financial. That means onboarding you properly, submitting clean paperwork the first time, checking broker credit before you take the load, and keeping the aging report tidy so nothing sits unfunded for three weeks.',
    highlights: [
      'Carrier onboarding and notice of assignment',
      'Same-day submission on clean paperwork',
      'Broker credit checked before you accept a load',
    ],
    stats: [
      { value: '97%', label: 'Typical advance rate' },
      { value: 'Same day', label: 'Funding on clean paperwork' },
      { value: '24h', label: 'Onboarding turnaround' },
      { value: '0', label: 'Setup fees charged by us' },
    ],
    offerings: [
      { title: 'Carrier onboarding', body: 'MC and DOT verification, W-9, notice of assignment, insurance certificates and bank details — packaged and submitted so approval is not delayed by a missing document.' },
      { title: 'Invoice submission & funding', body: 'Rate confirmation, signed bill of lading and proof of delivery checked and submitted the same day the load delivers. Clean paperwork usually funds within hours.' },
      { title: 'Broker credit checks', body: 'Before you accept a load we check the broker credit score, days-to-pay history and any recent claims — so you find out about a slow payer before you drive, not after.' },
      { title: 'Collections & aging', body: 'We chase every invoice past its terms, log the calls, and give you a weekly aging report split by broker so you can stop hauling for the ones who never pay on time.' },
      { title: 'Fuel card programme', body: 'Discount fuel card set up alongside your factoring account, with advances against the card where your agreement allows it.' },
      { title: 'Back-office support', body: 'Settlement reconciliation, driver pay sheets, IFTA-ready mileage records and document filing, so the paperwork does not follow you home.' },
    ],
    included: [
      'Non-recourse and recourse options explained in plain English',
      'No hidden setup or monthly minimum from us',
      'Same-day funding on invoices submitted before cut-off',
      'Broker credit checked before you accept the load',
      'Weekly aging report split by broker and days outstanding',
      'Fuel card with discounts at major truck stops',
      'Document filing that survives an audit',
      'A named account handler on US Eastern hours',
    ],
    process: [
      { title: 'Application review', body: 'We collect your MC number, insurance and bank details and tell you within a day whether the file is fundable and on what terms.' },
      { title: 'Agreement & notice of assignment', body: 'RTS issues the agreement. We walk you through the advance rate, the reserve and what happens with a non-paying broker before you sign anything.' },
      { title: 'First load submitted', body: 'We check the rate confirmation and bill of lading together on your first two or three loads so you learn exactly what clean paperwork looks like.' },
      { title: 'Steady state', body: 'Submit as you deliver. We handle the chasing, the credit checks and the aging report; you handle the driving.' },
    ],
    faqs: [
      { q: 'Are you RTS, or a broker for RTS?', a: 'Neither. We are an authorised partner. RTS holds the funding relationship and the agreement; we do the onboarding, submission, credit checking and collections work so you deal with one team rather than a portal.' },
      { q: 'What does the advance rate actually mean?', a: 'It is the percentage of the invoice paid to you up front. The remainder, less the factoring fee, is released when the broker pays. Rates depend on your volume and the credit quality of the brokers you haul for — 90 to 97 per cent is the usual range.' },
      { q: 'What if a broker never pays?', a: 'On a non-recourse agreement the risk sits with the factor, provided the broker was approved before you took the load. That is exactly why we check credit first — skipping it is what turns a non-recourse agreement into a recourse problem.' },
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
    slug: 'web-development-seo',
    name: 'Web development & SEO',
    short: 'Sites that load fast, rank locally and are measured against booked jobs.',
    region: 'Global · Build & growth',
    icon: 'web',
    image: '/images/dept-web.jpg',
    tagline: 'Sites that load fast, rank locally, and are measured against booked jobs.',
    intro:
      'We build in WordPress and Next.js, fix the technical SEO that stops local service businesses appearing in the map pack, and run Google and Meta ad accounts where the reported number is booked work — not impressions. If a page does not earn its place, we say so.',
    highlights: [
      'WordPress and Next.js builds',
      'Local SEO and Google Business Profile',
      'Google and Meta advertising with call tracking',
    ],
    stats: [
      { value: '90+', label: 'Target Lighthouse score' },
      { value: '< 2.0s', label: 'Largest Contentful Paint' },
      { value: 'Local pack', label: 'Where trades need to rank' },
      { value: 'Monthly', label: 'Reporting cadence' },
    ],
    offerings: [
      { title: 'Business websites', body: 'Fast, accessible marketing sites in WordPress or Next.js, built around the two or three actions you actually want a visitor to take.' },
      { title: 'E-commerce builds', body: 'WooCommerce and Shopify storefronts with real payment, shipping and inventory setup — not a theme demo with your logo dropped on it.' },
      { title: 'Landing pages & CRO', body: 'Single-purpose pages for ad traffic, with the form, the proof and the phone number where people actually look.' },
      { title: 'Technical SEO', body: 'Site structure, internal linking, schema markup, Core Web Vitals, crawl and index hygiene — the unglamorous work that moves rankings.' },
      { title: 'Local SEO', body: 'Google Business Profile, service-area pages, citations and review flow, aimed squarely at the three-result map pack where trades win or lose.' },
      { title: 'Google & Meta Ads', body: 'Search, Performance Max and Meta campaigns built around booked jobs, with call tracking so you can see which keyword actually rang the phone.' },
    ],
    included: [
      'Next.js and WordPress, chosen by fit rather than habit',
      'Core Web Vitals treated as an acceptance criterion',
      'Schema markup and structured data on every service page',
      'Google Business Profile managed alongside the site',
      'Call tracking so ad spend maps to booked jobs',
      'Full redirect mapping on every migration',
      'Accessible to WCAG AA',
      'You own the hosting, the domain and every account',
    ],
    process: [
      { title: 'Discovery & audit', body: 'We look at what you have, what ranks today and where enquiries currently come from, then tell you which of those is worth protecting.' },
      { title: 'Structure & wireframe', body: 'Page structure and content plan agreed before any design. This is where SEO is won or lost.' },
      { title: 'Design & build', body: 'Designed in the browser, built responsive from the start, reviewed on a preview URL you can share with your team.' },
      { title: 'Launch & growth', body: 'Monitored cutover with every old URL mapped, then monthly reporting on rankings, traffic and enquiries.' },
    ],
    faqs: [
      { q: 'WordPress or Next.js?', a: 'Next.js when speed and a custom front end matter and you have someone technical to deploy it. WordPress when non-technical staff must edit pages daily. We will recommend one and explain the trade-off rather than defaulting.' },
      { q: 'How long until SEO shows results?', a: 'Technical fixes and Google Business Profile work often move local rankings within four to eight weeks. Competitive organic terms take longer. We report monthly so you see direction well before outcome.' },
      { q: 'Do we own the ad accounts?', a: 'Always. We work inside your Google Ads and Meta accounts. If we part ways you keep the history, the audiences and the learning.' },
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
