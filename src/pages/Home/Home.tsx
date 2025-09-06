import { useEffect, useRef } from "react";
import Navbar from "../../components/Navbar";
import styles from "./Home.module.css";
const Home = () => {
  const mainRef = useRef(null);

  return (
    <main ref={mainRef} className={styles.main}>
      <div className={styles.bgSlide}></div>
      <div className={styles.bgSlide}></div>
      <div className={styles.bgSlide}></div>

      <div className={styles.overlay}>
        <Navbar mainRef={mainRef} />
      </div>
    </main>
  );
};

export default Home;
