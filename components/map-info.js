import styles from '../styles/mapInfo.module.scss'

const MapInfo = props => {
    return (
        <section className={styles.mapInfo}>
            <img src="pictures/NAMap.gif" alt="North America Map" id="naMap" />
            <img src="pictures/EurasiaMap.gif" alt="North America Map" id="naMap" />
            <div className={styles.info}>The Kp index lets you know the chance of seeing an aurora. The higher the Kp the greater the chance. These maps are an estimate on where an aurora is visible based on the Kp index. Find your location on the map to figure out how high the Kp index needs to be to see it in your location.</div>
        </section>
    )
}

export default MapInfo