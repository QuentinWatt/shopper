export const storeCookie = (name: string, value: string) => {
  document.cookie = `${name}=${value}; Secure; path=/`;
};

export const clearCookie = (name: string) => {
  document.cookie = `${name}=; Secure; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
};

export const findCookie = (name: string) => {
  const token =
    document.cookie
      ?.split("; ")
      ?.filter((cookie) => cookie.includes(`${name}=`))[0]
      ?.split("=")[1] ?? null;
  return token;
};
