export const BASE_URL = "http://localhost:3002";
export const MUNICIPALITY_URL = `${BASE_URL}/municipality`;
export const RESIDENTS_URL = `${BASE_URL}/resident`;
export const REGISTER_URL = `${BASE_URL}/register`;
export const LOGIN_URL = `${BASE_URL}/login`;
export const RESIDENT_ADDRESS_URL = `${BASE_URL}/resident/address`;

export const fetcher = (url: string) => fetch(url).then((res) => res.json());
