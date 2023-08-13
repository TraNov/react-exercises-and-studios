import logo from './logo.svg';
import './App.css';
import RecipeDescription from './Components/RecipeDescription.js';
import RecipeIngredients from './Components/RecipeIngredients.js';
import RecipePhoto from './Components/Photos.js';

function App() {
  return (
	<div className="App">
	   <div>
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
