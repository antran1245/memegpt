import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane, faFaceSmile } from "@fortawesome/free-regular-svg-icons"
import styles from '@/styles/intro.module.css'
import { useEffect, useState } from "react"

interface InputEmojiProps {
    onInput: () => void
}

export default function InputEmoji( { onInput } : InputEmojiProps ) {
    const [emoji, setEmoji] = useState<string[]>([])
    const [text, setText] = useState<string>("")
    useEffect(() => {
        fetch('/api/emojiDataset')
        .then(resp => resp.json())
        .then(data => {
            setEmoji([...data.dataset])
        })
        .catch(err => console.log(err))
    }, [])

    const addEmojiToText = (icon : string) => {
        setText(text+icon)
    }

    return(
        <div className={styles.inputBox}>
            <input type="text" placeholder="Input Emoji" value={text} onChange={(e) => setText(e.target.value)}/>
            <div className={styles.iconBox}>
                <div className={styles.popupIconBox}>
                    <div className={styles.popupIcon}>
                        {emoji.map((item : string, index: number) => {
                            return <span key={index} onClick={() => addEmojiToText(item)}>{item}</span>
                        })}
                    </div>
                    <div className={styles.popupTriangle}></div>
                </div>
                <FontAwesomeIcon icon={faFaceSmile} />
                <FontAwesomeIcon icon={faPaperPlane} onClick={onInput}/>
            </div>
        </div>
    )
}