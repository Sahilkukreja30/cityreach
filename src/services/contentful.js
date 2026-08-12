import { createClient } from 'contentful';

const spaceId = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;
const environment = import.meta.env.VITE_CONTENTFUL_ENVIRONMENT || 'master';

let client = null;

if (spaceId && accessToken) {
  try {
    client = createClient({
      space: spaceId,
      accessToken: accessToken,
      environment: environment,
    });
  } catch (error) {
    console.error('Failed to initialize Contentful client:', error);
  }
}

// Normalise country string to match routing prefixes 'in' and 'ae'
const normalizeCountry = (country) => {
  if (!country) return 'all';
  const c = country.toString().trim().toLowerCase();
  if (c === 'india' || c === 'in') return 'in';
  if (c === 'uae' || c === 'ae') return 'ae';
  return 'all';
};

export async function fetchBlogs() {
  if (!client) {
    console.warn('Contentful credentials are not set. Using local fallback data.');
    return null;
  }

  try {
    const response = await client.getEntries({
      content_type: 'pageBlogPost', // Exact content type ID from your Contentful schema
      order: '-fields.publishedDate', // Order by published date (newest first)
    });

    return response.items.map((item) => {
      const { title, slug, publishedDate, country, shortDescription, content } = item.fields;
      
      const formattedDate = publishedDate
        ? new Date(publishedDate).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })
        : new Date(item.sys.createdAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          });

      return {
        id: item.sys.id,
        title,
        slug,
        date: formattedDate,
        tag: 'Insights', // Default tag as it is not explicitly in the schema
        desc: shortDescription || '',
        content, // Rich Text document structure
        country: normalizeCountry(country),
      };
    });
  } catch (error) {
    console.error('Error fetching blogs from Contentful:', error);
    return null;
  }
}
