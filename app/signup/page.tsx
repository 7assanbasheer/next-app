"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState<any>(undefined);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:8000/signup", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          username: "ali",
          password: "1234",
          email: "test",
        }),
      });
      const json = await res.json();
      setData(json);
    }
    fetchData();
  }, []);
  return <main>{JSON.stringify(data, null, 2)}</main>;
}
