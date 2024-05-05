import { Suspense } from "react";
import TodoList from "@/components/TodoListServer";
import Loading from "@/app/loading";
import TodoDetailClient from "@/components/TodoDetailClient";
import Link from "next/link";

export default async function Home() {
  return (
    <main>
      <div className="flex">
        <Link href={"/server/create"}>登録画面</Link>
        <div className="w-[500px]">
          <Suspense fallback={<Loading />}>
            <TodoList />
          </Suspense>
        </div>
        <div className="w-[300px]">
          <Suspense fallback={<Loading />}>
            <TodoDetailClient />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
