interface SectionHeaderProps {
  label: string;
}

// Was copy-pasted (divider + eyebrow label + divider) into Shift, Projects, Process,
// AfterSale, Addons, FAQ and About. One change here now updates all seven.
export default function SectionHeader({ label }: SectionHeaderProps) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px' }}>
      <div style={{ flex: 1, height: '1.5px', background: '#c8d3e0' }} />
      <span
        style={{
          fontSize: '12px',
          fontWeight: 700,
          textTransform: 'uppercase' as const,
          letterSpacing: '0.14em',
          color: '#3b82c4',
          whiteSpace: 'nowrap' as const,
        }}
      >
        {label}
      </span>
      <div style={{ flex: 1, height: '1.5px', background: '#c8d3e0' }} />
    </div>
  );
}
