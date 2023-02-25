import styles from "./MediaNav.module.css";

const MediaNav = ({ onClose }) => {
  return (
    <div className={styles.mediaNav}>
      <div className={styles.headerIconParent}>
        <img className={styles.headerIcon} alt="" src="../headericon.svg" />
        <div className={styles.features}>Features</div>
        <div className={styles.features}>Integrations</div>
        <div className={styles.features}>Pricing</div>
        <div className={styles.features}>Company</div>
        <div className={styles.features}>Blog</div>
        <div className={styles.features}>Login</div>
        <div className={styles.getADemo}>Get a demo</div>
      </div>
    </div>
  );
};

export default MediaNav;
