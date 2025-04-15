import styles from "./Home.module.css";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import VideoGrid from "../components/VideoGrid";
import { useEffect } from "react";

function Home() {
    useEffect(() => {
        document.title = "VidPlayer";
      }, []);  
    return (
        <div className={styles.homeContainer}>
        <Header />
        <div className={styles.contentContainer}>
            <Sidebar />
            <VideoGrid />
        </div>
        </div>
    );
}

export default Home;
