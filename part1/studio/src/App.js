import logo from './logo.svg';
import './App.css';
import RecipeDescription from './components/RecipeDescription.js';
import RecipeIngredients from './components/RecipeIngredients.js';
import RecipeIngredients from './components/Photos.js';

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