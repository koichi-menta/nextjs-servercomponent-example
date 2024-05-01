"use client";
import { publicApiKey, publicBaseURL } from "@/utiles/constants";
import { useState, useEffect } from "react";

export default function Home() {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    fetch(`${publicBaseURL}/todos`, {
      headers: {
        "X-MICROCMS-API-KEY": publicApiKey || "",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setTodo(res.contents);
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
