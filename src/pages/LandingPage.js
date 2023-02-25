import Header from "../components/Header";
import PartnerFinderContainer from "../components/PartnerFinderContainer";
import ListSellContainer from "../components/ListSellContainer";
import VendorProgramContainer from "../components/VendorProgramContainer";
import ChannelPerformanceContainer from "../components/ChannelPerformanceContainer";
import ProductFooter from "../components/ProductFooter";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className={styles.landingPage}>
      <Header />
      <PartnerFinderContainer />
      <ListSellContainer />
      <div className={styles.becomeWorker}>
        <div className={styles.yourChannelProgramOnSteroiParent}>
          <b className={styles.yourChannelProgramContainer}>
            <p
              className={styles.yourChannelProgram}
            >{`Your channel program `}</p>
            <p className={styles.onSteroids}>on steroids</p>
          </b>
          <div className={styles.tiredOfFinding}>
            Tired of finding MSPs that can help you boost your channel sales?
            You’re in luck, because they’re all here.
          </div>
          <button className={styles.signupNowParent}>
            <div className={styles.signupNow}>Signup now</div>
            <img
              className={styles.rightMenuArrow}
              alt=""
              src="../right-menu-arrow.svg"
            />
          </button>
        </div>
        <img
          className={styles.yourChannelProgramOnStero}
          alt=""
          src="../your-channel-program--on-steroids@2x.png"
        />
      </div>
      <VendorProgramContainer />
      <div className={styles.becomeWorker}>
        <div className={styles.yourChannelProgramOnSteroiParent}>
          <b className={styles.yourChannelProgramContainer}>
            <p className={styles.yourChannelProgram}>
              It’s like having Your best
            </p>
            <p className={styles.onSteroids}>Salesman on autopilot</p>
          </b>
          <div className={styles.tiredOfFinding}>
            Share collaterals and documents that are automatically branded.
            Leverage a rich partner network that sells your solution exactly the
            way your best salesman would.
          </div>
          <button className={styles.signupNowParent}>
            <div className={styles.signupNow}>Signup now</div>
            <img
              className={styles.rightMenuArrow}
              alt=""
              src="../right-menu-arrow2.svg"
            />
          </button>
        </div>
        <img
          className={styles.itsLikeHavingYourBestSal}
          alt=""
          src="../its-like-having-your-best-salesman-on-autopilot.svg"
        />
      </div>
      <ChannelPerformanceContainer />
      <div className={styles.becomeWorker}>
        <div className={styles.yourChannelProgramOnSteroiParent}>
          <b className={styles.yourChannelProgramContainer}>
            <p
              className={styles.yourChannelProgram}
            >{`Get The best version of `}</p>
            <p className={styles.onSteroids}>Your sales playbook</p>
          </b>
          <div className={styles.tiredOfFinding}>
            Gather insights about top channel sellers and find out what pitch
            and collaterals ensure maximum profitability. Win happy customers
            with an optimized sales playbook.
          </div>
          <button className={styles.signupNowParent}>
            <button className={styles.signupNow2}>Signup now</button>
            <img
              className={styles.rightMenuArrow}
              alt=""
              src="../right-menu-arrow4.svg"
            />
          </button>
        </div>
        <img
          className={styles.getTheBestVersionOfYour}
          alt=""
          src="../get-the-best-version-of--your-sales-playbook.svg"
        />
      </div>
      <ProductFooter />
    </div>
  );
};

export default LandingPage;
