import { useCallback } from "react";
import styles from "./PartnerFinderContainer.module.css";

const PartnerFinderContainer = () => {
  const onRegisterButtonClick = useCallback(() => {
    window.open("http://elpis.cc/");
  }, []);

  return (
    <div className={styles.hero}>
      <img className={styles.rectangleIcon} alt="" src="../rectangle.svg" />
      <div className={styles.heroImages}>
        <img
          className={styles.partnerHeroImageLeft2x}
          alt=""
          src="../partner-hero-image-left2x@2x.png"
        />
        <img
          className={styles.partnerHeroImageRight2x}
          alt=""
          src="../partner-hero-image-right2x@2x.png"
        />
      </div>
      <div className={styles.heroTextParent}>
        <div className={styles.heroText}>
          <b className={styles.findTheRight}>
            Find the right partners to fuel your business growth
          </b>
          <div className={styles.joinAVibrant}>
            Join a vibrant community of MSPs to forge long-lasting relationships
            with partners that help you create excellent customer experiences
          </div>
        </div>
        <button
          className={styles.registerButton}
          onClick={onRegisterButtonClick}
        >
          <b className={styles.registerToday}>Register today</b>
        </button>
      </div>
    </div>
  );
};

export default PartnerFinderContainer;
