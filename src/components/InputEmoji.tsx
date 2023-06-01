import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane, faFaceSmile } from "@fortawesome/free-regular-svg-icons"
import styles from '@/styles/intro.module.css'
import { useEffect, useState } from "react"

interface InputEmojiProps {
    onInput: () => void
}

export default function InputEmoji( { onInput } : InputEmojiProps ) {
    const [emoji, setEmoji] = useState<string[] | null>(null)
    useEffect(() => {
        fetch('/api/emojiDataset')
        .then(resp => resp.json())
        .then(data => {
            setEmoji([...data.dataset])
        })
        .catch(err => console.log(err))
    }, [])
    return(
        <div className={styles.inputBox}>
            <input type="text" placeholder="Input Emoji"/>
            <div className={styles.iconBox}>
                <div className={styles.popupIconBox}>
                    <div className={styles.popupIcon}>{emoji? emoji[0] : ""}</div>
                    <div className={styles.popupTriangle}></div>
                </div>
                <FontAwesomeIcon icon={faFaceSmile} />
                <FontAwesomeIcon icon={faPaperPlane} onClick={onInput}/>
            </div>
        </div>
    )
}