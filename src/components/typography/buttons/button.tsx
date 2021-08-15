import styles from './button.module.scss';
import classNames from 'classnames';
import icon from '../../../assets/shared/desktop/icon-arrow-right.svg';

interface ButtonProps {
    className?: string;
    btnType: 'orange' | 'ghost' | 'iconic' | 'black';
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = (props) => {
    let style = '';
    let arrowIcon;
    if (props.btnType === 'orange')
        style = classNames(styles.button, styles.button__orange);
    else if (props.btnType === 'black')
        style = classNames(styles.button, styles.button__black);
    else if (props.btnType === 'ghost')
        style = classNames(styles.button, styles.button__ghost);
    else if (props.btnType === 'iconic') {
        style = classNames(styles.button, styles.button__iconic);
        arrowIcon = (
            <img
                src={icon}
                alt="Arrow-right icon"
                className={styles.button__icon}
            />
        );
    }

    return (
        <button
            disabled={props.disabled}
            className={`${style} ${props.className}`}
        >
            {props.children}
            {arrowIcon}
        </button>
    );
};

export default Button;
