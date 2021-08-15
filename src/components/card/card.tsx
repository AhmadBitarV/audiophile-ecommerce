import styles from './card.module.scss';

const Card: React.FC<{ className: string }> = (props) => {
    return (
        <div className={`${styles.card} ${props.className}`}>
            {props.children}
        </div>
    );
};

export default Card;
