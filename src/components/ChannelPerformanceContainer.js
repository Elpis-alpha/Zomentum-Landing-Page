import styles from "./ChannelPerformanceContainer.module.css";

const ChannelPerformanceContainer = () => {
  return (
    <div className={styles.channelProgramRight}>
      <img
        className={styles.becomeTheVendorEveryoneWan}
        alt=""
        src="../become-the-vendor-everyone-wants-to-buy-from1.svg"
      />
      <div className={styles.trackYourChannelPerformanceParent}>
        <b className={styles.trackYourChannel}>
          Track your channel performance
        </b>
        <div className={styles.monitorTheHealth}>
          Monitor the health and revenue of your channel program and streamline
          your campaign to win more customers within Zomentum.
        </div>
        <button className={styles.signupNowParent}>
          <div className={styles.signupNow}>Signup now</div>
          <img
            className={styles.rightMenuArrow}
            alt=""
            src="../right-menu-arrow3.svg"
          />
        </button>
      </div>
    </div>
  );
};

export default ChannelPerformanceContainer;
