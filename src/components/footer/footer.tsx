import Logo from '../UI/logo/logo';
import styles from './footer.module.scss';
import Navigation from '../navigation/navigation';
import Fonts from '../typography/fonts/fonts';

import icon_facebook from '../../assets/shared/desktop/icon-facebook.svg';
import icon_instagram from '../../assets/shared/desktop/icon-instagram.svg';
import icon_twitter from '../../assets/shared/desktop/icon-twitter.svg';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__content}>
                <div className={styles.footer__navigation}>
                    <Logo />
                    <Navigation className="" />
                </div>

                <div className={styles.footer__aboutUs}>
                    <Fonts elementType="p" elementColor="">
                        Audiophile is an all in one stop to fulfill your audio
                        needs. We're a small team of music lovers and sound
                        specialists who are devoted to helping you get the most
                        out of personal audio. Come and visit our demo facility
                        - we’re open 7 days a week.
                    </Fonts>
                </div>

                <div className={styles.footer__legal}>
                    <Fonts elementType="p" elementColor="">
                        Copyright 2021. All Rights Reserved
                    </Fonts>

                    <nav className={styles.footer__social_media}>
                        <a href="#www.google.com">
                            <img
                                src={icon_facebook}
                                alt="facebook icon"
                                className={styles.footer__icon}
                            />
                        </a>
                        <a href="google.com">
                            <img
                                src={icon_instagram}
                                alt="instagram icon"
                                className={styles.footer__icon}
                            />
                        </a>

                        <a href="google.com">
                            <img
                                src={icon_twitter}
                                alt="twitter icon"
                                className={styles.footer__icon}
                            />
                        </a>
                    </nav>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
