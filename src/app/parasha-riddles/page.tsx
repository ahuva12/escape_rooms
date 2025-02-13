'use client';
import styles from './parashaRiddles.module.css';
import { useState, useEffect } from 'react';
import { ParashaRiddleCard } from '@/components';
import { Parashot } from '@/services/parasha/parashaUtil';
import { getCurrentParasha } from '@/services/parasha/parasha';

const ParashaRiddles = () => {
  const [currentParashaIndex, setCurrentParashaIndex] = useState<number| null>(null);

  useEffect(() => {
    const setCurrentParasha = async () => {
      try {
        const res = await getCurrentParasha();
        const index = Parashot.findIndex(parasha => parasha.name === res.parasha);
        setCurrentParashaIndex(index); 
      } catch(error) {
        console.log(error);
      }
    };
    setCurrentParasha();
  }, []); 

  if (currentParashaIndex === null) {
    return <div>Loading...</div>;
  }

  const rotatedParashot = [
    ...Parashot.slice(currentParashaIndex),
    ...Parashot.slice(0, currentParashaIndex)
  ];

  return (
    <div className={styles.ParashaRiddles}>
      <h1 className={styles.title}>חידות לפרשת השבוע</h1>
      <h2 className={styles.second_title}>מומלץ להדפיס ולשאול את הילדים בסעודת השבת</h2>
      <div className={styles.parashaRiddleCards_container}>
        {rotatedParashot.map(parasha => (
          <div onClick={()=> window.open(parasha.riddle, "_blank")}>חידה לפרשת {parasha.hebrewName}</div>
          // <ParashaRiddleCard key={parasha.name} parasha={parasha} />
        ))}
      </div>
    </div>
  );
};

export default ParashaRiddles;
