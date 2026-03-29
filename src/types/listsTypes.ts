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
  i18nKey: string;
  price: number;
  image?: string;
  imageStyles?: {};
};
