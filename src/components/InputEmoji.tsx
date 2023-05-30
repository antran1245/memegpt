import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane, faFaceSmile } from "@fortawesome/free-regular-svg-icons"
import styles from '@/styles/intro.module.css'

interface InputEmojiProps {
    onInput: () => void
}

export default function InputEmoji( { onInput } : InputEmojiProps ) {
    return(
        <div className={styles.inputBox}>
            <input type="text" placeholder="Input Emoji"/>
            <div className={styles.iconBox}>
                <div className={styles.popupIconBox}>
                    <div className={styles.popupIcon}>hi</div>
                    <div className={styles.popupTriangle}></div>
                </div>
                <FontAwesomeIcon icon={faFaceSmile} />
                <FontAwesomeIcon icon={faPaperPlane} onClick={onInput}/>
            </div>
        </div>
    )
}