import styles from '../styles/hero.module.scss'

const Hero = props => {
    return (
        <section className='hero'>
            <div className={styles.recent_kp}>The last recorded Kp was {props.kp} at {props.time}</div>
            <div className={styles.jumbotron}>
                <p>find</p><p>your</p><p>lights</p>
            </div>
        </section>
    )
}

export default Hero