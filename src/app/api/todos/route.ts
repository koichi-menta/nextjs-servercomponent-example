import { Todo } from "@/types/api";
import { MicroCmsType } from "@/types/utiles";
import { apiKey, baseURL } from "@/utiles/constants";
import { microCmsFetcher } from "@/utiles/fetcher";

export async function GET(request: Request) {
  const data = await microCmsFetcher<MicroCmsType<Todo>>("/todos");
  return Response.json({ data });
}

export async function POST(request: Request) {
  const req = await request.json();
  const res = await fetch(`${baseURL}/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-MICROCMS-API-KEY": apiKey || "",
    },
    body: JSON.stringify(req),
  });

  const data = await res.json();

  return Response.json(data);
}
