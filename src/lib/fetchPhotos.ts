
const photoCache = new Map();

export const getUnsplashRandomPhotos = async (count = 1) => {
  try {
    const cacheKey = `count=${count}`;
    if (photoCache.has(cacheKey)) {
      return photoCache.get(cacheKey);
    }

    const accessKey = process.env.UNSPLASH_ACCESS_KEY;
    const apiUrl = `https://api.unsplash.com/photos/random?count=${count}&client_id=${accessKey}`;

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error('Unable to fetch random photos from Unsplash');
    }

    const data = await response.json();

    photoCache.set(cacheKey, data);

    return data;
  } catch (error) {
    console.error('Error fetching random photos from Unsplash:', error);
    return null;
  }
};
  