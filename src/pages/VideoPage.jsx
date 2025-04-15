import styles from "./VideoPage.module.css";
import { useParams } from "react-router-dom";

function VideoPage() {
  const { id } = useParams(); // Pobiera ID wideo z URL-a

  return (
    <div className={styles.videoPage}>
      {/* Odtwarzacz wideo */}
      <div className={styles.videoContainer}>
        <video controls className={styles.videoPlayer}>
          <source src={`/videos/${id}.mp4`} type="video/mp4" />
          Twoja przeglądarka nie obsługuje tagu wideo.
        </video>
      </div>
      
      {/* Informacje o wideo */}
      <div className={styles.videoDetails}>
        <h1>Tytuł filmu</h1>
        <p>Opis filmu...</p>
      </div>
    </div>
  );
}

export default VideoPage;