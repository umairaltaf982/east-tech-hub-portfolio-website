/* ---------------- Blog posts ---------------- */
export type Block =
  | { type: 'p'; text: string }
  | { type: 'h'; text: string }
  | { type: 'quote'; text: string }
  | { type: 'ul'; items: string[] };

export type Post = {
  slug: string; title: string; category: string; date: string; iso: string;
  read: string; author: string; excerpt: string; image: string; body: Block[];
};

export const posts: Post[] = [
  {
    slug: 'three-am-problem',
    title: 'The 3am problem: why UK operators lose account work overnight',
    category: 'Taxi dispatch', date: '19 August 2026', iso: '2026-08-19', read: '4 min',
    author: 'Faizan Shahid', image: '/images/taxi-city.jpg',
    excerpt: 'Account customers do not leave because of one bad night. They leave because of the pattern nobody was measuring.',
    body: [
      { type: 'p', text: 'Ask a private-hire operator where they lose account work and most will say price. In our experience it is almost never price. It is the 2am to 5am window, and it is nearly always invisible until the contract is already gone.' },
      { type: 'h', text: 'Why the quiet hours cost the most' },
      { type: 'p', text: 'Overnight volume is low, so operators staff it thin — often one person also doing the books, or a driver answering the radio between jobs. Low volume also means every single call carries more weight. A missed hotel account booking at 3am is not one lost fare; it is the night porter deciding to use someone else tomorrow.' },
      { type: 'quote', text: 'Low volume is exactly why the quiet hours need a dedicated desk. There is no room to absorb a mistake.' },
      { type: 'h', text: 'The pattern to look for' },
      { type: 'ul', items: [
        'Answer time after midnight. If it drifts past thirty seconds, account callers start hanging up and trying the next number in their list.',
        'Repeat calls on the same booking. A caller ringing back to confirm means the first call did not land properly.',
        'Cancellations between 02:00 and 05:00. These are usually a passenger who found another car, not one who changed their mind.',
        'Account jobs versus street work overnight. If the account share is falling month on month, you are already losing the contract.',
      ]},
      { type: 'h', text: 'What a dedicated night desk changes' },
      { type: 'p', text: 'It is not that a remote desk works harder than your night staff. It is that the night desk only does one thing, follows a written runbook, and is measured on answer time every single shift. The account rules sit in a document rather than in the memory of whoever happens to be on.' },
      { type: 'p', text: 'Start by pulling your answer times for the last sixty nights. If the overnight numbers look different from the daytime ones, you have found the problem without needing anyone opinion.' },
    ],
  },
  {
    slug: 'advance-rate-cash-flow',
    title: 'What a 97% advance rate actually means for your cash flow',
    category: 'Factoring', date: '28 August 2026', iso: '2026-08-28', read: '5 min',
    author: 'Daud Ather', image: '/images/truck-road.jpg',
    excerpt: 'The headline percentage is the least interesting number in a factoring agreement. Here is what to read instead.',
    body: [
      { type: 'p', text: 'Every factoring pitch leads with an advance rate. It is the easiest number to compare and the least useful one on its own, because two agreements at the same rate can leave you with very different amounts of cash in hand at the end of a month.' },
      { type: 'h', text: 'What the rate is actually describing' },
      { type: 'p', text: 'The advance rate is the share of the invoice face value paid to you when the invoice is funded. At 97% on a $2,400 load, you see $2,328 quickly. The remaining $72 is reserve, released when the broker pays — less the factoring fee.' },
      { type: 'p', text: 'So the rate tells you about timing, not cost. The question to ask is not what your advance rate is, but: on a $2,400 load paid by the broker in 32 days, what do I end up with, and when?' },
      { type: 'quote', text: 'Ask for the total on a worked example. A factor who will not run the numbers on your actual load is telling you something.' },
      { type: 'h', text: 'The three things that move the number more than the rate' },
      { type: 'ul', items: [
        'Broker credit quality. A factor prices for the risk in your customer base. Hauling for slow-paying brokers costs you rate whether or not anyone says so out loud.',
        'Paperwork cleanliness. A missing signature on a bill of lading turns same-day funding into a three-day wait. Across a month that is real working capital.',
        'Fee structure. Flat fee, tiered by days outstanding, or a per-invoice charge on top — these differ far more between agreements than advance rates do.',
      ]},
      { type: 'h', text: 'Where the desk work pays for itself' },
      { type: 'p', text: 'We check the rate confirmation against the bill of lading before submission. We call the broker on day 31 rather than day 45. We check credit before you accept the load rather than after you have driven it. None of that changes your advance rate. All of it changes how much cash is actually in your account at the end of the month.' },
    ],
  },
  {
    slug: 'core-web-vitals-local',
    title: 'Core Web Vitals for local service sites: the three fixes that matter',
    category: 'Web & SEO', date: '29 July 2026', iso: '2026-07-29', read: '5 min',
    author: 'Umair Altaf', image: '/images/whiteboard.jpg',
    excerpt: 'Most local business sites fail the same three checks. None of them need a rebuild to fix.',
    body: [
      { type: 'p', text: 'We audit a lot of plumber, roofer and taxi websites. The performance failures cluster tightly, and in most cases you can fix them without touching the design.' },
      { type: 'h', text: '1. The hero image is the problem' },
      { type: 'p', text: 'On nearly every site we look at, Largest Contentful Paint is the hero image, served as an unoptimised JPEG at full desktop resolution to a phone on 4G. Serve it as WebP or AVIF, size it for the viewport, and mark it high priority so the browser fetches it first rather than after three stylesheets.' },
      { type: 'quote', text: 'If you fix one thing, fix the hero image. It is usually worth more than everything else combined.' },
      { type: 'h', text: '2. Layout shift comes from fonts and unsized media' },
      { type: 'p', text: 'Cumulative Layout Shift on these sites is almost always a web font swapping in, or an image and embedded map with no declared dimensions pushing content down. Self-host the font with a proper fallback metric, and give every image and iframe explicit width and height.' },
      { type: 'h', text: '3. The plugin stack is doing the damage' },
      { type: 'ul', items: [
        'Forty stylesheets is not unusual on a builder-based site. Most are for widgets the page does not use.',
        'Two SEO plugins running at once will emit duplicate meta and Open Graph tags.',
        'Booking or chat plugins load site-wide even on pages where they never appear.',
        'Sliders and animation libraries are frequently loaded for a single element.',
      ]},
      { type: 'p', text: 'Audit what actually loads on your busiest page and remove what is not used there. On the last three sites we did this to, total requests dropped by more than half without a single visual change.' },
    ],
  },
  {
    slug: 'acos-buy-box',
    title: 'Cutting ACoS without losing the Buy Box',
    category: 'E-commerce', date: '16 July 2026', iso: '2026-07-16', read: '5 min',
    author: 'Muhammad Abdullah', image: '/images/dept-ecom.jpg',
    excerpt: 'Bid cuts are the fastest way to reduce ad cost and the fastest way to lose ranking. Sequence matters.',
    body: [
      { type: 'p', text: 'When a seller asks us to bring ACoS down, the instinct is to cut bids across the board. It works for about two weeks, and then organic rank starts sliding and the Buy Box gets contested. The order you do things in matters more than the size of the cut.' },
      { type: 'h', text: 'Do the structural work first' },
      { type: 'ul', items: [
        'Separate match types. Exact, phrase and broad in their own campaigns. You cannot manage what is averaged together.',
        'Harvest search terms weekly. Convert the performers into exact match, and add the rest as negatives.',
        'Negative aggressively. Most wasted spend on a mature account sits in a small number of irrelevant terms nobody has looked at in months.',
      ]},
      { type: 'quote', text: 'Cutting bids on converting keywords to hit an ACoS target is how sellers accidentally buy themselves a ranking problem.' },
      { type: 'h', text: 'Then protect the Buy Box' },
      { type: 'p', text: 'Buy Box share depends on price, stock, fulfilment and seller metrics — not on ad spend. But losing it wrecks your ad performance, because the traffic you are paying for lands on a page where the buy button belongs to somebody else.' },
      { type: 'h', text: 'Only then adjust bids' },
      { type: 'p', text: 'With structure clean and Buy Box stable, bid work becomes precise: reduce where ACoS is above target and conversion is weak, hold where the keyword is defending rank. That is a decision per keyword, not a percentage applied to everything.' },
    ],
  },
  {
    slug: 'broker-credit-habit',
    title: 'Broker credit checks: the five-minute habit that prevents a bad debt',
    category: 'Factoring', date: '2 July 2026', iso: '2026-07-02', read: '4 min',
    author: 'Daud Ather', image: '/images/dept-factoring.jpg',
    excerpt: 'Non-recourse protects you from a broker who cannot pay — but only if you checked before you hauled.',
    body: [
      { type: 'p', text: 'The single most expensive mistake we see with new carriers is accepting a load from a broker nobody checked. It is expensive because it is avoidable in about five minutes, and because a non-recourse agreement does not protect a load the factor never approved.' },
      { type: 'h', text: 'What to check before you accept' },
      { type: 'ul', items: [
        'Credit score with your factor. Most factors will approve or decline a broker in minutes. Ask before you accept, not after you load.',
        'Days-to-pay history. A broker who pays in 62 days is not a bad debt, but they change your cash flow planning considerably.',
        'Recent claim activity. A cluster of recent disputes is worth a second look even on a decent score.',
        'Authority status. Check the MC is active and the name on the rate confirmation matches it exactly.',
      ]},
      { type: 'quote', text: 'Approval before the load is what makes a non-recourse agreement mean anything.' },
      { type: 'h', text: 'Build it into the routine' },
      { type: 'p', text: 'The carriers who never take a bad debt are not lucky. They have simply made it the first thing that happens after a rate confirmation arrives, every single time, including on a Friday afternoon when the load is good and the pickup is in two hours.' },
    ],
  },
  {
    slug: 'dispatch-platform-handover',
    title: 'Cordic, Autocab or Cab9: what actually changes when you outsource the desk',
    category: 'Taxi dispatch', date: '7 August 2026', iso: '2026-08-07', read: '6 min',
    author: 'Abdul Aleem Sajjad', image: '/images/dept-dispatch.jpg',
    excerpt: "Operators expect a migration. There isn't one — but there are four things worth getting right before day one.",
    body: [
      { type: 'p', text: 'The first question every operator asks is whether they will have to change dispatch software. The answer is no: we log into yours. But the platform does change how the first fortnight goes, and it is worth knowing where the friction sits.' },
      { type: 'h', text: 'What stays the same on every platform' },
      { type: 'p', text: 'Booking intake, allocation logic, account rules and escalation are all decided by your runbook, not the software. Whichever system you run, we are following the same document your office would follow.' },
      { type: 'h', text: 'Where the platforms differ in practice' },
      { type: 'ul', items: [
        'Permission granularity. Some systems let you scope a remote user tightly; others are closer to all-or-nothing.',
        'Call integration. Where CLI lookup and screen-pop are configured well, answer times drop noticeably.',
        'Account job handling. Corporate rules are stored differently across platforms, and this is the most common place a runbook needs a second draft.',
        'Reporting exports. Some systems give clean answer-time data out of the box; others need a weekly export we build into the reporting pack.',
      ]},
      { type: 'quote', text: 'The software is rarely the constraint. Undocumented decisions are.' },
      { type: 'h', text: 'The four things to prepare before day one' },
      { type: 'ul', items: [
        'A user account scoped for a remote dispatcher, with permissions you are comfortable with.',
        'A list of your account customers and the rules attached to each one — including the unwritten ones.',
        'Your escalation contacts by hour: who is called at 1am, and who is not.',
        'Sixty days of answer-time and cancellation data, so the parallel run has a baseline.',
      ]},
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

/* ---------------- Testimonials ---------------- */
/* PLACEHOLDER TESTIMONIALS — these are illustrative, not real customer quotes.
   Replace each entry with a quote you have written permission to publish, and
   swap the stock avatar for the person's own photo (or remove `avatar`).
   Publishing invented reviews as if they were genuine is misleading to
   prospects and is a real legal exposure in the UK, US and EU. */
export const testimonials = [
  {
    quote: 'We handed over the eleven-to-six window as a one-month trial and never took it back. Overnight answer times are now better than our own day shift, and the handover note every morning means nothing gets lost between the two teams.',
    name: 'Operations Director', meta: 'Private hire operator · Manchester, UK', avatar: '/images/portrait-c.jpg',
  },
  {
    quote: 'I did not really understand how factoring worked and I did not want a sales pitch. They walked me through it, told me straight where it would help and where it would not, then put me in touch with RTS directly.',
    name: 'Owner-operator', meta: 'Freight carrier · Texas, USA', avatar: '/images/portrait-a.jpg',
  },
  {
    quote: 'They rebuilt our site and took over Google Ads. What changed was the reporting — we finally see which keyword produced a booked job rather than a click. Spend is down and the phone rings more.',
    name: 'Managing Director', meta: 'Roofing company · Ontario, Canada', avatar: '/images/portrait-b.jpg',
  },
];

/* ---------------- Case studies ---------------- */
export const cases = [
  {
    kpi: '12s', kpiLabel: 'Average overnight answer time',
    title: 'Overnight desk for a Greater Manchester private-hire operator',
    body: "Took the 21:00–07:00 window on the operator's own Cordic system, with a written runbook covering every account customer.",
    tag: 'Taxi dispatch · United Kingdom', image: '/images/taxi-city.jpg',
  },
  {
    kpi: 'RTS', kpiLabel: 'Introduced and set up',
    title: 'Cash-flow review for a forty-truck carrier in Texas',
    body: 'We walked the owner through how RTS factoring would work against his broker payment terms, answered the questions he had been putting off, then introduced him directly to the RTS team.',
    tag: 'Factoring · United States', image: '/images/truck-road.jpg',
  },
  {
    kpi: '45%', kpiLabel: 'More booked jobs in six months',
    title: 'Local search and paid media for an Ontario roofing company',
    body: 'Site rebuilt for Core Web Vitals, service-area pages added, and Google Ads restructured around call-tracked booked work.',
    tag: 'Web & SEO · Canada', image: '/images/whiteboard.jpg',
  },
];

/* ---------------- Industries ---------------- */
export const industries = [
  { name: 'Software & digital products', body: 'Web applications, mobile apps, APIs and internal business tools, built and maintained end to end.' },
  { name: 'Private hire & taxi', body: 'Account bookings, airport transfers, driver coordination and licensing-aware handling for UK operators.' },
  { name: 'Freight & logistics', body: 'Cash-flow conversations with US trucking carriers, and introductions to RTS Financial for invoice factoring.' },
  { name: 'Retail & e-commerce', body: 'Marketplace operations, catalogue integrity, paid media and storefront builds.' },
  { name: 'Construction & trades', body: 'Local search, service-area pages and lead handling for roofing, plumbing and building firms.' },
  { name: 'Professional services', body: 'Websites, reporting and enquiry handling for accountancy, legal and consultancy practices.' },
  { name: 'Healthcare', body: 'Appointment handling and compliant, accessible websites for clinics and practices.' },
];

/* ---------------- Careers ---------------- */
export const jobs = [
  {
    title: 'Dispatch Executive — UK Night Shift', department: 'Taxi Dispatch', location: 'Lahore · On-site',
    shift: '21:00–07:00 PKT', type: 'Full time', openings: '3 openings',
    body: "Take live bookings and allocate jobs for UK private-hire operators on Cordic and Autocab. You will own the overnight window for two or three accounts, follow their runbooks precisely, and write the handover note the client's day team reads each morning. Night differential, transport home after shift, fixed rota published a month ahead.",
    tags: ['Clear spoken English', 'Calm under pressure', 'Comfortable on the phone', 'UK geography a plus'],
  },
  {
    title: 'Customer Support Executive — US Shift', department: 'Client Desk', location: 'Lahore · On-site',
    shift: '18:00–03:00 PKT', type: 'Full time', openings: '2 openings',
    body: 'Speak with US trucking carriers about their cash-flow position, explain how factoring with RTS Financial works, and introduce the ones it suits to the RTS team. You will handle inbound enquiries, follow up on introductions and keep the client record accurate. Training on freight and factoring provided — we hire for temperament and teach the rest.',
    tags: ['Excellent written English', 'Detail-oriented', 'Comfortable with US callers', 'Shift differential'],
  },
  {
    title: 'Front-End Developer (Next.js)', department: 'Development', location: 'Lahore · Hybrid',
    shift: '11:00–20:00 PKT', type: 'Full time', openings: '1 opening',
    body: 'Build client websites and storefronts in Next.js and WordPress, and maintain the internal tools our operations desks run on. We hold a real performance budget: nothing ships without passing Core Web Vitals and a keyboard-navigation check.',
    tags: ['Next.js & React', 'TypeScript', 'Core Web Vitals', 'Accessibility (WCAG AA)'],
  },
  {
    title: 'Amazon PPC Specialist', department: 'E-Commerce', location: 'Lahore · On-site',
    shift: '12:00–21:00 PKT', type: 'Full time', openings: '1 opening',
    body: 'Own campaign structure, weekly search-term harvesting and bid management across a portfolio of Seller Central accounts, managed to agreed ACoS targets. You will also cover daily Buy Box and suppression monitoring, and write the monthly client report.',
    tags: ['Sponsored Products & Brands', 'Search-term harvesting', 'Seller Central', 'Reporting'],
  },
  {
    title: 'SEO Executive', department: 'Web & SEO', location: 'Lahore · Hybrid',
    shift: '11:00–20:00 PKT', type: 'Full time', openings: '1 opening',
    body: 'Technical and local SEO for service businesses in the UK, US and Canada — site structure, schema, Google Business Profile, service-area pages and citation work. You will report on rankings and enquiries monthly and work alongside the ads team.',
    tags: ['Technical SEO', 'Local SEO & GBP', 'Search Console', 'Clear written English'],
  },
  {
    title: 'Team Lead — Call Handling (Days)', department: 'Taxi Dispatch', location: 'Lahore · On-site',
    shift: '12:00–22:00 PKT', type: 'Full time', openings: '1 opening',
    body: 'Lead a daytime dispatch pod covering UK accounts: rota, call quality reviews, coaching and first-line escalation. You will own two to three client relationships directly and attend their monthly account review. We promote leads from the desk.',
    tags: ['Dispatch experience essential', 'Coaching & QA', 'Client-facing', 'Rota ownership'],
  },
];

/* ---------------- Why us ---------------- */
export const differentiators = [
  { title: 'A named lead, not a queue', body: 'Every account gets a team lead who knows your drivers, your brokers or your catalogue. You have their direct line, not a ticket form.' },
  { title: 'Weekly reporting you can act on', body: 'Booking volume, answer times, ad spend against booked work — sent every Monday in the same format, so trends are obvious.' },
  { title: 'Your timezone, not ours', body: 'Desks are staffed to UK and US clocks. The night shift is a permanent team on a permanent rota, not whoever is left online.' },
  { title: 'We work inside your systems', body: 'Your dispatch software, your Seller Central, your ad accounts, your CRM, your repository. Nothing is locked behind a tool only we can log into.' },
  { title: 'Priced per seat or per desk', body: 'Flat monthly rates by shift coverage or headcount. No per-booking surprises and no minimum contract beyond the first month.' },
  { title: 'Documented, so cover is real', body: 'Every account has a written runbook. When someone is off, the person covering follows the same steps — your callers never notice.' },
];

export const onboarding = [
  { title: 'Discovery call', body: 'Thirty minutes on your current volumes, systems and the specific hours that hurt. We tell you honestly if a desk is the wrong answer.' },
  { title: 'Scope & runbook', body: 'We write the account runbook: greeting scripts, escalation rules, pricing logic, who to call at 2am. You edit it until it reads like your own team wrote it.' },
  { title: 'Access & training', body: 'Read-only first, then full access to your dispatch system, Seller Central or ad accounts. The assigned team shadows your staff for three to five days.' },
  { title: 'Parallel run', body: 'We take a slice of live volume — usually the overnight window — while your team keeps the rest. Both sides watch the same numbers.' },
  { title: 'Full handover', body: 'The desk takes its agreed hours. Weekly reporting starts, and your team lead reviews the runbook with you monthly.' },
];
