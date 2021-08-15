import styles from './speakerZx9.module.scss';
import img_speakers from '../../../assets/home/desktop/image-speaker-zx9.png';

import Fonts from '../../../components/typography/fonts/fonts';
import Button from '../../../components/typography/buttons/button';

const SpeakerZx9 = () => {
    return (
        <div className={styles.speakerZx9}>
            <img
                src={img_speakers}
                alt="ZX9 Speaker"
                className={styles.speakerZx9__image}
            />

            <div className={styles.speakerZx9__details}>
                <Fonts elementType="h1" elementColor="White">
                    ZX9 SPEAKER
                </Fonts>
                <Fonts elementType="p" elementColor="White">
                    Upgrade to premium speakers that are phenomenally built to
                    deliver truly remarkable sound.
                </Fonts>
                <Button btnType="black">See Product</Button>
            </div>
        </div>
    );
};

export default SpeakerZx9;
