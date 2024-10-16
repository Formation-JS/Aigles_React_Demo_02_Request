export type GenderUser = 'male' | 'female';

export type GenderNat = 'AU' | 'BR' | 'CA' | 'CH' | 'DE' | 'DK' | 'ES' | 'FI' | 'FR' | 'GB' | 'IE' | 'IN' | 'IR' | 'MX' | 'NL' | 'NO' | 'NZ' | 'RS' | 'TR' | 'UA' | 'US';

export type User = {
  firstname: string;
  lastname: string;
  email: string;
  gender: string;
  nat: string;
  picture: string;
  birthdate: Date;
};