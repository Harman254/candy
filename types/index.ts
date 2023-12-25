export type UnsplashPhoto = {
    id: string;
    created_at: string;
    updated_at: string;
    width: number;
    height: number;
    color: string;
    description: string;
    alt_description: string;
    urls: {
      raw: string;
      full: string;
      regular: string;
      small: string;
      thumb: string;
      small_s3: string;
    };
    links: {
      html: string;
      download: string;
      download_location: string;
    };
    likes: number;
    user: {
      id: string;
      username: string;
      name: string;
      bio: null | string;
      total_collections: number;
      total_likes: number;
      total_photos: number;
      total_promoted_photos: number;
      social: {
        twitter: null | string;
        instagram: null | string;
      };
    };
    views: number;
    downloads: number;
  }
  