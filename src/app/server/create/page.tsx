import TodoForm from "@/components/TodoForm";

export default async function Home() {
  return (
    <main>
      <div className="flex">
        <p>登録画面</p>
        <TodoForm />
      </div>
    </main>
  );
}
