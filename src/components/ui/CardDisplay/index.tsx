import { Button } from "@/components/ui/button.tsx";
import { type CardDisplayProps } from "@/interfaces/CardProps";


export function CardDisplay({ data, onRunClick, inputValue, onInputChange }: CardDisplayProps) {
  return (
    <>
      {data && (
        <>
          <h2>{data.name}</h2>
          <img src={data.img} alt={data.name} />
          <h3>{data.oracle}</h3>
        </>
      )}
      <br />
      <Button onClick={onRunClick}> RUN </Button>
      <input
        placeholder="Insert Here"
        value={inputValue}
        onChange={onInputChange}
      />
    </>
  );
}
