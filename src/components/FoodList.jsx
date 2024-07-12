import Fooditem from "./Fooditem.jsx";

export default function FoodList({foodData, setFoodId}) {
    return <div>
        { foodData.map((food)=>
            <Fooditem setFoodId={setFoodId} key={food.id} food={food} />
        )}
    </div>
}