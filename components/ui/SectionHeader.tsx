import { colors } from '@/lib/theme';

interface SectionHeaderProps {
  label: string;
}

// Was copy-pasted (divider + eyebrow label + divider) into Shift, Projects,
// Process, AfterSale, Addons, FAQ and About. One change here now updates all seven.
export default function SectionHeader({ label }: SectionHeaderProps) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px' }}>
      <div style={{ flex: 1, height: '1.5px', background: colors.border }} />
      <span
        style={{
          fontSize: '12px',
          fontWeight: 700,
          textTransform: 'uppercase' as const,
          letterSpacing: '0.14em',
          color: colors.sky,
          whiteSpace: 'nowrap' as const,
        }}
      >
        {label}
      </span>
      <div style={{ flex: 1, height: '1.5px', background: colors.border }} />
    </div>
  );
}
