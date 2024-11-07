// src/pages/index.tsx
import Link from 'next/link';
import styles from './page.module.css';
import Image from 'next/image';

const Home = () => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Image
                    src="/logo.png"
                    alt="Logo"
                    width={150}
                    height={150}
                    className={styles.logo}
                />
                <h1 className={styles.title}>Bienvenue sur Mon Application Next.js avec TypeScript!</h1>
                <p className={styles.description}>
                    Découvrez les merveilles du développement web moderne avec Next.js.
                </p>
            </header>

            <main className={styles.main}>
                <div className={styles.cardContainer}>
                    <div className={styles.card}>
                        <h2>À propos &rarr;</h2>
                        <p>Apprenez-en plus sur ce projet et sur l équipe derrière.</p>
                        <Link href="/about">
                            <div className={styles.link}>En savoir plus</div>
                        </Link>
                    </div>

                    <div className={styles.card}>
                        <h2>Documentation &rarr;</h2>
                        <p>Trouvez de la documentation sur Next.js pour améliorer vos compétences.</p>
                        <a href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer" className={styles.link}>
                            Lire la documentation
                        </a>
                    </div>

                    <div className={styles.card}>
                        <h2>API &rarr;</h2>
                        <p>Essayez notre API simple intégrée dans l application Next.js.</p>
                        <Link href="/api/hello">
                            <div className={styles.link}>Tester l API</div>
                        </Link>
                    </div>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>Créé avec 💙 par l équipe Next.js.</p>
            </footer>
        </div>
    );
};

export default Home;
