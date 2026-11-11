/* Central alt-text map, keyed by the path in /public.
   Every <Image> that renders a photo should pull from here rather than
   shipping alt="" — the SEO audit on 11 Nov 2026 flagged 24 of 27 images
   on the homepage as missing alt text. Add an entry whenever you add a photo. */
export const imageAlt: Record<string, string> = {
  '/images/hero-team.jpg': 'The East Tech Hub operations floor in Lahore, with staff working at desks',
  '/images/hero-floor.jpg': 'Staff at work on the East Tech Hub operations floor',
  '/images/dept-web.jpg': 'A developer sketching interface wireframes on a tablet beside a desktop monitor',
  '/images/whiteboard.jpg': 'Two team members planning a campaign on a whiteboard covered in notes and sketches',
  '/images/truck-road.jpg': 'A semi-truck pulling a dry van trailer along an open highway at dusk',
  '/images/dept-factoring.jpg': 'Aerial view of articulated lorries parked in rows at a distribution yard',
  '/images/dept-dispatch.jpg': 'A line of London black cabs waiting at a covered taxi rank',
  '/images/dept-ecom.jpg': 'A long warehouse aisle lined with racked stock ready for fulfilment',
  '/images/taxi-city.jpg': 'A London black cab on a city street beside red telephone boxes',
  '/images/support.jpg': 'A support agent wearing a headset at a customer service desk',
  '/images/boardroom.jpg': 'An account review meeting around a long table in a glass-walled boardroom',
  '/images/culture.jpg': 'A team member presenting at a whiteboard to colleagues seated nearby',
  '/images/handshake.jpg': 'Two people shaking hands across a desk after signing an agreement',
  '/images/building.jpg': 'The modern office building that houses the East Tech Hub floor',
  '/images/portrait-a.jpg': 'Portrait of a client quoted in the testimonials',
  '/images/portrait-b.jpg': 'Portrait of a client quoted in the testimonials',
  '/images/portrait-c.jpg': 'Portrait of a client quoted in the testimonials',
  '/images/portrait-d.jpg': 'Portrait of a client quoted in the testimonials',
};

/** Alt text for an image path. Falls back to the caller's own description. */
export function altFor(src: string, fallback = ''): string {
  return imageAlt[src] ?? fallback;
}
