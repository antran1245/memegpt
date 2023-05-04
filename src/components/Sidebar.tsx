import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faPencil, faTrashCan, faEllipsis } from "@fortawesome/free-solid-svg-icons"
import { faMessage, faUserCircle } from "@fortawesome/free-regular-svg-icons"

export default function Sidebar() {
    return(
        <div className="bg-black h-[100vh] w-[345px] flex justify-center text-white">
            <div className="mt-[14px]">
                <button className="rounded-[20px] border-2 text-[22px] h-[78px] w-[323px] flex-auto">
                    <FontAwesomeIcon icon={faPlus} className="mr-[43px]"/>
                    Find New Meme
                </button>
                <div className="mt-[17px]">
                    <p className="mb-[20px]">Today</p>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faMessage} className="mr-[16px]"/>
                            <p>Annie Sucks</p>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faPencil} className="mr-[7px]"/>
                            <FontAwesomeIcon icon={faTrashCan}/>
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faUserCircle} className="mr-[21px]"/>
                            <p>Annie Belle</p>
                        </div>
                        <FontAwesomeIcon icon={faEllipsis}/>
                    </div>
                </div>
            </div>
        </div>
    )
}