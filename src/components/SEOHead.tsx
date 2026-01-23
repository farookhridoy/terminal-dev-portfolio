import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterHandle?: string;
  author?: string;
}

const SEOHead = ({
  title = "Senior Full-Stack Developer | 8+ Years Experience | PHP, Laravel, React, Vue.js Portfolio",
  description = "Senior Full-Stack Developer with 8+ years of experience specializing in PHP, Laravel, Node.js, React, Vue.js, Next.js, and enterprise ERP development. Over 100+ successful projects delivered worldwide.",
  keywords = "Full-Stack Developer, PHP Developer, Laravel Expert, React Developer, Vue.js Developer, Node.js, Next.js, Nuxt.js, ERP Development, Web Development, MySQL, Team Lead, Enterprise Software, Portfolio",
  canonicalUrl = "https://yourportfolio.com",
  ogImage = "/og-image.png",
  ogType = "website",
  twitterHandle = "@yourtwitterhandle",
  author = "Senior Full-Stack Developer",
}: SEOHeadProps) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: author,
    jobTitle: "Senior Full-Stack Developer",
    description: description,
    url: canonicalUrl,
    sameAs: [
      "https://github.com/yourusername",
      "https://linkedin.com/in/yourusername",
      "https://twitter.com/yourusername",
    ],
    knowsAbout: [
      "PHP",
      "Laravel",
      "Node.js",
      "React",
      "Vue.js",
      "Next.js",
      "Nuxt.js",
      "MySQL",
      "ERP Development",
      "Web Development",
      "Team Leadership",
      "System Architecture",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Full-Stack Developer",
      occupationalCategory: "15-1252.00",
      estimatedSalary: {
        "@type": "MonetaryAmountDistribution",
        name: "base",
        currency: "USD",
        duration: "P1Y",
      },
      skills: "PHP, Laravel, Node.js, React, Vue.js, MySQL, ERP Development",
    },
  };

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Senior Full-Stack Developer Portfolio",
    url: canonicalUrl,
    description: description,
    author: {
      "@type": "Person",
      name: author,
    },
  };

  const professionalServiceData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Full-Stack Web Development Services",
    description: "Professional web development services including ERP systems, web applications, and enterprise solutions.",
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Web Development Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "ERP Development",
            description: "Custom Enterprise Resource Planning solutions",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Web Application Development",
            description: "Full-stack web applications using modern technologies",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "API Development",
            description: "RESTful API design and development",
          },
        },
      ],
    },
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Developer Portfolio" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:site" content={twitterHandle} />

      {/* Additional SEO Meta Tags */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="theme-color" content="#00ff88" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

      {/* Structured Data / JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteStructuredData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(professionalServiceData)}
      </script>
    </Helmet>
  );
};

export default SEOHead;
