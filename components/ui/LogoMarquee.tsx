import { colors } from '@/lib/theme';

const ENGINES = ['openai', 'claude', 'perplexity', 'gemini', 'copilot', 'deepseek', 'metaai'];

// Continuous scroll, not a crossfade: cheaper (pure CSS, no JS timers/state),
// and every logo is visible at some point without waiting for a cycle.
// prefers-reduced-motion is respected, same standard used in the outreach
// mockups.
export default function LogoMarquee() {
  const track = (
    <>
      {ENGINES.map((name) => (
        <div key={name} style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
          <img src={`/logos/${name}.svg`} alt="" aria-hidden="true" style={{ height: '18px', width: '18px' }} />
          <img src={`/logos/${name}-text.svg`} alt={name} style={{ height: '15px' }} />
        </div>
      ))}
    </>
  );

  return (
    <div
      style={{
        overflow: 'hidden',
        maskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)',
        WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)',
      }}
    >
      <style>{`
        @keyframes logo-marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .logo-marquee-track {
          animation: logo-marquee-scroll 22s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .logo-marquee-track { animation: none; }
        }
      `}</style>
      <div className="logo-marquee-track" style={{ display: 'flex', gap: '36px', width: 'max-content' }}>
        {track}
        {track /* duplicated for a seamless loop */}
      </div>
    </div>
  );
}
