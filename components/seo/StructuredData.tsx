"use client";

export default function StructuredData() {
    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "MD. Omar Farook Hridoy",
        jobTitle: "Technical Lead | ERP Consultant & Fintech Software Engineer",
        url: "https://farookhridoy.com",
        address: {
            "@type": "PostalAddress",
            addressLocality: "Dhaka",
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
            "ERP Consulting",
            "Technical Leadership",
            "DevOps",
            "AWS",
            "Full Stack Development",
        ],
    };

    const professionalServiceSchema = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "MD. Omar Farook Hridoy - ERP Consulting & Fintech Software Engineering Services",
        description: "ERP Technical Lead & Fintech Software Engineer with 8+ years delivering multi-module ERP systems (SCM, Import/Export, Inventory, Production, HR & Payroll, Document Management, Finance/Fintech) for enterprise groups",
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
