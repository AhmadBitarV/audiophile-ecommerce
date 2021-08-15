import { NavLink } from 'react-router-dom';
import styles from './navigation.module.scss';

const Nav: React.FC<{ className: string }> = (props) => (
    <nav className={`${styles.Nav} ${props.className}`}>
        <NavLink className={styles.Nav__Link} to="/">
            Home
        </NavLink>

        <NavLink className={styles.Nav__Link} to="/headphones">
            headphone
        </NavLink>

        <NavLink className={styles.Nav__Link} to="/speakers">
            speakers
        </NavLink>

        <NavLink className={styles.Nav__Link} to="/earphones">
            earphones
        </NavLink>
    </nav>
);

export default Nav;
