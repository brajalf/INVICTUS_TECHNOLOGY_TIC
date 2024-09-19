const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Invictus Technology TIC",
    "url": "https://www.tusitio.com",
    "logo": "https://www.tusitio.com/images/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+57-123-4567",
      "contactType": "Customer Service"
    }
  };
  
  const scriptTag = document.createElement('script');
  scriptTag.type = 'application/ld+json';
  scriptTag.text = JSON.stringify(schemaData);
  document.head.appendChild(scriptTag);
  