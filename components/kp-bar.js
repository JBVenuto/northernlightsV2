import styles from '../styles/kpBar.module.scss'

const KpBar = props => {
    return (
        <section className={styles.kpBar}>
            {props.kp.map(kpTime => 
                <div>
                    <p>{kpTime[0]}</p>
                    <span className={`kp_${kpTime[1]}`}>{kpTime[1]}</span>
                </div>
            )} 
        </section>
    )
}

export default KpBar;