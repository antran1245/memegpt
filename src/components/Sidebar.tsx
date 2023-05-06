import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faPencil, faTrashCan, faEllipsis } from "@fortawesome/free-solid-svg-icons"
import { faMessage, faUserCircle } from "@fortawesome/free-regular-svg-icons"

export default function Sidebar() {
    return(
        <div className="bg-black h-[100vh] w-[345px] flex text-white">
            <div className="mt-[14px] flex flex-col w-[100%]">
                <button className="rounded-[20px] border-2 text-[22px] h-[78px] w-[323px] flex-none mx-auto">
                    <FontAwesomeIcon icon={faPlus} className="mr-[43px]"/>
                    Find New Meme
                </button>
                <div className="mt-[17px] flex flex-col flex-auto justify-between">
                    <div className="flex-none pr-[16px] pl-[22px]">
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
                    </div>
                    <div className="flex justify-between items-center py-[19px] pl-[18px] pr-[22px] border-t-[1.5px]">
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faUserCircle} size="2xl" className="mr-[21px]"/>
                            <p className="text-[20px] font-medium">Annie Belle</p>
                        </div>
                        <FontAwesomeIcon icon={faEllipsis} size="2xl"/>
                    </div>
                </div>
            </div>
        </div>
    )
}