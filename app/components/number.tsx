type Props = {
    className?: string
  placeholder: string;
  value: number;
  setValue: Function;
};

export function NumberInput(props:Props) {
  return (
    <input
      className={" bg-violet-800 text-yellow-400 p-4 w-20 rounded-2xl "+props.className}
      type="number"
      placeholder={props.placeholder}
      value={props.value}
      
      onChange={(e) => props.setValue(parseInt(e.target.value))}
    />
  );
}
