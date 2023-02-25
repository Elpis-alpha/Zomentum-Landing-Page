import styles from "./ProductFooter.module.css";

const ProductFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.frameParent}>
        <div className={styles.productParent}>
          <b className={styles.product}>Product</b>
          <div className={styles.featuresParent}>
            <div className={styles.features}>Features</div>
            <div className={styles.features}>Pricing</div>
            <div className={styles.features}>Integrations</div>
            <div className={styles.features}>Product</div>
          </div>
        </div>
        <div className={styles.productParent}>
          <b className={styles.product}>Company</b>
          <div className={styles.featuresParent}>
            <div className={styles.features}>About us</div>
            <div className={styles.features}>Contact us</div>
            <div className={styles.features}>Submit a ticket</div>
            <div className={styles.features}>Privacy policy</div>
            <div className={styles.features}>{`Terms & conditions`}</div>
          </div>
        </div>
        <div className={styles.productParent}>
          <b className={styles.product}>Users</b>
          <div className={styles.featuresParent}>
            <div className={styles.features}>Login</div>
            <div className={styles.features}>Get a demo</div>
            <div className={styles.features}>Talk to us</div>
            <div className={styles.features}>Privacy policy</div>
            <div className={styles.features}>{`Terms & conditions`}</div>
          </div>
        </div>
        <div className={styles.productParent}>
          <b className={styles.product}>Guides</b>
          <div className={styles.featuresParent}>
            <div className={styles.features}>MSP</div>
            <div className={styles.features}>MSP Sales</div>
          </div>
        </div>
        <div className={styles.productParent}>
          <b className={styles.product}>Contact Us</b>
          <div className={styles.addressWrapper}>
            <div className={styles.features}>Address</div>
          </div>
        </div>
      </div>
      <div className={styles.pactoraIncAllRightsReservParent}>
        <div className={styles.pactoraIncAll}>
          © 2020 Pactora Inc. All rights reserved.
        </div>
        <div className={styles.pactoraIncAll}>Follow us on social</div>
      </div>
    </footer>
  );
};

export default ProductFooter;
