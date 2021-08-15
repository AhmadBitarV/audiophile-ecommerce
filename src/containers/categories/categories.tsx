import styles from './categories.module.scss';
import CategoryReview from './category-review/category-review';

const Categories: React.FC<{}> = (props) => {
    return (
        <div className={styles.Categories}>
            <CategoryReview img="headphones" />
            <CategoryReview img="speakers" />
            <CategoryReview img="earphones" />
        </div>
    );
};

export default Categories;
