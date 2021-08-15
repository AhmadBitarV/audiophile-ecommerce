import styles from './input.module.scss';
import { useRef } from 'react';

interface InputProps {
    placeholder: string;
    label: string;
}

const Input: React.FC<InputProps> = (props) => {
    return (
        <div className={styles.input}>
            <label>{props.label}</label>
        </div>
    );
};

export default Input;
