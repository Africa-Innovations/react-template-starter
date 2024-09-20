import Cookies from "js-cookie";

let cookies: string | null | undefined = null;

export async function setCookie(key: string, value: string) {
  try {
    const thirtyDaysInSeconds = 30 * 24 * 60 * 60;
    Cookies.set(key, value, { expires: thirtyDaysInSeconds });
    return { success: true };
  } catch (error) {
    return { success: false };
  }
}

export function getCookie() {
  if (!cookies) {
    cookies = Cookies.get("token");
  }

  const { accounts, access } = JSON?.parse(cookies as string);

  return { access, accounts };
}
