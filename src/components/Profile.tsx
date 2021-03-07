import styles from '../styles/components/Profile.module.css'

export function Profile(){
    return(
        <div className={styles.profileContainer}>
            <img src="https://media-exp1.licdn.com/dms/image/C4D03AQEcwa9n45ZJ-Q/profile-displayphoto-shrink_100_100/0/1590810738364?e=1620864000&v=beta&t=q-AywcsquN-OfJl2ltoMjL2fHlwk8HtJen_vYyDtSMI" alt=" Márcia Santos" />
            <div>
                <strong> Márcia Santos</strong>
                <p>
                    <img src="icons/level.webp" alt="level"/>
                    Level 1
                </p>
            </div>
        </div>
    )
}