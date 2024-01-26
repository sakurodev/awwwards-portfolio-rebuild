'use client' 
import Image from 'next/image';
import styles from './page.module.css';
import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { projects } from './data';
import Projects from './components/Projects';
import Marquee from './components/Marquee';
import Modal from './components/Modal';

export default function Home() {

  const [modal, setModal] = useState({active: false, index: 0})

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