type Props = {
    className?: string
  placeholder: string;
  value: number;
  setValue: Function;
};

export function NumberInput(props:Props) {
  return (
    <input
      className={"a1 "+props.className}
      type="number"
      placeholder={props.placeholder}
      value={props.value}
      
      onChange={(e) => props.setValue(parseInt(e.target.value))}
    />
  );
}
