import Card from '../../../components/card/card';
import styles from './earphones.module.scss';
import Fonts from '../../../components/typography/fonts/fonts';
import Button from '../../../components/typography/buttons/button';

const Earphones = () => {
    return (
        <div className={styles.earphones}>
            <Card className={styles.earphones__image}></Card>

            <Card className={styles.earphones__details}>
                <Fonts elementType="h4" elementColor="">
                    YX1 EARPHONES
                </Fonts>
                <Button btnType="ghost">SEE Product</Button>
            </Card>
        </div>
    );
};

export default Earphones;
