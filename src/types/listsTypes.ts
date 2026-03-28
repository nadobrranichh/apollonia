export type HeaderListItem = {
  titleKey: string;
  url: string;
};

export type SocialMediaListItem = {
  platform: string;
  icon: string;
  url: string;
};

export type ServiceItem = {
  id: number;
  title: string;
  description: string;
  price: number;
  priceComment?: string[];
  image?: string;
  imageStyles?: {};
};
