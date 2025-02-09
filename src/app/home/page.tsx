'use client';
import styles from './home.module.css';
import { RoomModel } from '@/components/index';
import { useState } from 'react';
import { EscapeRoom } from '../../types/EscapeRoom';
import { get_escape_room_details } from '../../services/escapeRoomsUtils';

function Home() {
  const [selectedRoom, setSelectedRoom] = useState<EscapeRoom | null>(null);
  const handle_want_take_peek_inside = () => {
    console.log('handle_want_take_peek_inside');
  }

  const handle_want_see_more = (roomName:string) : void => {
    try {
      const escape_room = get_escape_room_details(roomName);
      setSelectedRoom(escape_room);
    } catch(error) {
      console.log(error)
    }
  };

  const handle_close_room_model = () => {
    setSelectedRoom(null);
  };
  
  // const handleMouseEnter = (event: React.MouseEvent<HTMLVideoElement>) => {
  //   const videoElement = event.currentTarget; 
  //   videoElement.play();
  // };

  // const handleMouseLeave = (event: React.MouseEvent<HTMLVideoElement>) => {
  //   const videoElement = event.currentTarget; 
  //   videoElement.pause();
  //   videoElement.currentTime = 0; 
  // }


    return (
      <div className={styles.home}>
        <div className={styles.header}>
          <h1>חדרי בריחה</h1>
          <h2>לאורך הזמן ומעגל השנה</h2>
          <h3>...החוויה שלכם מתחילה כאן</h3>
        </div>

        <video src="/images/video_home.mp4" width="640" height="360" 
          controls
          autoPlay
          muted 
          loop 
          // onMouseEnter={handleMouseEnter}
          // onMouseLeave={handleMouseLeave}
          >
        </video> 
        <div className={styles.general_expaltion}>הסבר כללי הסבר כלליהסבר כלליהסבר כלליהסבר כלליהסבר כלליהסבר כלליהסבר כלליהסבר כלליהסבר כלליהסבר כלליהסבר כלליהסבר כללי 
        הסבר כללי הסבר כלליהסבר כלליהסבר כלליהסבר כלליהסבר כלליהסבר כ
          לליהסבר כלליהסבר כלליהסבר כלליהסבר כלליהסבר כלליהסבר כללי</div>
          <div className={styles.want_see_more}>רוצים לראות עוד?</div>
          <div className={styles.container_images_escape_rooms}>
            <img className={styles.image_escape_rooms} src="/images/escape_room.png" alt="תמונה לא נתמכת" onClick={()=>handle_want_see_more('aron-habrit')}/>
            <img className={styles.image_escape_rooms} src="/images/escape_room.png" alt="תמונה לא נתמכת" onClick={()=>handle_want_see_more('ad-shenimza')}/>
            <img className={styles.image_escape_rooms} src="/images/escape_room.png" alt="תמונה לא נתמכת" onClick={()=>handle_want_see_more('hamerozt-el-hashemen')}/>
            <img className={styles.image_escape_rooms} src="/images/escape_room.png" alt="תמונה לא נתמכת" onClick={()=>handle_want_see_more('beikvot-hatmarim')}/>
            <img className={styles.image_escape_rooms} src="/images/escape_room.png" alt="תמונה לא נתמכת" onClick={()=>handle_want_see_more('shmita')}/>
          </div>
          {selectedRoom && <RoomModel escapeRoom={selectedRoom} 
                                      handle_want_take_peek_inside={handle_want_take_peek_inside}
                                      handle_close_room_model={handle_close_room_model}/>}
      </div>
      );
}

export default Home;