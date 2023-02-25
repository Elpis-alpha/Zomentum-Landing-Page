import { useState, useCallback } from "react";
import MediaNav from "../components/MediaNav";
import PortalPopup from "../components/PortalPopup";
import styles from "./Header.module.css";

const Header = () => {
  const [isMediaNavPopupOpen, setMediaNavPopupOpen] = useState(false);

  const openMediaNavPopup = useCallback(() => {
    setMediaNavPopupOpen(true);
  }, []);

  const closeMediaNavPopup = useCallback(() => {
    setMediaNavPopupOpen(false);
  }, []);

  return (
    <>
      <div className={styles.topNav}>
        <img className={styles.headerIcon} alt="" src="../headericon1.svg" />
        <div className={styles.headerLinks}>
          <a
            className={styles.features}
            href="http://elpis.cc/"
            target="_blank"
          >
            <div className={styles.features1}>Features</div>
          </a>
          <a
            className={styles.features}
            href="http://elpis.cc/"
            target="_blank"
          >
            <div className={styles.features1}>Integrations</div>
          </a>
          <a
            className={styles.features}
            href="http://elpis.cc/"
            target="_blank"
          >
            <div className={styles.features1}>Pricing</div>
          </a>
          <a
            className={styles.features}
            href="http://elpis.cc/"
            target="_blank"
          >
            <div className={styles.features1}>Company</div>
          </a>
          <a
            className={styles.features}
            href="http://elpis.cc/"
            target="_blank"
          >
            <div className={styles.features1}>Blog</div>
          </a>
          <button className={styles.demoButton}>
            <div className={styles.getADemo}>Get a demo</div>
          </button>
          <a className={styles.login} href="https://elpis.cc/" target="_blank">
            <img
              className={styles.iconoutlineperson}
              alt=""
              src="../iconoutlineperson.svg"
            />
            <div className={styles.login1}>Login</div>
          </a>
          <button className={styles.navHam} onClick={openMediaNavPopup}>
            <img className={styles.vectorIcon} alt="" src="../vector.svg" />
          </button>
        </div>
      </div>
      {isMediaNavPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeMediaNavPopup}
        >
          <MediaNav onClose={closeMediaNavPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default Header;
