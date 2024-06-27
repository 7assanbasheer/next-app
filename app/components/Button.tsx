type Props = {
    onClick:Function
   children:React.ReactNode
};

export function Button(props:Props) {
  return (
    <button className=" bg-yellow-500 rounded-full h-12 w-12" 
    onClick={()=> props.onClick()}>
        {props.children}
      </button>
   
  );
}
