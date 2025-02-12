'use client';
import styles from './first-task.module.css';
import { useState, useEffect } from 'react';
// import { useParams } from 'next/navigation';
import { FirstTask_ad_shenimtza, FirstTask_aron_habrit, FirstTask_beikvot_hatmarim, FirstTask_hamerotz_el_hashemen, FirstTask_shmita } from '@/components';
import { MdAdsClick } from "react-icons/md";

const FirstTaskPage = ({ params }: { params: { room : string}}) => {
  const [isStartTask, setIsStartTask] = useState<boolean>(false);

  // const params = useParams();
    return (
        <div className={styles.FirstTask}>
          <h1>לחצו על סימן המטרה לפתיחת המשימה הראשונה:</h1>
          <h1>{params.room}</h1>
          <img className={styles.image} src={`/images/shimshonits/${params.room}.jpg`} alt="תמונה לא נתמכת" />
          <MdAdsClick onClick={() => setIsStartTask(true)} className={styles.MdAdsClick} size={30}/>
          
          {isStartTask && 
            (params.room === 'aron-habrit' ? <FirstTask_aron_habrit /> : 
            params.room === 'ad-shenimtza' ? <FirstTask_ad_shenimtza /> : 
            params.room === 'beikvot-hatmarim' ? <FirstTask_beikvot_hatmarim /> :
            params.room === 'hamerotz-el-hashemen' ? <FirstTask_hamerotz_el_hashemen /> :  
            params.room === 'shmita' ? <FirstTask_shmita /> : 
            null) 
          }

        </div>
      );
};

export default FirstTaskPage;
