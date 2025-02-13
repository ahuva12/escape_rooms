import styles from './ParashaRiddleCard.module.css';
import { Parasha } from '@/types/Parasha';

const ParashaRiddleCard = ({ parasha }: { parasha: Parasha }) => {
    return (
        <div className={styles.ParashaRiddleCard}>
            <div className={styles.content}>חידה לפרשת {parasha.hebrewName}</div>
        </div>
    );
}

export default ParashaRiddleCard;
