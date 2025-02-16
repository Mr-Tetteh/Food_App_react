import {useEffect, useState} from "react";
import '../css/styles.css'

const URL = 'https://api.spoonacular.com/recipes/complexSearch';
const API_KEY = "API_KEY_HERE";
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
    return <div className='SearchContainer'>
        <input className='input' type="text" onChange={(e) => setQuery(e.target.value)} value={query}/>
    </div>
}