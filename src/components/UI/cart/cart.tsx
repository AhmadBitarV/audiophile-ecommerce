import icon_cart from '../../../assets/shared/desktop/icon-cart.svg';
import styles from './cart.module.scss';
import { Link } from 'react-router-dom';
import { useSelector } from '../../../hooks/useTypedSelector';

const Cart = () => {
    let cart = null;
    const token = useSelector((state) => state.auth.token);
    if (!token)
        cart = (
            <Link to="auth" className={styles.link}>
                Log in
            </Link>
        );
    else cart = <img src={icon_cart} className={styles.cart} alt="Cart icon" />;
    return cart;
};

export default Cart;
