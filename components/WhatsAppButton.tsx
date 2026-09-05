import { site } from '@/lib/site';
import { WhatsApp } from './Icons';

export default function WhatsAppButton() {
  return (
    <a className="wa" href={site.whatsapp} target="_blank" rel="noopener noreferrer"
       aria-label={`Message ${site.name} on WhatsApp`}>
      <WhatsApp />
      <span className="wt">WhatsApp us<em>{site.whatsappDisplay}</em></span>
    </a>
  );
}
