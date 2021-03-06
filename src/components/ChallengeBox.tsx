import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'

import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox(){
    const {activeChallenge, resetChallenge} = useContext(ChallengesContext)

    return(
        <div className={styles.challengeBoxContainer}>
            { activeChallenge ?( 
            <div className={styles.challengeActive}>
                <header>Ganhe {activeChallenge.amount} xp</header>
                <main>
                    <img src="icons/favicon.png" alt=""/>
                    <strong>Novo desafio</strong>
                    <p>{activeChallenge.description}</p>
                </main>
                <footer>
                    <button 
                        type="button" 
                        className={styles.challengeFailedButton}
                        onClick={resetChallenge}
                        >
                            Falhei
                        </button>

                    <button 
                        type="button" 
                        className={styles.challengeSucceeedButton}
                        >
                            Completei
                        </button>
                </footer>

            </div>
            ) : (
                
                <div className={styles.challengeBoxNotActive}>
                    <strong> Finalize um ciclo para receber um desafio </strong>
                    <p>
                        <img src="icons/levelUp.png" alt="Level up"/>
                        Avance de level completando desafios.
                    </p>
                </div>
            )}
            
        </div>
    )
}