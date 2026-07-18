import { Helmet } from 'react-helmet-async';
import { schoolSchema, websiteSchema } from '../lib/structuredData';

// Injects site-wide JSON-LD into <head> once at root level.
export default function StructuredData() {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schoolSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
    </Helmet>
  );
}
