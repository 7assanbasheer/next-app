"use client"
import { useState } from "react";

export default function Home() {
  const[number1,setNumber1]=useState(0)
  const[number2,setNumber2]=useState(0)
  const[result,setResult]=useState<number|null>(null)
  const add=(a:number,b:number)=>a+b
  const min=()=>setResult(number1-number2)
  const mult=()=>setResult(number1*number2)
  const div=()=>setResult(number1/number2)
  return (
    <main>
<input className="a1" type="number" placeholder="الرقم الاول"value={number1}onChange={e=>setNumber1(parseInt(e.target.value))}/>
<input className="a1 a2"type="number" placeholder="الارقم الثاني"value={number2}onChange={e=>setNumber2(parseInt(e.target.value))}/>
<button className="btn"onClick={()=>(mult())}> X</button>
<button onClick={()=>(div())}> قسمة</button>
<button onClick={()=>setResult(add(number1,number2))}> جمع</button>
<button onClick={()=>(min())}> طرح</button>
<span>{result}الناتج</span>


    </main>
  );
}
