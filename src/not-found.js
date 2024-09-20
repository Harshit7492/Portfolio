"use client"

import { useRouter } from 'next/navigation';
import styles from './404.module.css';

const NotFound = () => {
    const router = useRouter();

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>404</h1>
            <p className={styles.message}>Oops! The page you’re looking for doesn’t exist.</p>
            <button className={styles.button} onClick={() => router.push('/')}>
                Return to Home
            </button>
        </div>
    );
};

export default NotFound;