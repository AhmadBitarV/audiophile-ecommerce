import icon_logo from '../../../assets/shared/desktop/logo.svg';
import styles from './logo.module.scss';

const Logo: React.FC<{ classname?: string }> = (props) => (
    <img
        src={icon_logo}
        alt="Logo"
        className={`${styles.Logo} ${props.classname}`}
    />
);

export default Logo;
