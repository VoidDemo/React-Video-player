import styles from "./VideoGrid.module.css";
import { Link } from "react-router-dom";


function VideoGrid() {
  return (
    <section className={styles.videoGrid}>
      <p>Brak filmów do wyświetlenia</p>
      <Link to="/video/1">Zobacz przykładowe wideo</Link>
    </section>
  );
}

export default VideoGrid;