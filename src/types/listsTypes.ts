export type StandardServiceItem = {
  id: number;
  type: string;
  i18nKey: string;
  price: number;
  image?: string;
  imageStyles?: {};
};

export type GemServiceItem = {
  id: number;
  type: string;
};

export type ServiceItem = StandardServiceItem | GemServiceItem;
