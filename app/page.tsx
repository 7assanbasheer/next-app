"use client";
import { useState } from "react";
import { NumberInput } from "./components/number";
import { Button } from "./components/Button";

export default function Home() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState<number | null>(null);
  const add = () => setResult(number1 + number2);
  const min = () => setResult(number1 - number2);
  const mult = () => setResult(number1 * number2);
  const div = () => setResult(number1 / number2);
  return (
    <main>
      <NumberInput
        placeholder="الرقم الاول"
        setValue={setNumber1}
        value={number1}
      />
      <NumberInput
        className="bg-white"
        placeholder="الرقم الثاني"
        setValue={setNumber2}
        value={number2}
      />

      
      <Button onClick={mult}>*</Button>
      <Button onClick={div}>/</Button>
      <Button onClick={add}>+</Button>
      <Button onClick={min}>-</Button>
      <span className="gar">{result}الناتج</span>
    </main>
  );
}
