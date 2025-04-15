import styles from "./Header.module.css";
import logo from "../assets/images/mylogo.png"; // Ścieżka do pliku logo
import { FaUserCircle } from "react-icons/fa"; // Ikona profilu

function Header() {
  return (
    <header className={styles.header}>
      {/* Logo */}
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo" className={styles.logo} />
      </div>
      
      {/* Pole wyszukiwania */}
      <div className={styles.searchContainer}>
        <input type="text" placeholder="Szukaj..." className={styles.searchInput} />
      </div>
      
      {/* Ikona profilu */}
      <div className={styles.profileIcon}>
        <FaUserCircle size={30} className={styles.icon} />
      </div>
    </header>
  );
}

export default Header;
