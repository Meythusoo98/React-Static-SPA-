import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function About() {
  return (
    <div className={styles.container}>

      <div class = "topnav">
        <a href='/'>Home</a>
        <a href='/' class="active">About</a>
      </div>
      <main className={styles.main}>
        <h1 className={styles.title}>
            More about Mmathuso
        </h1>
        <div className={styles.grid}>
          <a href="" className={styles.card}>
          <div class="logo">
            <img src='myFirstLove.jpg' width={80} height="80"/>
            </div>
            <h2>Conference Lover &rarr;</h2>
            <p>I am a lover of conference attending. Recently went to NodeJsOne and I code Java. They 
                are my go to fun times, and to see which technology do I need to learn. I unwind there.
            </p>
          </a>
          <a href="" className={styles.card}>
            <div class="logo">
                <img src='hackerthon.jpg' width={80} height="80"/>
            </div>
            <h2>Hackathons &rarr;</h2>
            <p>Hey!! I first developed passion at a hackathon, little did I know I would want to see myself
                running after this career like a headless chicken. I love meeting new souls, learning what
                people and where they all come from.
            </p>
          </a>

          <a href="" className={styles.card}>
          <div class="logo">
            <img src='proudWTC.jpg' width={80} height="80"/>
            </div>
            <h2>Proud WeThinkCoder &rarr;</h2>
            <p>Joining WTC was the best decision for my career and my life. I love every experience from
                that place, had many fun times, well learning too was a journey.
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
