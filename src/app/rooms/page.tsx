'use client';
import styles from './rooms.module.css';
import { RoomCard, RoomModel } from '@/components/index';
import { useState } from 'react';
import { EscapeRoom } from '../../types/EscapeRoom';
import { get_escape_room_details } from '../../services/escapeRoomsUtils';

function Rooms() {

  const [selectedRoom, setSelectedRoom] = useState<null | EscapeRoom>(null)

  const handle_more_details = (roomName:string) : void => {
    try {
      const escape_room = get_escape_room_details(roomName);
      setSelectedRoom(escape_room);
    } catch(error) {
      console.log(error)
    }
  };

  const handle_want_take_peek_inside = () => {
    console.log('handle_want_take_peek_inside')
  }

  const handle_close_room_model = () => {
    setSelectedRoom(null);
  };

    return (
        <div className={styles.Rooms}>
          <h1 className={styles.title}>...תתחילו לארוז, אנחנו כבר ממריאים להרפתקה הבאה</h1>
          <a className={styles.contact_link} href="/contact">צור קשר</a>
          {selectedRoom && <RoomModel escapeRoom={selectedRoom}
                            handle_want_take_peek_inside={handle_want_take_peek_inside}
                            handle_close_room_model={handle_close_room_model}/>}

          <div className={styles.roomCards}>
            <RoomCard nameRoom='בעקבות ארון הברית'
                      imageRoom='/src/assets/images/57944_96ef002a-f45d-4eb5-9fd2-1a33ff32d330.jpg'
                      descriptionRoom='בואו איתנו להתחקות אחר ארון הברית האבוד'
                      handle_more_details={()=>handle_more_details('aron-habrit')}/>

            <RoomCard nameRoom='עד שנמצא אותו'
                      imageRoom='/src/assets/images/escape_room.png'
                      descriptionRoom='...כבר כמעט יוצאים ממצרים. אבל רגע, משהו אחד חסר'
                      handle_more_details={()=>handle_more_details('ad-shenimza')}/>

            <RoomCard nameRoom='המירוץ אל השמן'
                      imageRoom='/src/assets/images/maxresdefault.jpg'
                      descriptionRoom='עזרו לנו למצוא שמן טהור להדליק בו את המנורה'
                      handle_more_details={()=>handle_more_details('hamerozt-el-hashemen')}/>

            <RoomCard nameRoom='בעקבות התמרים האבודים'
                      imageRoom='/src/assets/images/escape-the-room.jpg'
                      descriptionRoom='אין כמו התמר לספר את סיפורה של הארץ הזאת'
                      handle_more_details={()=>handle_more_details('beikvot-hatmarim')}/>

            <RoomCard nameRoom='שמיטה - חדר בריחה וירטואלי'
                      imageRoom='/src/assets/images/maxresdefault.jpg'
                      descriptionRoom='בואו ללמוד ולגות דברים חדשים על מצוות השמיטה'
                      handle_more_details={()=>handle_more_details('shmita')}/>
          </div>
        </div>
      );
}

export default Rooms;

