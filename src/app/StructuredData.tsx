const StructuredData = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Roop & Roots By Renu",
    url: "https://www.roopandroots.com",
    logo: "https://www.roopandroots.com/images/brand-logo-dark.png",
    sameAs: [
      "https://instagram.com/roopnroots",
      "https://www.pinterest.com/roopandrootsbyrenu/",
    ],
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Roop & Roots Herbal Face Pack",
    image: [
      "https://www.roopandroots.com/images/product/transparent%20product%20image.png",
    ],
    description:
      "Herbal face pack made with traditional ingredients including almond, chandan, and turmeric.",
    brand: {
      "@type": "Brand",
      name: "Roop & Roots By Renu",
    },
    offers: [
      {
        "@type": "Offer",
        url: "https://www.roopandroots.com/#shop",
        priceCurrency: "INR",
        price: "549",
        availability: "https://schema.org/InStock",
        itemCondition: "https://schema.org/NewCondition",
      },
      {
        "@type": "Offer",
        url: "https://www.roopandroots.com/#shop",
        priceCurrency: "INR",
        price: "349",
        availability: "https://schema.org/InStock",
        itemCondition: "https://schema.org/NewCondition",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
      />
    </>
  );
};

export default StructuredData;