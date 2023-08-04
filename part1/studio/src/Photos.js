import styles from './Description.module.css';

export default function RecipePhoto() {
   let links = "https://m.media-amazon.com/images/I/81qPLzjubcL._AC_UF1000,1000_QL80_.jpg";

   return (
		<img src={links} alt="recipe photo" className = {styles.imageUpdates} />   );
}