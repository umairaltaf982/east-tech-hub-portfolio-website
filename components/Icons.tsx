import type { ComponentType, SVGProps } from 'react';

type P = SVGProps<SVGSVGElement>;
const S = {
  fill: 'none' as const,
  stroke: 'currentColor',
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

export function ArrowRight(p: P) {
  return <svg viewBox="0 0 24 24" {...S} strokeWidth={2.2} aria-hidden="true" {...p}><path d="M4 12h15M13 6l6 6-6 6" /></svg>;
}
export function ArrowLeft(p: P) {
  return <svg viewBox="0 0 24 24" {...S} strokeWidth={2.2} aria-hidden="true" {...p}><path d="M20 12H5M11 6l-6 6 6 6" /></svg>;
}
export function ChevronRight(p: P) {
  return <svg viewBox="0 0 24 24" {...S} strokeWidth={2.2} aria-hidden="true" {...p}><path d="m9 5 7 7-7 7" /></svg>;
}
export function ChevronDown(p: P) {
  return <svg viewBox="0 0 12 8" {...S} strokeWidth={1.9} aria-hidden="true" {...p}><path d="M1 1.5 6 6.5 11 1.5" /></svg>;
}
export function Check(p: P) {
  return <svg viewBox="0 0 24 24" {...S} strokeWidth={2.4} aria-hidden="true" {...p}><path d="m4 12.5 5 5 11-11" /></svg>;
}
export function Phone(p: P) {
  return <svg viewBox="0 0 24 24" {...S} strokeWidth={1.7} aria-hidden="true" {...p}><path d="M6.2 3.5h3l1.5 3.8-2 1.4a12 12 0 0 0 5.6 5.6l1.4-2 3.8 1.5v3a1.7 1.7 0 0 1-1.85 1.7A16.6 16.6 0 0 1 4.5 5.35 1.7 1.7 0 0 1 6.2 3.5z" /></svg>;
}
export function Mail(p: P) {
  return <svg viewBox="0 0 24 24" {...S} strokeWidth={1.7} aria-hidden="true" {...p}><rect x="2.8" y="5" width="18.4" height="14" rx="2" /><path d="m3.4 6.5 8.6 6.2 8.6-6.2" /></svg>;
}
export function Pin(p: P) {
  return <svg viewBox="0 0 24 24" {...S} strokeWidth={1.7} aria-hidden="true" {...p}><path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11z" /><circle cx="12" cy="10" r="2.6" /></svg>;
}
export function Clock(p: P) {
  return <svg viewBox="0 0 24 24" {...S} strokeWidth={1.7} aria-hidden="true" {...p}><circle cx="12" cy="12" r="8.6" /><path d="M12 7.4V12l3.1 1.9" /></svg>;
}
export function Shield(p: P) {
  return <svg viewBox="0 0 24 24" {...S} strokeWidth={1.7} aria-hidden="true" {...p}><path d="M12 3.2 5 6v5.5c0 4.3 3 7.6 7 9.3 4-1.7 7-5 7-9.3V6z" /><path d="m9.2 12 2 2 3.6-3.8" /></svg>;
}
export function Users(p: P) {
  return <svg viewBox="0 0 24 24" {...S} strokeWidth={1.7} aria-hidden="true" {...p}><circle cx="9" cy="8" r="3.2" /><path d="M2.8 19.5a6.4 6.4 0 0 1 12.4 0" /><path d="M16.2 5.2a3.2 3.2 0 0 1 0 5.6M17.6 14.4a6.4 6.4 0 0 1 3.6 5.1" /></svg>;
}
export function Bolt(p: P) {
  return <svg viewBox="0 0 24 24" {...S} strokeWidth={1.7} aria-hidden="true" {...p}><path d="M13.4 2.6 4.8 13.4h5.6L10.6 21.4l8.6-10.8h-5.6z" /></svg>;
}
export function Truck(p: P) {
  return <svg viewBox="0 0 24 24" {...S} strokeWidth={1.7} aria-hidden="true" {...p}><path d="M3 6.5A1.5 1.5 0 0 1 4.5 5h9A1.5 1.5 0 0 1 15 6.5V16H3z" /><path d="M15 9h3.2a2 2 0 0 1 1.7.95L21.5 12.5V16H15z" /><circle cx="6.5" cy="18.5" r="2" /><circle cx="17.5" cy="18.5" r="2" /></svg>;
}
export function Taxi(p: P) {
  return <svg viewBox="0 0 24 24" {...S} strokeWidth={1.7} aria-hidden="true" {...p}><path d="M9 3h6v2H9z" /><path d="M4.5 11 6.2 6.6A2 2 0 0 1 8.1 5.3h7.8a2 2 0 0 1 1.9 1.3L19.5 11" /><path d="M3.5 11h17v6h-17z" /><circle cx="7.5" cy="17.8" r="1.6" /><circle cx="16.5" cy="17.8" r="1.6" /></svg>;
}
export function Code(p: P) {
  return <svg viewBox="0 0 24 24" {...S} strokeWidth={1.7} aria-hidden="true" {...p}><path d="m8 8-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14" /></svg>;
}
export function Cart(p: P) {
  return <svg viewBox="0 0 24 24" {...S} strokeWidth={1.7} aria-hidden="true" {...p}><path d="M2.5 3.5h2.2l2.3 11.2a1.6 1.6 0 0 0 1.6 1.3h8.6a1.6 1.6 0 0 0 1.6-1.25L20.5 7H6" /><circle cx="9.5" cy="20" r="1.4" /><circle cx="17" cy="20" r="1.4" /></svg>;
}
export function Star(p: P) {
  return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}><path d="m12 2.6 2.9 5.88 6.5.95-4.7 4.58 1.11 6.47L12 17.43l-5.81 3.05 1.11-6.47-4.7-4.58 6.5-.95z" /></svg>;
}
export function WhatsApp(p: P) {
  return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 1.67c2.2 0 4.27.86 5.83 2.42a8.2 8.2 0 0 1 2.42 5.83c0 4.54-3.7 8.24-8.25 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.39c0-4.54 3.7-8.24 8.25-8.24zm-3.1 4.2c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.19 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28s-1.44-.71-1.66-.79c-.22-.08-.38-.12-.54.12s-.62.79-.76.95c-.14.16-.28.18-.52.06s-1.03-.38-1.96-1.21c-.72-.65-1.21-1.45-1.35-1.69s-.02-.37.1-.49c.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42s-.54-1.3-.74-1.78c-.19-.46-.39-.4-.54-.41h-.46z" /></svg>;
}
export function Facebook(p: P) {
  return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}><path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.45 2.91h-2.33V22c4.78-.76 8.44-4.92 8.44-9.94z" /></svg>;
}
export function Instagram(p: P) {
  return <svg viewBox="0 0 24 24" {...S} strokeWidth={1.8} aria-hidden="true" {...p}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" /></svg>;
}
export function LinkedIn(p: P) {
  return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z" /></svg>;
}

export function Banknote(p: P) {
  return <svg viewBox="0 0 24 24" {...S} strokeWidth={1.7} aria-hidden="true" {...p}><rect x="2.5" y="6" width="19" height="12" rx="2" /><circle cx="12" cy="12" r="2.6" /><path d="M6 9.5v5M18 9.5v5" /></svg>;
}
export function TrendUp(p: P) {
  return <svg viewBox="0 0 24 24" {...S} strokeWidth={1.7} aria-hidden="true" {...p}><path d="M3 20V4" /><path d="M3 20h18" /><path d="m6.5 15.5 4-4.5 3.2 3 5.3-6.2" /><path d="M14.8 7.8h4.2V12" /></svg>;
}

export const serviceIcon: Record<string, ComponentType<P>> = {
  factoring: Banknote,
  truck: Truck,
  dispatch: Taxi,
  web: Code,
  growth: TrendUp,
  ecommerce: Cart,
};
