import styles from './category-review.module.scss';
import Fonts from '../../../components/typography/fonts/fonts';
import Button from '../../../components/typography/buttons/button';
import img_earphones from '../../../assets/shared/desktop/image-earphones.png';
import img_headphones from '../../../assets/shared/desktop/image-headphones.png';
import img_speakers from '../../../assets/shared/desktop/image-speakers.png';

const CategoryReview: React.FC<{
    img: 'headphones' | 'earphones' | 'speakers';
}> = (props) => {
    let image = '';
    switch (props.img) {
        case 'headphones':
            image = img_headphones;
            break;

        case 'earphones':
            image = img_earphones;
            break;

        case 'speakers':
            image = img_speakers;
            break;

        default:
            break;
    }

    return (
        <div className={styles.category}>
            <img
                src={image}
                alt={`${props.img} categpry`}
                className={styles.category__image}
            />
            <Fonts elementType="h6" elementColor="">
                {props.img}
            </Fonts>
            <Button btnType="iconic">SHOP</Button>
        </div>
    );
};

export default CategoryReview;
