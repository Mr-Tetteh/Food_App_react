import {useState} from 'react'
import Search from "./components/Search.jsx";
import FoodList from "./components/FoodList.jsx";
import Nav from "./components/Nav.jsx";
import './App.css'

function App() {
const [foodData, setFoodData] =useState([])
    return (
        <div className="App">
            <Nav/>
            <Search foodData={foodData} setFoodData={setFoodData}/>
          <FoodList foodData={foodData} />
        </div>
    )
}

export default App
