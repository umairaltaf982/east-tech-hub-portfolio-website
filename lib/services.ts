export type Service = {
  slug: string;
  name: string;
  short: string;
  region: string;
  icon: 'factoring' | 'dispatch' | 'web' | 'ecommerce' | 'truck' | 'growth';
  image: string;
  tagline: string;
  intro: string;
  highlights: string[];
  stats: { value: string; label: string }[];
  tech?: { group: string; items: string[] }[];
  leads?: { name: string; slug: string; covers: string }[];
  offerings: { title: string; body: string; owner?: string }[];
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
    leads: [
      { name: 'Umair Altaf', slug: 'umair-altaf', covers: 'Architecture, delivery and the build team' },
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
    slug: 'digital-marketing',
    name: 'Digital marketing & growth',
    short: 'Meta Ads, Google Ads, SEO and Shopify — measured against booked work.',
    region: 'Global · Paid media, search & commerce',
    icon: 'growth',
    image: '/images/whiteboard.jpg',
    tagline: 'Spend that can be traced to a booked job, not a dashboard full of impressions.',
    intro:
      'We run paid social, paid search, organic search and Shopify storefronts for service businesses and online sellers. Abid Naeem owns Meta advertising and Shopify; Umair Altaf owns Google Ads and SEO. The accounts stay in your name, the tracking is set up properly before a penny is spent, and the monthly report shows enquiries and orders rather than reach.',
    leads: [
      { name: 'Abid Naeem', slug: 'abid-naeem', covers: 'Meta Ads and Shopify' },
      { name: 'Umair Altaf', slug: 'umair-altaf', covers: 'Google Ads and SEO' },
    ],
    highlights: [
      'Meta and Google campaigns built around booked work',
      'Technical and local SEO that moves the map pack',
      'Shopify builds, migrations and conversion work',
    ],
    stats: [
      { value: 'Your accounts', label: 'You own every platform and the data' },
      { value: 'GA4 + CAPI', label: 'Tracking set up before spend starts' },
      { value: 'Monthly', label: 'Reporting on enquiries, not impressions' },
      { value: '2 leads', label: 'Named owners for paid and for search' },
    ],
    offerings: [
      { title: 'Meta Ads', owner: 'Abid Naeem', body: 'Facebook and Instagram campaigns from audience research through creative testing to the weekly read on what produced enquiries. Pixel and Conversions API configured properly so the platform optimises against real outcomes rather than clicks.' },
      { title: 'Shopify', owner: 'Abid Naeem', body: 'New storefronts, migrations from WooCommerce or a marketplace, theme work, app setup, and the checkout and product-page changes that lift conversion. Payments, shipping and tax configured for the countries you actually sell into.' },
      { title: 'Google Ads', owner: 'Umair Altaf', body: 'Search, Performance Max and Shopping campaigns with proper negative keyword work, conversion tracking and call tracking — so you can see which keyword rang the phone and which one only spent money.' },
      { title: 'Search engine optimisation', owner: 'Umair Altaf', body: 'Site structure, internal linking, schema markup, Core Web Vitals, crawl and index hygiene, plus the content work that earns rankings rather than chasing them.' },
      { title: 'Local SEO', owner: 'Umair Altaf', body: 'Google Business Profile, service-area pages, citations and review flow — aimed at the three-result map pack where trades, clinics and transport operators win or lose the enquiry.' },
      { title: 'Tracking & reporting', body: 'GA4, Meta Pixel, Conversions API, Google Tag Manager and call tracking, wired up so every channel reports into the same place. One monthly report across all of it, in the same format each time.' },
    ],
    included: [
      'Every account created in your name and owned by you',
      'Tracking configured and verified before spend begins',
      'A named lead for paid social and a named lead for search',
      'Negative keywords and audience exclusions maintained, not set once',
      'Creative and landing pages tested, not guessed',
      'Call tracking so phone enquiries are counted',
      'One monthly report covering every channel',
      'No long contract — a month of notice is enough',
    ],
    process: [
      { title: 'Audit & baseline', body: 'We look at what is running now, what it costs and what it produced. You get an honest read on whether the problem is spend, targeting, tracking or the page people land on — often it is the last two.' },
      { title: 'Tracking first', body: 'Nothing scales until measurement is right. GA4, pixel, Conversions API and call tracking go in and get verified before we touch budgets.' },
      { title: 'Build & launch', body: 'Campaigns, audiences, creative and landing pages built against a written plan with a budget you have approved. We start small and prove the channel before scaling it.' },
      { title: 'Review monthly', body: 'One report, one call. What spent, what it produced, what we are changing next month and why. If a channel is not earning its place we will tell you to stop it.' },
    ],
    faqs: [
      { q: 'Who actually runs my account?', a: 'Abid Naeem for Meta advertising and Shopify, Umair Altaf for Google Ads and SEO. You deal with the person doing the work, not an account manager relaying messages.' },
      { q: 'Do we own the ad accounts?', a: 'Always. We work inside your Meta Business Manager, your Google Ads account and your Shopify admin. If we part ways you keep the history, the audiences, the creative and the learning.' },
      { q: 'How long before SEO shows anything?', a: 'Technical fixes and Google Business Profile work often move local rankings in four to eight weeks. Competitive organic terms take months. Paid search produces data in days — which is why we usually run both and let paid fund the wait.' },
      { q: 'What budget do we need to start?', a: 'It depends entirely on your market and what a customer is worth to you. We would rather work that out on a call than publish a number that is wrong for your business — and if the maths does not support paid media yet, we will say so.' },
    ],
  },
  {
    slug: 'truck-dispatch',
    name: 'Truck dispatching',
    short: 'A full dispatch desk for US owner-operators and small fleets.',
    region: 'United States · 24/7',
    icon: 'truck',
    image: '/images/truck-road.jpg',
    tagline: 'You drive. We find the loads, argue the rate and handle the paperwork.',
    intro:
      'We run the dispatch desk for owner-operators and small fleets across the United States. That means searching the boards for freight that actually fits your truck and your home time, negotiating the rate instead of accepting the first number, checking the broker before you commit, planning the route around hours of service and fuel, and keeping the paperwork clean so you get paid without chasing. One dispatcher who knows your truck, not a rota of strangers reading a script.',
    highlights: [
      'Load sourcing and rate negotiation on every booking',
      'Route planning around hours of service, weather and fuel',
      'Paperwork, broker setup and 24/7 driver support',
    ],
    stats: [
      { value: '24/7', label: 'A dispatcher you can reach' },
      { value: '48 states', label: 'Where we book freight' },
      { value: 'Dedicated', label: 'One dispatcher per truck' },
      { value: 'Weekly', label: 'Settlement and performance report' },
    ],
    offerings: [
      { title: 'Finding loads', body: 'We work the load boards and our broker relationships to find freight that suits your equipment, your lanes and your home time — not whatever is closest to the top of the list. Dry van, reefer, flatbed, step deck and power only.' },
      { title: 'Rate negotiation', body: 'Every load gets negotiated. We know what the lane paid last week, what the market is doing and when a broker is holding back margin, and we do not book a cheap load just to keep the truck moving.' },
      { title: 'Broker communication', body: 'We set up with new brokers, check credit and days-to-pay before you commit, confirm every detail in writing and take the check calls, the detention conversations and the TONU arguments off your phone.' },
      { title: 'Route planning', body: 'Routes built around hours of service, truck stops, fuel price, weigh stations, tolls, low bridges and weather — so the plan survives contact with the road and you are not improvising at 2am.' },
      { title: 'Paperwork & documentation', body: 'Carrier packets, rate confirmations, bills of lading, proof of delivery, insurance certificates and W-9s — collected, checked and filed. Clean paperwork is the difference between getting paid in days and arguing for a month.' },
      { title: '24/7 support for drivers', body: 'Breakdowns, reroutes, a receiver that will not unload, a shipper running four hours late — somebody picks up. Nights, weekends and holidays, because that is when most of it happens.' },
    ],
    included: [
      'A named dispatcher who knows your truck and your preferences',
      'Rate negotiated on every single load, no exceptions',
      'Broker credit checked before you accept',
      'Route plan with fuel stops and hours-of-service timing',
      'All paperwork handled and filed',
      'Detention, layover and TONU claims pursued on your behalf',
      'Someone reachable 24/7, including weekends',
      'Weekly report: miles, revenue, rate per mile, deadhead',
    ],
    process: [
      { title: 'Onboarding & documents', body: 'We collect your MC and DOT numbers, insurance certificate, W-9 and bank details, and set you up with the broker packets so nothing holds up your first load.' },
      { title: 'Your preferences, written down', body: 'Lanes you will run, lanes you will not, home time, equipment, minimum rate per mile, whether you take New York City. We write it down so every dispatcher works to the same rules.' },
      { title: 'First week together', body: 'We talk through the first few loads before booking so you can see how we negotiate and correct us early. Most of the fine-tuning happens here.' },
      { title: 'Steady state', body: 'We dispatch, you drive. A weekly call covers what the numbers did and whether anything about your preferences should change.' },
    ],
    faqs: [
      { q: 'What does dispatching actually cover?', a: 'Finding and booking freight, negotiating the rate, setting up and dealing with brokers, planning routes, handling every piece of paperwork, and being reachable when something goes wrong on the road. What it does not cover is driving, compliance filing or your authority — those stay yours.' },
      { q: 'Do I have to take every load you find?', a: 'No. Nothing gets booked without your say-so. We work to the preferences we agreed in writing, and if a load falls outside them we either skip it or ring you first.' },
      { q: 'What equipment do you dispatch?', a: 'Dry van, reefer, flatbed, step deck and power only. If you run something unusual, tell us before you sign up and we will say honestly whether we know that market well enough to be useful.' },
      { q: 'How quickly can you start?', a: 'Usually within a day or two of getting your paperwork. Broker setup is the slow part, and we start that the moment you send the documents over.' },
      { q: 'Do you work with new authorities?', a: 'Yes, though be realistic — many brokers will not work with an authority under six months old, and factoring is harder to get. We will tell you up front what that means for your first few months rather than promising loads we cannot find.' },
    ],
  },
  {
    slug: 'factoring',
    name: 'Freight factoring',
    short: 'Connecting US carriers with freight factoring partners.',
    region: 'United States · Carrier cash flow',
    icon: 'factoring',
    image: '/images/dept-factoring.jpg',
    tagline: 'Get to the right factoring company with your questions already answered.',
    intro:
      'Waiting thirty to sixty days for a broker to pay is what stops a carrier taking the next load. Freight factoring closes that gap — you sell the invoice and get most of the money within a day. We work with established factoring companies serving US trucking, and our job is the part before you sign: explaining how it works, what it costs against what it frees up, and whether it suits the way you run. Then we introduce you directly to the right people. The factoring company holds the agreement and pays you; we make sure you walk into it understanding it.',
    highlights: [
      'A plain-English walkthrough of how factoring works',
      'A direct introduction to a factoring partner',
      'Your questions answered before you sign anything',
    ],
    stats: [
      { value: 'US-wide', label: 'Owner-operators and small fleets' },
      { value: 'Direct', label: 'Introduction to a named contact' },
      { value: 'No pressure', label: 'We will tell you if it does not suit' },
      { value: '1 day', label: 'We reply to enquiries' },
    ],
    offerings: [
      { title: 'A conversation about your operation', body: 'Fleet size, the brokers you haul for, how long they take to pay, what fuel is costing you. Factoring suits some carriers and not others, and that call is where you find out which one you are.' },
      { title: 'How factoring works', body: 'Advance rates, the reserve, recourse versus non-recourse, fuel cards and the back-office tools that come bundled with an account — explained in plain English before you speak to anyone in sales.' },
      { title: 'What the application will ask for', body: 'The documents a factor will want — MC and DOT numbers, W-9, certificate of insurance, bank details — and the terms worth reading twice, so nothing in the process catches you out.' },
      { title: 'A direct introduction', body: 'We put you in front of the right person rather than a web form, and pass on what you have already told us, so you are not explaining your situation for the third time.' },
      { title: 'The questions worth asking', body: 'What happens when a broker does not pay, how the reserve is released, how notice periods and minimum volumes work. We will tell you what to ask so you get straight answers rather than a brochure.' },
      { title: 'The rest of your back office', body: 'If factoring is not the answer, or you also need truck dispatching, web work or marketplace support, those are desks we staff ourselves — and we will say so plainly rather than sell you something you do not need.' },
    ],
    included: [
      'A straight answer on whether factoring fits your operation',
      'How advance rates, reserves and fees actually work',
      'Recourse and non-recourse explained in plain English',
      'The document list you will be asked for, before you apply',
      'A named contact rather than a web form',
      'Our read on the terms worth asking about',
      'No obligation to proceed after the call',
      'Conversations on US Eastern hours',
    ],
    process: [
      { title: 'Tell us where the cash is tight', body: 'A short call or a form. How long your brokers take to pay, what you have already tried, and what the gap is actually costing you in missed loads.' },
      { title: 'We walk you through it', body: 'What factoring does, what it costs, and what it will not fix. If the numbers do not work in your favour we will tell you here rather than later.' },
      { title: 'The introduction', body: 'We connect you directly to a factoring partner with your situation already explained, so the first conversation starts somewhere useful.' },
      { title: 'Your agreement', body: 'The factoring company runs the application, the approval and the funding, and pays you directly. If anything they send over needs unpacking, our line stays open.' },
    ],
    faqs: [
      { q: 'Are you a factoring company?', a: 'No. We are an introduction partner. The factoring company underwrites the account, holds the agreement and pays you. What we do is explain how it works, answer your questions honestly and put you in front of the right people.' },
      { q: 'How do you choose who to introduce me to?', a: 'By what you haul, who you haul for and how big you are. A fleet of twenty and a single owner-operator are not well served by the same agreement. If what you need sits outside what our partners do well, we will say so.' },
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
