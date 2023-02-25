import styles from "./VendorProgramContainer.module.css";

const VendorProgramContainer = () => {
  return (
    <div className={styles.channelProgramRight}>
      <img
        className={styles.becomeTheVendorEveryoneWan}
        alt=""
        src="../become-the-vendor-everyone-wants-to-buy-from.svg"
      />
      <div className={styles.itsLikeHavingYourBestSalParent}>
        <b className={styles.itsLikeHavingContainer}>
          <p className={styles.becomeTheVendor}>Become the vendor</p>
          <p className={styles.everyoneWantsTo}>everyone wants to buy from</p>
        </b>
        <div className={styles.shareCollateralsAnd}>
          Gain brand authority and visibility with the help of the largest IT
          service ecosystem. Find customers who are looking for your solution
          right now!
        </div>
        <button className={styles.signupNowParent}>
          <div className={styles.signupNow}>Signup now</div>
          <img
            className={styles.rightMenuArrow}
            alt=""
            src="../right-menu-arrow1.svg"
          />
        </button>
      </div>
    </div>
  );
};

export default VendorProgramContainer;
