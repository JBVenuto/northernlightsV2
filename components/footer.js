import styles from "../styles/footer.module.scss";

const Footer = (props) => {
  return (
    <section className={styles.footer}>
      <div>
        <p>Additional information:</p>
        <a
          href="https://www.mtu.edu/tour/copper-country/northern-lights/"
          target="_blank"
        >
          Michigan Tech's guide to auroras
        </a>
        <br></br>
        <a href="https://www.swpc.noaa.gov/about-space-weather" target="_blank">
          NOAA: About Space Weather
        </a>
        <br></br>
        <a href="https://josephvenuto.com" target="_blank">
          About this site's creator
        </a>
      </div>
    </section>
  );
};

export default Footer;
