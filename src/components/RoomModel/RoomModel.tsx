import styles from './RoomModel.module.css';
import { EscapeRoom } from '../../types/EscapeRoom';
import { useState, useEffect } from 'react';
import { RoomOrdering } from '@/components';

interface RoomModelProps {
    escapeRoom: EscapeRoom;
    handle_want_take_peek_inside: () => void;
    handle_close_room_model: () => void;
}

function RoomModel({escapeRoom, handle_want_take_peek_inside, handle_close_room_model} : RoomModelProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
    const [isRoomOrdering, setIsRoomOrdering] = useState<boolean>(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % escapeRoom.images.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [escapeRoom.images.length]);

    // const handleOrderNow = () => {
    //     setIsRoomOrdering(true);
    // }

    const handle_control_room_model = () => {
        setIsRoomOrdering(prev => !prev);
    }


    return (
        <div className={styles.RoomModel}>
            <button className={styles.closeButton} onClick={handle_close_room_model}>X</button>
            <div className={styles.header}>
                <h1>{escapeRoom.name}</h1>
                <p>{escapeRoom.shortDescription}</p>
            </div>
            <div className={styles.imageContainer}>
            {escapeRoom.images.map((img, index) => (
                <img
                    key={index}
                    src={img}
                    alt="תמונה לא נתמכת"
                    className={`${styles.imageWrapper} ${index === currentImageIndex ? styles.fadeIn : styles.fadeOut}`}
                    style={{ opacity: index === currentImageIndex ? 1 : 0, position: "absolute" }}
                    />
            ))}
            </div>
            <div className={styles.imageIndicators}>
                {escapeRoom.images.map((_, index) => (
                    <span 
                        key={index} 
                        className={`${styles.indicator} ${index <= currentImageIndex ? styles.active : ''}`} 
                    />
                ))}
            </div>
            <div className={styles.tags}>
            {escapeRoom.tags.map((tag, index) => (
                <span key={index} className={styles.tag}>
                {tag}
                </span>
            ))}
            </div>
            <p className={styles.description}>{escapeRoom.description}</p>
            <div className={styles.want_take_peek_inside}>
                <div>?רוצים להציץ פנימה</div>
                <button onClick={handle_want_take_peek_inside}>לחצו כאן לפתיחת המשימה הראשונה</button>
            </div>
            <div className={styles.price}>מחיר: {escapeRoom.price} (המחיר לקבוצה של 30 ילדים. יכול להשתנות בהתאם לגודל הקבומה)</div>
            <button className={styles.order_now_button} onClick={handle_control_room_model}>הזמינו עכשיו!</button>
            {isRoomOrdering && <RoomOrdering roomName={escapeRoom.name} handle_close_roomOrdering={handle_control_room_model}/>}
        </div>
      );
}

export default RoomModel;