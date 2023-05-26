import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons"
import styles from '@/styles/intro.module.css'

interface InputEmojiProps {
    onInput: () => void
}

export default function InputEmoji( { onInput } : InputEmojiProps ) {
    return(
        <div className={styles.inputBox}>
            <input type="text" placeholder="Input Emoji"/>
            <FontAwesomeIcon icon={faPaperPlane} onClick={onInput}/>
        </div>
    )
}