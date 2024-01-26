'use client' 
import Image from 'next/image';
import styles from './page.module.css';
import Projects from './components/Projects';
import Marquee from './components/Marquee';

export default function Home() {

  return (
    <main>
    <section className={styles.hero}>
      <Image src="/images/background.jpg" fill={true} alt="background" />
      <Marquee />
    </section>
      <section>
        <Projects />
      </section>
    </main>
  )
}