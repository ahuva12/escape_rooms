import styles from './RoomCard.module.css';

interface RoomCardProps {
    nameRoom: string;
    imageRoom: string;
    descriptionRoom: string
    handle_more_details: (nameRoom:string) => void;
}

function RoomCard({nameRoom, imageRoom, descriptionRoom, handle_more_details} : RoomCardProps) {

    return (
        <div className={styles.roomCardContainer}>
            <h2 className={styles.nameRoom}>{nameRoom}</h2>
            <img className={styles.imageRoom} src={imageRoom} alt="התמונה לא נתמכת" />
            <p className={styles.descriptionRoom}>{descriptionRoom}</p>
            <button className={styles.more_details_button} onClick={()=>handle_more_details(nameRoom)}>לפרטים נוספים</button>
        </div>
    );
}

export default RoomCard;