import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mmathuso Kgalane</title>
        <meta name="description" content="mmathuso kgalane" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div class = "topnav">
        <a href='/' class="active">Home</a>
        <a href='/about'>About</a>
        <a href='/contact'>Contact</a>
      </div>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Mmathusos' Portfolio
        </h1>

        <p className={styles.description}>
          Get started by{' '}
          <code className={styles.code}>knowing me better and why you here!!</code>
        </p>

        <p><img src='115-MmathusoKgalane.jpg' width={150} height="150"/></p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
