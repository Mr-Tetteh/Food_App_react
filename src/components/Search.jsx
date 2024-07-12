import {useEffect, useState} from "react";

const URL = 'https://api.spoonacular.com/recipes/complexSearch';
const API_KEY = "62cf6e5e25874478927de1cce145a620";
export default function Search({foodData, setFoodData}) {
    const [query, setQuery] = useState('pizza')
    useEffect(() => {
        async function fetchFood() {
            const $responds = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
            const data = await $responds.json();
            console.log(data.results);
            setFoodData(data.results)

        }
        fetchFood();
    }, [query]);
    return <div>
        <input type="text" onChange={(e) => setQuery(e.target.value)} value={query}/>
    </div>
}