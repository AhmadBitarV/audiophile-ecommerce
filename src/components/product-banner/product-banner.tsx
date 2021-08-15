import styles from './product-banner.module.scss';
import Card from '../card/card';
import Fonts from '../typography/fonts/fonts';
import Button from '../typography/buttons/button';

const Banner: React.FC<{
    imagePC: string;
    imageTablet: string;
    imageMobile: string;
    className: string;
    newProduct: boolean;
    heading: string;
    description: string;
    alt: string;
}> = (props) => {
    return (
        <div className={styles.banner}>
            <Card className={styles.banner__content}>
                {props.newProduct ? (
                    <Fonts elementType="SubTitle" elementColor="Orange">
                        New Product
                    </Fonts>
                ) : null}

                <Fonts elementType="h2" elementColor="">
                    {props.heading}
                </Fonts>

                <Fonts elementType="p" elementColor="">
                    {props.description}
                </Fonts>

                <Button btnType="orange">SEE Product</Button>
            </Card>
        </div>
    );
};

export default Banner;
