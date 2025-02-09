'use client';
import styles from './parashaRiddles.module.css';
import { ParashaRiddleCard } from '@/components';

function ParashaRiddles() {
    return (
      <div className={styles.ParashaRiddles}>
        <h1 className={styles.title}>חידות לפרשת השבוע</h1>
        <h2 className={styles.second_title}>מומלץ להדפיס ולשאול את הילדים בסעודת השבת</h2>
        <div className={styles.parashaRiddleCards_container}>
          <ParashaRiddleCard parashaName='בראשית'/>
          <ParashaRiddleCard parashaName='נח'/>
          <ParashaRiddleCard parashaName='לך-לך'/>
          <ParashaRiddleCard parashaName='וירא'/>
          <ParashaRiddleCard parashaName='חיי-שרה'/>
          <ParashaRiddleCard parashaName='תולדות'/>
          <ParashaRiddleCard parashaName='ויצא'/>
          <ParashaRiddleCard parashaName='וישלח'/>
          <ParashaRiddleCard parashaName='וישב'/>
          <ParashaRiddleCard parashaName='מקץ'/>
          <ParashaRiddleCard parashaName='ויגש'/>
          <ParashaRiddleCard parashaName='ויחי'/>
        </div>
      </div>
      );
}

export default ParashaRiddles;