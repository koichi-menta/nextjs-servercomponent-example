"use client";
import { baseURL } from "@/utiles/constants";
import { useState, useEffect } from "react";

export default function Home() {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    const res = fetch(baseURL)
      .then((res) => res.json())
      .then((res) => {
        setTodo(res);
        console.log(res);
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
