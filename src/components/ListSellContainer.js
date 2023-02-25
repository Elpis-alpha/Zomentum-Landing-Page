import styles from "./ListSellContainer.module.css";

const ListSellContainer = () => {
  return (
    <div className={styles.listSellGrow}>
      <div className={styles.listSellGrowParent}>
        <div className={styles.listSellGrow1}>List. Sell. Grow</div>
        <div className={styles.frameParent}>
          <div className={styles.allInOnePlatformParent}>
            <img
              className={styles.allInOnePlatform}
              alt=""
              src="../all-in-one-platform.svg"
            />
            <div
              className={styles.beAPart}
            >{`Be a part of the only  All-In-One platform for IT services `}</div>
          </div>
          <div className={styles.allInOnePlatformParent}>
            <img
              className={styles.allInOnePlatform}
              alt=""
              src="../find-your-next-customer.svg"
            />
            <div className={styles.comeCloserTo}>
              Come closer to finding your next customer
            </div>
          </div>
          <div className={styles.allInOnePlatformParent}>
            <img
              className={styles.allInOnePlatform}
              alt=""
              src="../grow-your-business.svg"
            />
            <div className={styles.growYourBusiness1}>
              Grow your business with a single click
            </div>
          </div>
        </div>
      </div>
      <img className={styles.frameIcon} alt="" src="../frame.svg" />
      <img className={styles.frameIcon1} alt="" src="../frame1.svg" />
    </div>
  );
};

export default ListSellContainer;
