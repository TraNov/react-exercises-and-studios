import React from 'react';
import styles from './Description.module.css';

function RecipeAuthor() {
    let authorLink = "https://www.allrecipes.com/recipe/16311/simple-beef-stroganoff/"
    let authorPhoto = "https://image.tmdb.org/t/p/w500/ec0OJVbs6NZKMbS1yiCAJKjeoJf.jpg"
    let authorName = "Tracy Morgan"

    return (
        <div className={styles.recipeAuthorBlock}>
            <img src={authorPhoto} alt="The recipe authors." className={styles.imageUpdates} id={styles.imageAuthor} />
            <div>
                <h3>{authorName}</h3>
                <a href={authorLink}>Inspired Taste</a>
            </div>
        </div>
    )
};

class RecipeDescription extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Beef Stroganoff</h1>
                    <p>This recipe is simplified. It relies on shortcut ingredients, such as ground beef and canned cream of mushroom soup, to keep the cook time down and to cut down on extra steps.
                    </p>
                </div>
                <RecipeAuthor />
            </div>
        )
    }
};

export default RecipeDescription