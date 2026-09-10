import { colors, shadows } from '@/lib/theme';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: string;
}

// Was copy-pasted (white bg, 1px border, 20px radius, same shadow) into every
// section. FAQ needs tighter padding, so it's the one override via the prop.
export default function Card({ children, className = 'card-pad', padding = '28px 32px' }: CardProps) {
  return (
    <div
      className={className}
      style={{
        background: colors.surface,
        border: `1px solid ${colors.border}`,
        borderRadius: '20px',
        padding,
        boxShadow: shadows.card,
      }}
    >
      {children}
    </div>
  );
}
