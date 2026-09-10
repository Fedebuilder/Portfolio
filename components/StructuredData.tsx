// If you're selling "structured data so AI engines know who you are", your own
// homepage should have some. This renders a JSON-LD block describing Federico
// as a professional service, linked to the two live proof projects.
export default function StructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Federico De Micco',
    url: 'https://www.federicodemicco.dev',
    description:
      'Web developer and AI search visibility (AEO) specialist, based in Sydney. Builds sites and AI-findability foundations for health & wellness practitioners.',
    areaServed: ['AU', 'IT', 'NZ'],
    knowsAbout: ['AI search visibility', 'AEO', 'Web development', 'Digital marketing'],
    sameAs: ['https://www.camillagalli.com', 'https://betterpdp.com'],
    founder: {
      '@type': 'Person',
      name: 'Federico De Micco',
      jobTitle: 'Web Developer & Marketing Strategist',
    },
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
