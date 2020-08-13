import styles from '../styles/kpBar.module.scss'

const KpBar = props => {
    return (
        <section className={styles.kpBar}>
            {props.kp.map(kpTime => 
                <div>
                    {/* <div className={styles.kpBar_date}>{kpTime[0]}</div> */}
                    <p>{kpTime[0]}</p>
                    <span className={`kp_${kpTime[1]}`}>{kpTime[1]}</span>
                    {/* <li>{kpTime[1]} KP at {kpTime[0]}</li> */}
                </div>
            )} 
        </section>
    )
}

export default KpBar;