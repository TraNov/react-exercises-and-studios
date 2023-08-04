import React from 'react';
import styles from './Description.module.css;

export default function RecipeAuthor() {
   let pageTitle = "Latest Book Releases";
   let authorPhoto = "https://m.media-amazon.com/images/I/81qPLzjubcL._AC_UF1000,1000_QL80_.jpg";
   let authorName = "";
   let authorLink = "";

   return (
      <div className = {styles.recipeAuthorBlock}>
         <img src={authorPhoto} alt = "Reasonable alt text" className={styles.imageUpdates} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}>Blog name</a>
         </div>
      </div>
   );

}

class RecipeDescription extends React.Component {
   render() {

      return (
	   <div>
		  <div>
			 <h1>Recipe Title</h1>
			 <p>Short recipe description</p>
		  </div>
		  <RecipeAuthor />
	   </div>
      );
   }
}

export default RecipeDescription;
