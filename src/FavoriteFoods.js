import React, { useState } from "react"
import Food from "./Food"


function FavoriteFoods (props){
    const [favoriteFood, setFavoriteFood] = useState(null)
   return (
    <div className="bordered">
        <h1>FavoriteFoods</h1>
        <p>my favorite is: {favoriteFood || "Not Selected"}</p>
         <Food name='taco'  foo={setFavoriteFood}/>
         <Food name='pizza' foo={setFavoriteFood} />
         <Food name='sushi' foo={setFavoriteFood} />
         {/* <FoodClass name='pizza' /> */}
    </div>
   )
}

export default FavoriteFoods