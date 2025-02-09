"use client";
import { useState } from "react";
import styles from './Footer.module.css';
import { Contact } from '../index';

function Footer() {
  const [isContact, setIsContact] = useState<boolean>(false);

    return (
        <div className={styles.footer}>
          <p>hannagoldm@gmail.com#0545409506#חנה גולדמינץ</p>
          <button onClick={() => setIsContact(true)}>ליצירת קשר</button>
          {isContact && <Contact/>}
        </div>
      );
}

export default Footer;