import styles from './ParashaRiddleCard.module.css';

const ParashaRiddleCard = (props: {parashaName: string}) => {
    return (
        <div className={styles.ParashaRiddleCard}>
            <div className={styles.content}>חידה לפרשת {props.parashaName}</div>
        </div>
    );
}

export default ParashaRiddleCard;