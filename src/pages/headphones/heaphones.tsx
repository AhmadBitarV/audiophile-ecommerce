import styles from './headphones.module.scss';
import Header from '../../components/header/header';
import Fonts from '../../components/typography/fonts/fonts';
import Banner from '../../components/product-banner/product-banner';

import imageBig from '../../assets/category-headphones/desktop/image-xx99-mark-one.jpg';
import imageMedium from '../../assets/category-headphones/tablet/image-xx99-mark-one.jpg';
import imageSmall from '../../assets/category-headphones/mobile/image-xx99-mark-one.jpg';

const Headphones: React.FC = () => {
    return (
        <div className={styles.headphones}>
            <div className={styles.headphones__hero}>
                <Header />
                <div className={styles.headphones__heading}>
                    <Fonts elementType="h2" elementColor="White">
                        Headphones
                    </Fonts>
                </div>
            </div>

            <Banner
                newProduct
                heading="XX99 Mark II Headphones"
                description="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
                alt="XX99 Mark II Headphones Image"
                className=""
                imagePC={imageBig}
                imageMobile={imageSmall}
                imageTablet={imageMedium}
            />
        </div>
    );
};

export default Headphones;
