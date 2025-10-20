import {Button} from "@/components/ui/button.tsx";
import {getCardByName} from "@/api/scryfall.ts"
import {useQuery} from "@tanstack/react-query";
import {useState} from "react";

function App() {
    const [inputName, setInputName] = useState("");
    const {data, error, isLoading, refetch} = useQuery({
        queryKey: ['card', inputName],
        queryFn: () => getCardByName(inputName),
        enabled: false,
    })

    if (isLoading) {
        return <h2>LOADING...</h2>
    }

    if (error) {
        return <h2>ERRO: {error.message}</h2>
    }

    return (
        <>
            {data && (
                <>
                    <h2>{data.name}</h2>
                    <img src={data.img} alt={data.name}/>
                    <h3>{data.oracle}</h3>
                </>
            )}
            <br/>
            <Button onClick={() => refetch()}> RUN </Button>
            <input
                placeholder="Insert Here"
                value={inputName}
                onChange={(e) => setInputName(e.target.value)}
            />
        </>
    )
}

export default App
