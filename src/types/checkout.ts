export type AddressData = {
  firstName: string;
  lastName: string;
  address1: string;
  address2?: string;
  country: string;
  postalCode: string;
  city: string;
  state: string;
  phoneNumber: string;
};

export type FormValues = {
  shipping: AddressData;
  billing: AddressData;
  email: string;
  billingSameAsShipping: boolean;
};
