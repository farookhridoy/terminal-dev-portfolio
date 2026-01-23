"use client";

export default function StructuredData() {
    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "MD. Omar Farook Hridoy",
        jobTitle: "Software Engineer",
        url: "https://farookhridoy.com",
        email: "me@farookhridoy.com",
        telephone: "+880182252198",
        address: {
            "@type": "PostalAddress",
            streetAddress: "H#91 R#9/1 South Bansree B #E Dhaka, Bangladesh",
            addressLocality: "Dhaka",
            postalCode: "1217",
            addressCountry: "BD",
        },
        sameAs: [
            "https://github.com/farookhridoy",
            "https://linkedin.com/in/farookhridoy",
        ],
        alumniOf: [
            {
                "@type": "EducationalOrganization",
                name: "Eastern University Bangladesh",
            },
            {
                "@type": "EducationalOrganization",
                name: "Feni Polytechnic Institute",
            },
        ],
        knowsAbout: [
            "PHP",
            "Laravel",
            "React",
            "JavaScript",
            "Web Development",
            "ERP Development",
            "Full Stack Development",
        ],
    };

    const professionalServiceSchema = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "MD. Omar Farook Hridoy - Software Engineering Services",
        description: "Software Engineer with 6+ years of experience in PHP, Laravel, React, and enterprise ERP development",
        url: "https://farookhridoy.com",
        priceRange: "$$",
        areaServed: {
            "@type": "Country",
            name: "Bangladesh",
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
            />
        </>
    );
}
