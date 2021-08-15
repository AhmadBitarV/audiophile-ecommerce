import React from 'react';
import styles from './header.module.scss';

import Logo from '../UI/logo/logo';
import Cart from '../UI/cart/cart';
import Navigation from '../navigation/navigation';
import SidebarButton from '../UI/sidebar-button/sidebar-button';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <SidebarButton />
            <Logo />
            <Navigation className={styles.header__navigation} />
            <Cart />
        </header>
    );
};

export default Header;
