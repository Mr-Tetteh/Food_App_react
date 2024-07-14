import {useEffect, useState} from "react";
import '../css/styles.css'
import ItemList from "./ItemList.jsx";

export default function FoodDetails({foodId}) {
    const [food, setFood] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const URL = `https://api.spoonacular.com/recipes/${foodId}/information`
    const API_KEY = "API_KEY_HERE";

    useEffect(() => {
        async function fetchFood() {
            const res = await fetch(`${URL}?apiKey=${API_KEY}`)
            const data = await res.json()
            console.log(data)
            setFood(data)
            setIsLoading(false)

        }

        fetchFood()
    }, [foodId])

    return <div>
        <div className='recipeCard'>
            <h1 className='recipeName'>
                {food.title}
            </h1>
            <img className='recipeImage' src={food.image} alt=""/>
            <div className='recipeDetails'>
                <span>👨‍👩‍👦Serves {food.servings}</span>
                <span> <strong> 🕟 {food.readyInMinutes} Minutes  </strong> </span>
                <span><strong> {food.vegetarian ? '🥕vegetarian' : '🍗non-vegetarian'}</strong></span>
                <span><strong> {food.vegan ? '🐮 Vegan' : ''}</strong> </span>
            </div>
            <div>
                <strong> $ <span>{food.pricePerServing / 100} Per serving </span></strong>
            </div>
            <h2>Ingredients </h2>
            <ItemList food={food} isLoading={isLoading}/>
            <h2>Instructions </h2><br/>
            <div className='recipeInstructions'>
                <ol>
                    {isLoading ? 'Loading....' : food.analyzedInstructions[0].steps.map((step) =>
                        (<li>{step.step}</li>))}
                </ol>
            </div>
        </div>
    </div>
}

