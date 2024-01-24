import styles from "../styles/kpBar.module.scss";
import timeParse from "../lib/timeParse";

const KpBar = (props) => {
  const [date, time] = timeParse(props.kp[0]);

  return (
    <article className={styles.kpBar}>
      <p>
        {date[1]}/{date[2]} {time[0]}:{time[1]}
      </p>
      <div>
        <span className={`kp_${Math.round(props.kp[1])}`}>{props.kp[1]}</span>
      </div>
    </article>
  );
};

export default KpBar;
