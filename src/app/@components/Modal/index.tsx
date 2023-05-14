import { HTMLAttributes } from "react"
import { MdClose } from "react-icons/md"

interface IModal extends HTMLAttributes<HTMLDivElement> {
    modalTitle: string,
    onClose?: Function,
    open?:boolean
}
export const Modal = ({
    modalTitle,
    children,
    onClose,
    open=true
}: IModal) => {
    return (
        <div className={"duration-700 transition-all  inset-0 fixed bg-slate-600/[.2]  flex justify-center items-center"+(open? " z-10 backdrop-blur-md opacity-100 ":" z-[-1] backdrop-blur-[0px] opacity-0")}>
            <div className=" rounded-xl bg-slate-800 max-w-lg w-full">
                <div className="flex justify-between border-b text-slate-400 border-slate-600/[0.5] p-4">
                    <h3 className="text-lg  ">{modalTitle}</h3>
                    {
                        onClose && (
                            <button onClick={onClose as any}>
                                <MdClose className="text-2xl" />
                            </button>
                        )
                    }

                </div>
                <div className="p-4">
                   {children}
                </div>

            </div>
        </div>
    )
}