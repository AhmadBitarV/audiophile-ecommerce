import styles from './speakerZx7.module.scss';
import Card from '../../../components/card/card';

import Fonts from '../../../components/typography/fonts/fonts';
import Button from '../../../components/typography/buttons/button';

const SpeakerZx7 = () => {
    return (
        <Card className={styles.speakerZx7}>
            <Card className={styles.speakerZx7__details}>
                <Fonts elementType="h4" elementColor="">
                    ZX7 SPEAKER
                </Fonts>
                <Button btnType="ghost">See Product</Button>
            </Card>
        </Card>
    );
};

export default SpeakerZx7;
