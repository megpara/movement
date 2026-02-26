import Head from "next/head";
import styles from "../styles/Layout.module.css";
import { useEffect, useState } from "react";

export default function Layout({ children }) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)");
    setIsDesktop(mediaQuery.matches);

    const handleChange = (e) => setIsDesktop(e.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const cursor = document.getElementById('custom-cursor')
    if (!cursor) return
    
    cursor.style.opacity = "0";

    const move = (e) => {
      cursor.style.transform = `translate(${e.clientX + 15}px, ${e.clientY + 15}px)`
      cursor.style.opacity = '1'
    }

    const handleLeave = (e) => {
      // Only trigger when actually leaving the window
      if (!e.relatedTarget && !e.toElement) {
        cursor.style.opacity = '0'
      }
    }

    window.addEventListener('mousemove', move)
    document.addEventListener('mouseout', handleLeave)

    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseout', handleLeave)
    }
  }, [isDesktop])
  return (
    <div className={styles.main}>
      <Head>
        <title>Megan Paradowski | Choreographer and Movement Director in Los Angeles</title>
        <meta
          name="description"
          content="Los Angeles based choreographer and movement director"
        />
        <meta property="og:title" content="Megan Paradowski | Choreographer and Movement Director in Los Angeles" key="ogtitle" />
        <meta
          property="og:description"
          content="Founder and Director of Contemporary Dance Company Empara"
          key="ogdesc"
        />
        <meta property="og:image" content="/meg/DSC_7371.jpg" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div id="custom-cursor" className="pointer-events-none fixed w-6 h-6 bg-[url('/cursor.png')] bg-contain bg-no-repeat z-50"></div>
      {children}
    </div>
  );
}
