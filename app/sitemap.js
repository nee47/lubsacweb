import getData from './lib/getData';
import { BRAND_CONFIG } from './marcas/brandConfig';

export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://lubricantesespecialesdelperu.com';

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
      url: `${baseUrl}/marcas`,
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
  const brandPages = BRAND_CONFIG.map((brand) => ({
    url: `${baseUrl}/marcas/${brand.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

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

  return [
    ...staticPages,
    ...brandPages,
    ...categoryPages,
  ];
}
