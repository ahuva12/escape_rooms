"use client";
import styles from './Header.module.css';
import Link from "next/link";

function Header() {
    return (
        <>
            <nav className={styles.nav}>
                <Link className={styles.link} href="/home">לעמוד הבית</Link>
                <Link className={styles.link} href="/rooms">חדרי הבריחה שלנו</Link>
                <Link className={styles.link} href="/about">אודות</Link>
                <Link className={styles.link} href="/parasha-riddles">חידות לפרשת השבוע</Link>
                <Link className={styles.link} href="contact">צור קשר</Link>
            </nav>
        </>
      );
}

export default Header;