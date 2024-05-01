import { Suspense } from "react";
import TodoList from "@/components/TodoList";
import Loading from "@/app/loading";
import TodoDetail from "@/components/TodoDetail";

export default async function Home() {
  return (
    <main>
      <div className="flex">
        <div className="w-[500px]">
          <Suspense fallback={<Loading />}>
            <TodoList />
          </Suspense>
        </div>
        <div className="w-[300px]">
          <Suspense fallback={<Loading />}>
            <TodoDetail id={"1"} />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
