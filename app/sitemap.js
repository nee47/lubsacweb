import getData from './lib/getData';

export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://lubsacweb.com';
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/productos`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/productos/marcas`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/servicios`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/acerca`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/bases`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  // Brand pages
  const brandPages = [
    {
      url: `${baseUrl}/productos/marcas/nrg`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/productos/marcas/petrocanada`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/productos/marcas/q7`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/productos/marcas/antiseize`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  // Product category pages
  let categoryPages = [];
  try {
    const categories = await getData('categorias.json');
    categoryPages = categories.map((category) => ({
      url: `${baseUrl}/productos/${category.alias}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    }));
  } catch (error) {
    console.error('Error loading categories for sitemap:', error);
  }

  // Brand-category combination pages (only valid combinations)
  let brandCategoryPages = [];
  try {
    const products = await getData('data.json');
    const validCombinations = new Set();
    
    // Extract valid brand-category combinations from actual product data
    products.forEach(product => {
      if (product.brand && product.alias) {
        validCombinations.add(`${product.brand}-${product.alias}`);
      }
    });
    
    // Convert to URLs
    brandCategoryPages = Array.from(validCombinations).map(combination => {
      const [brand, category] = combination.split('-');
      return {
        url: `${baseUrl}/productos/marcas/${brand}/${category}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.6,
      };
    });
  } catch (error) {
    console.error('Error loading brand-category combinations for sitemap:', error);
  }

  return [
    ...staticPages,
    ...brandPages,
    ...categoryPages,
    ...brandCategoryPages,
  ];
} 