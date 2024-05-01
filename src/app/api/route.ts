import { Todo } from "@/types/api";
import { MicroCmsType } from "@/types/utiles";
import { microCmsFetcher } from "@/utiles/fetcher";

export async function GET(request: Request) {
  const data = await microCmsFetcher<MicroCmsType<Todo>>("/todos");
  return Response.json({ data });
}
