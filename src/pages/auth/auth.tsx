import styles from './auth.module.scss';
import image from '../../assets/yoshiko-evanka-oI90dywodT8-unsplash.jpg';
import Button from '../../components/typography/buttons/button';
import Fonts from '../../components/typography/fonts/fonts';
import { useEffect, useState } from 'react';
import { useAction } from '../../hooks/useActions';
import { useRef } from 'react';
import { useSelector } from '../../hooks/useTypedSelector';
import Logo from '../../components/UI/logo/logo';

const Auth = () => {
    ////// States //////
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [paragraph, setParagraph] = useState('');
    const [usernametStyle, setUsernameStyle] = useState(styles.input__input);
    const [passwordtStyle, setPasswordStyle] = useState(styles.input__input);

    ////// Refs //////
    const usernameRef = useRef<HTMLInputElement>(null);

    ////// Actions //////
    const action = useAction();
    const state = useSelector((state) => state.auth);

    ////// Hooks //////
    useEffect(() => {
        usernameRef.current?.focus();
        console.log('Action was called');
    }, []);

    useEffect(() => {
        if (state.error !== null) {
            switch (state.error.response?.status) {
                case 401:
                    setParagraph('Wrong password or username');
                    break;
                case 500:
                    setParagraph(
                        'Network problem, check your internet connection'
                    );
                    break;
            }
        }
    }, [state.error]);

    useEffect(() => {
        if (state.token) {
            action.servers(state.token);
            console.log('done');
        }
    }, [action, state.token]);

    ////// Functions //////
    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        validateInput();
        if (username.trim().length >= 6 && password.trim().length >= 6) {
            action.auth(username, password);
        }
    };

    const onUsernameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsernameStyle(styles.input__input);
        setUsername(event.target.value);
    };

    const onPasswordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordStyle(styles.input__input);
        setPassword(event.target.value);
    };

    const validateInput = () => {
        if (username.trim().length < 6) {
            setUsernameStyle(`${styles.input__input} ${styles.red}`);
        }

        if (password.trim().length < 6) {
            setPasswordStyle(`${styles.input__input} ${styles.red}`);
        }

        if (username.trim().length < 6 || password.trim().length < 6) {
            setParagraph('Both fields must have at least 6 characters');
        }
    };

    return (
        <div className={styles.auth}>
            <div className={styles.auth__content}>
                <Logo classname={styles.logo} />
                <Fonts elementType="h4">Start your free trial</Fonts>

                <Fonts elementType="h6" elementColor="Orange">
                    Sign in to contiune
                </Fonts>

                <form className={styles.auth__form} onSubmit={onSubmit}>
                    <div className={styles.input}>
                        <label className={styles.input__label} htmlFor="">
                            Username
                        </label>
                        <input
                            onChange={onUsernameHandler}
                            className={usernametStyle}
                            placeholder="JohnSmith007"
                            type="text"
                            ref={usernameRef}
                        />
                    </div>

                    <div className={styles.input}>
                        <label className={styles.input__label} htmlFor="">
                            Password
                        </label>
                        <input
                            onChange={onPasswordHandler}
                            className={passwordtStyle}
                            placeholder="2@1b#2AJ^mF"
                            type="password"
                        />
                    </div>

                    <Button className={styles.input__button} btnType="orange">
                        Confirm
                    </Button>
                    <Fonts className={styles.error} elementType="p">
                        {paragraph}
                    </Fonts>
                </form>
            </div>
            <img src={image} alt="front page" className={styles.auth__image} />
        </div>
    );
};

export default Auth;
