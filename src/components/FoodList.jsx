import Fooditem from "./Fooditem.jsx";

export default function FoodList({foodData}) {
    return <div>
        { foodData.map((food)=>
            <Fooditem key={food.id} food={food} />
        )}
    </div>
}