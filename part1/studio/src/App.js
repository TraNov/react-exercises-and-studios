// import logo from './logo.svg';
import './App.css';
import RecipeDescription from './Components/Description';
import RecipeIngredients from './Components/Ingredients';
import RecipePhoto from './Components/Photos.js';

function App() {
  return (
    <div className="App">
      <div className="recipePhotoBlock">
        <RecipePhoto />
        <div>
          <RecipeDescription />
          <RecipeIngredients />
        </div>
      </div>
    </div>
  );
}

export default App;