export default function Fooditem({food, setFoodId}) {
    return <div className='itemContainer'>
        <img className='itemImage' src={food.image} alt=""/>
        <div className='itemContent'>
            <p className='itemName'>{food.title}</p>
        </div>
        <div className='buttonContainer'>
            <button onClick={() => {
                console.log(food.id)
                setFoodId(food.id)
            }} className='itemButton'>View Recipe
            </button>
        </div>

    </div>
}