export type ReviewType = {
  id: number;
  author_name: string;
  description: string;
  rating: number;
  avatar_url: string;
};

export type ProductType = {
  id: number;
  title: string;
  description: string;
  max_quantity: number;
  price_in_cents: number;
  image_urls: string[] | null;
};
