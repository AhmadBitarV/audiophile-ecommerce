import styles from './home.module.scss';
import HeroSection from './hero/hero';

import Categories from '../../containers/categories/categories';
import SpeakerZx9 from './speakerZx9/speakerZx9';
import SpeakerZx7 from './speakerZx7/speakerZx7';
import Earphones from './earphones/earphones';
import Reviews from '../../containers/reviews/reviews';
import Footer from '../../components/footer/footer';

const Home: React.FC = () => {
    return (
        <div className={styles.Home}>
            <HeroSection />
            <Categories />
            <SpeakerZx9 />
            <SpeakerZx7 />
            <Earphones />
            <Reviews />
            <Footer />
        </div>
    );
};

export default Home;
