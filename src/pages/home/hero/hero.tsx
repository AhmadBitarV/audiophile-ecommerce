import styles from './hero.module.scss';

import Header from '../../../components/header/header';
import Fonts from '../../../components/typography/fonts/fonts';
import Button from '../../../components/typography/buttons/button';

const Hero = () => (
    <main className={styles.hero}>
        <Header />
        <div className={styles.hero__content}>
            <Fonts elementColor="Orange" elementType="SubTitle">
                NEW PRODUCT
            </Fonts>
            <Fonts elementColor="" elementType="h1">
                XX99 Mark II Headphones
            </Fonts>
            <Fonts elementColor="" elementType="p">
                Experience natural, lifelike audio and exceptional build quality
                made for the passionate music enthusiast.
            </Fonts>
            <Button btnType="orange">See Product</Button>
        </div>
    </main>
);

export default Hero;
