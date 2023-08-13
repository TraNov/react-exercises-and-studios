import recipeData from './recipe.json';
import './styling.css';
function RecipeImage() {
  let recipeImage = recipeData.map(recipe =>{
    return <img key={recipe.name} src={recipe.recipeImage} alt={recipe.name} classname="recipeImage" />
  });
   return <div>{recipeImage}</div>;
   
 }
 
 export default RecipeImage;
 
 //import json file for the data
 //apply css for className recipeImage
 