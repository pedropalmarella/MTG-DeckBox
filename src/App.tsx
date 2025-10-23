import { getCardByName } from "@/api/scryfall.ts";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { CardDisplay } from "./components/ui/CardDisplay";

function App() {
  const [inputName, setInputName] = useState("");
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["card", inputName],
    queryFn: () => getCardByName(inputName),
    enabled: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputName(e.target.value)
  }

  if (isLoading) {
    return <h2>LOADING...</h2>;
  }

  if (error) {
    return <h2>ERRO: {error.message}</h2>;
  }

  return (
    <>
      <CardDisplay
        data={data}
        onRunClick={refetch}
        inputValue={inputName}
        onInputChange={handleInputChange}
      />
    </>
  );
}

export default App;
