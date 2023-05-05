import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons"

export default function Intro() {
    return(
        <div className="flex flex-col items-center flex-auto">
            <div className="flex flex-col items-center">
                <h1>MemeGPT</h1>
                <div className="flex justify-center">
                    <div className="w-[30%] text-center">
                        <span>&#x1F389;</span>
                        <p>Examples</p>
                        <p className="">Input as many emojis that you want and it will generate a meme for you</p>
                    </div>
                    <div className="w-[30%] text-center">
                        <span>&#128170;</span>
                        <p>Capabilities</p>
                        <p className="">Generate meme from emojis</p>
                    </div>
                    <div className="w-[30%] text-center">
                        <span>&#x1F913;</span>
                        <p>Limitations</p>
                        <p className="">Might create a not accurate meme.</p>
                    </div>
                </div>
            </div>
            <div>
                <input type="text" placeholder="Input Emoji"/>
                <FontAwesomeIcon icon={faPaperPlane}/>
            </div>
        </div>
    )
}