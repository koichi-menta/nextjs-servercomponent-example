import "server-only";
import { apiKey, baseURL } from "@/utiles/constants";

export const microCmsFetcher = async <T>(
  endpoint: string,
  id?: string,
): Promise<T> => {
  const aaa = id ? `/${id}` : "";
  const res = await fetch(`${baseURL}${endpoint}${aaa}`, {
    headers: {
      "X-MICROCMS-API-KEY": apiKey || "",
    },
  });
  if (!res.ok) {
    throw new Error("エラーです");
  }
  return res.json();
};
