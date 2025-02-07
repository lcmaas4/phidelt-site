import React from "react";

const Header: React.FC = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>My Awesome Website</h1>
      <nav>
        <ul style={styles.navList}>
          <li><a href="/" style={styles.navLink}>Home</a></li>
          <li><a href="/about" style={styles.navLink}>About</a></li>
          <li><a href="/contact" style={styles.navLink}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: "#333",
    color: "white",
    padding: "15px",
    textAlign: "center" as const,
  },
  title: {
    margin: "0",
  },
  navList: {
    listStyle: "none",
    padding: "0",
    display: "flex",
    justifyContent: "center",
    gap: "15px",
  },
  navLink: {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
  },
};

export default Header;
