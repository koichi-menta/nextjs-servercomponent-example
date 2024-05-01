"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    fetch(`/api`)
      .then((res) => res.json())
      .then((res) => {
        setTodo(res.data.contents);
      });
  }, []);

  return (
    <main>
      {todo.map((item: any) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </main>
  );
}
