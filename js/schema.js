const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Invictus Technology TIC",
    "url": "https://www.invictustechnologytic.com",
    "logo": "https://www.invictustechnolgytic.com/images/logov.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+57-320-451-8979",
      "contactType": "Customer Service"
    }
  };
  
  const scriptTag = document.createElement('script');
  scriptTag.type = 'application/ld+json';
  scriptTag.text = JSON.stringify(schemaData);
  document.head.appendChild(scriptTag);
  