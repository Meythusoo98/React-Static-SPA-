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
      <div class="logo">
        <img src='115-MmathusoKgalane.jpg' width={80} height="80"/>
        </div>
        <a href='/' class="active">Home</a>
        <a href='/about'>About</a>
      </div>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Mmathusos' Insider.
        </h1>


        <div className={styles.grid}>
          <a href="" className={styles.card}>
            <h2>About Mmathuso &rarr;</h2>
            <p>My name is Mmathuso, a 26years old that refused to give up on her dreams, career and life. I am
              a very fussy, loud, crazy(they joke) and very inquisitive person. I wont say I am a hard worker,
              but I will say a smart worker. I learn good not fast because I forget, I love to challenge and push myself
              to see my potential. I BELIEVE I can achieve anything in my life.
            </p>
          </a>

          <a href="https://www.linkedin.com/in/mmathuso-kgalane-a08050121/" className={styles.card}>
            <h2>More about Mmathuso &rarr;</h2>
            <p>My education path was very tricky,so there is not much to it. I am a product of GirlCode and 
              WeThinkCode_, which I am super proud to be. Mostly I am a self taught female.
              My linkedIn account will tell you more details needed to be known about my career
              path and skills and my education where I started, where I am headed and hopefully
              the path I will undertake soon.
            </p>
          </a>


          <a href="https://github.com/Meythusoo98/Web-development" className={styles.card}>
            <h2>Why I want to be a developer at SovTech &rarr;</h2>
            <p>This is me overcoming my fear of thinking I was never good enough for any company. Because WeThinkCode_
              is giving me this big opportunity to express myself in everyway I can.
              I want to be a dev at SovTech reason being, it is a beautiful company, full of young people and culturally fit for someone who is growing.
              It gives opportunity to new adventures and I see the ability to career growth, learn more with the company
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
          Powered by{' '}
            <p>Mmathuso Kgalane.</p> 
      </footer>
    </div>
  )
}
