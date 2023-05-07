import styles from '@/styles/intro.module.css'
import InputEmoji from './InputEmoji'

export default function Intro() {
    return(
        <div className="flex flex-col items-center flex-auto justify-between">
            <div className="flex flex-col items-center mt-[183px]">
                <h1 className="text-[48px] font-semibold">MemeGPT</h1>
                <div className="flex justify-evenly">
                    <div className="w-[30%] text-center">
                        <span className={styles.icon}>&#x1F389;</span>
                        <p className={styles.caption}>Examples</p>
                        <p className={styles.textBox}>Input as many emojis that you want and it will generate a meme for you</p>
                    </div>
                    <div className="w-[30%] text-center">
                        <span className={styles.icon}>&#128170;</span>
                        <p className={styles.caption}>Capabilities</p>
                        <p className={styles.textBox}>Generate meme from emojis</p>
                    </div>
                    <div className="w-[30%] text-center">
                        <span className={styles.icon}>&#x1F913;</span>
                        <p className={styles.caption}>Limitations</p>
                        <p className={styles.textBox}>Might create a not accurate meme.</p>
                    </div>
                </div>
            </div>
            <InputEmoji/>
        </div>
    )
}