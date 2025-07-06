# Sitemap Implementation

This Next.js project includes a comprehensive sitemap implementation that automatically generates XML sitemaps for search engines.

## Files Created

### 1. `app/sitemap.js`
This is the main sitemap generator that Next.js will automatically use to create `/sitemap.xml`.

**Features:**
- **Static Pages**: Home, products, services, about, contact, etc.
- **Dynamic Category Pages**: All product categories from `categorias.json`
- **Brand Pages**: Individual brand pages (NRG, PetroCanada, Q7, Antiseize)
- **Brand-Category Combinations**: Only valid combinations that exist in the product data

**Priority Structure:**
- Home page: 1.0 (highest)
- Main product pages: 0.9
- Services/Contact: 0.8
- Brand pages: 0.8
- Category pages: 0.7
- Brand-category pages: 0.6

### 2. `public/robots.txt`
Helps search engines understand the site structure and locate the sitemap.

**Features:**
- Allows crawling of all public pages
- Blocks sensitive routes (`/api/`, `/login`, `/auth`)
- Points to the sitemap location

## How It Works

1. **Automatic Generation**: Next.js automatically calls `app/sitemap.js` when someone visits `/sitemap.xml`
2. **Dynamic Data**: The sitemap reads from your JSON data files to generate URLs
3. **Valid Combinations**: Only creates brand-category URLs that actually exist in your product data
4. **SEO Optimized**: Includes proper priorities and change frequencies

## Configuration

### Base URL
Set your domain in the environment variable:
```bash
NEXT_PUBLIC_BASE_URL=https://yourdomain.com
```

Or it will default to `https://lubsacweb.com`

### Adding New Routes
To add new static pages, simply add them to the `staticPages` array in `app/sitemap.js`.

### Updating Frequencies
You can adjust the `changeFrequency` and `priority` values for different types of pages based on your content update schedule.

## Testing

1. **Development**: Visit `http://localhost:3000/sitemap.xml` to see the generated sitemap
2. **Production**: Visit `https://yourdomain.com/sitemap.xml`

## Search Engine Submission

After deployment, submit your sitemap to search engines:
- **Google**: Google Search Console
- **Bing**: Bing Webmaster Tools
- **Other**: Various SEO tools

## Benefits

- **SEO Improvement**: Helps search engines discover and index all your pages
- **Automatic Updates**: Sitemap updates automatically when you add new products/categories
- **Performance**: Only generates valid URLs, reducing sitemap size
- **Standards Compliant**: Follows XML sitemap protocol standards 