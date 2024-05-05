import { Todo } from "@/types/api";
import { MicroCmsType } from "@/types/utiles";
import { microCmsFetcher } from "@/utiles/fetcher";

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  const data = await microCmsFetcher<MicroCmsType<Todo>>("/todos", params.id);
  return Response.json({ data });
}
