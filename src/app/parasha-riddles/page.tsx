'use client';
import styles from './parashaRiddles.module.css';
import { useState, useEffect } from 'react';
import { ParashaRiddleCard } from '@/components';
import { Parashot } from '@/services/parasha/parashaUtil';
import { getCurrentParasha } from '@/services/parasha/parasha';

const ParashaRiddles = () => {
  let currentParasha='parasha';
  useEffect(() => {
    const setCurrentParasha = async () => {
      try {
        const res = await getCurrentParasha();
        currentParasha = res.parasha;
        console.log(currentParasha)
      } catch(error) {
        console.log(error)
      }
    }
    setCurrentParasha();

  }, []);

  return (
    <div className={styles.ParashaRiddles}>
      <h1 className={styles.title}>חידות לפרשת השבוע</h1>
      <h2 className={styles.second_title}>מומלץ להדפיס ולשאול את הילדים בסעודת השבת</h2>
      <div className={styles.parashaRiddleCards_container}>
        <ParashaRiddleCard parasha={Parashot[0]}/>
      </div>
    </div>
    );
}

export default ParashaRiddles;