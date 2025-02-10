import styles from './ParashaRiddleCard.module.css';

type Parasha = {
    name: string;
    hebrewName: string;
    riddle: string;
    solution: string;
};

const ParashaRiddleCard = ({ parasha }: { parasha: Parasha }) => {
    return (
        <div className={styles.ParashaRiddleCard}>
            <div className={styles.content}>חידה לפרשת {parasha.hebrewName}</div>
        </div>
    );
}

export default ParashaRiddleCard;
