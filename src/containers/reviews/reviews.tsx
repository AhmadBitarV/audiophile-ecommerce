import styles from './reviews.module.scss';
import Fonts from '../../components/typography/fonts/fonts';
import Card from '../../components/card/card';

const Reviews = () => {
    return (
        <div className={styles.reviews}>
            <Card className={styles.reviews__details}>
                <Fonts elementType="h2" elementColor="">
                    Bringing you the <span>best</span> audio gear
                </Fonts>
                <Fonts elementType="p" elementColor="">
                    Located at the heart of New York City, Audiophile is the
                    premier store for high end headphones, earphones, speakers,
                    and audio accessories. We have a large showroom and luxury
                    demonstration rooms available for you to browse and
                    experience a wide range of our products. Stop by our store
                    to meet some of the fantastic people who make Audiophile the
                    best place to buy your portable audio equipment.
                </Fonts>
            </Card>

            <Card className={styles.reviews__image}></Card>
        </div>
    );
};

export default Reviews;
