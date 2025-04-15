import styles from "./Sidebar.module.css";
import { FaHome, FaFire, FaFolder, FaPlayCircle } from "react-icons/fa";

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <nav className={styles.nav}>
        <ul>
          <li className={styles.navItem}><FaHome /> Strona główna</li>
          <li className={styles.navItem}><FaFire /> Popularne</li>
          <li className={styles.navItem}><FaPlayCircle /> Subskrypcje</li>
          <li className={styles.navItem}><FaFolder /> Biblioteka</li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;