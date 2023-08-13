import React from 'react';
import styles from './Ingredients.module.css';


export default function RecipeIngredients() {
    let ingredients = ["1 (8 ounce) package egg noodles", "1 pound ground beef", "1 (10.5 ounce) can fat-free condensed cream of mushroom soup", "1 tablespoon garlic powder", "½ cup sour cream"];

    return (
    <div>
    <h3>Recipe Ingredients</h3>
    <ul className = {styles.ingredientList}>
       <li>{ingredients[0]}</li>
       <li>{ingredients[1]}</li>
       <li>{ingredients[2]}</li>
       <li>{ingredients[3]}</li>
       <li>{ingredients[4]}</li>
    </ul>
    </div>

    )


}