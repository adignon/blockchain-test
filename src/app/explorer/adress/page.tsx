import { Modal } from "@/app/@components/Modal"
import { FiArrowRight } from "react-icons/fi"
import {  MdInfo } from "react-icons/md"


export default function AdressPage() {
    return (
        <>
            <div className="p-4 h-full">
                <div className="bg-slate-800/[.3] p-4 px-6 rounded-xl">
                    <div className=" pb-3 border-b border-slate-800/[0.5]">
                        <h3 className="text-xl text-slate-400">Nouvelle Adresse</h3>
                        <p className=" text-xs">Générer une adresse </p>
                    </div>
                    <div>
                        <textarea className=" outline-none focus:border-slate-400 text-slate-400 text-lg placeholder:text-sm placeholder:text-slate-500  border rounded-md border border-slate-500 w-full bg-transparent resize-none p-4 " name="" id="" cols={2} rows={3} placeholder="Phrase secrète"></textarea>
                        <div className="text-right ">
                            <button className="mt-2 shadow-lg bg-blue-700 rounded-xl text-white p-3 px-4">
                                Générer
                            </button>
                        </div>
                    </div>

                </div>
                <div className="bg-slate-800/[.3] p-6 rounded-xl mt-8 overflow-auto">
                    <div className="">
                        <div className=" pb-3 ">
                            <h3 className="text-xl text-slate-400">Listes d'adresse</h3>
                        </div>
                        <div className="py-4">

                            <ul>
                                <li className="select-none cursor-default group bg-slate-500/[.2] text-slate-400 px-4 py-2 rounded-xl flex items-center justify-between">
                                    <h3 className="text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. In debitis eum harum, cumque.</h3>
                                    <div>
                                        <FiArrowRight className="  transition group-hover:translate-x-[10px]" size={"1.5rem"} />
                                    </div>
                                </li>
                                <li className="mt-4 select-none cursor-default group bg-slate-500/[.2] text-slate-400 px-4 py-2 rounded-xl flex items-center justify-between">
                                    <h3 className="text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. In debitis eum harum, cumque.</h3>
                                    <div>
                                        <FiArrowRight className="  transition group-hover:translate-x-[10px]" size={"1.5rem"} />
                                    </div>
                                </li>
                                <li className="mt-4 select-none cursor-default group bg-slate-500/[.2] text-slate-400 px-4 py-2 rounded-xl flex items-center justify-between">
                                    <h3 className="text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. In debitis eum harum, cumque.</h3>
                                    <div>
                                        <FiArrowRight className="  transition group-hover:translate-x-[10px]" size={"1.5rem"} />
                                    </div>
                                </li>
                                <li className="mt-4 select-none cursor-default group bg-slate-500/[.2] text-slate-400 px-4 py-2 rounded-xl flex items-center justify-between">
                                    <h3 className="text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. In debitis eum harum, cumque.</h3>
                                    <div>
                                        <FiArrowRight className="  transition group-hover:translate-x-[10px]" size={"1.5rem"} />
                                    </div>
                                </li>
                                <li className="mt-4 select-none cursor-default group bg-slate-500/[.2] text-slate-400 px-4 py-2 rounded-xl flex items-center justify-between">
                                    <h3 className="text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. In debitis eum harum, cumque.</h3>
                                    <div>
                                        <FiArrowRight className="  transition group-hover:translate-x-[10px]" size={"1.5rem"} />
                                    </div>
                                </li>
                                <li className="mt-4 select-none cursor-default group bg-slate-500/[.2] text-slate-400 px-4 py-2 rounded-xl flex items-center justify-between">
                                    <h3 className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. In debitis eum harum, cumque.</h3>
                                    <div>
                                        <FiArrowRight className="  transition group-hover:translate-x-[10px]" size={"1.5rem"} />
                                    </div>
                                </li>
                                <li className="mt-4 select-none cursor-default group bg-slate-500/[.2] text-slate-400 px-4 py-2 rounded-xl flex items-center justify-between">
                                    <h3 className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. In debitis eum harum, cumque.</h3>
                                    <div>
                                        <FiArrowRight className="  transition group-hover:translate-x-[10px]" size={"1.5rem"} />
                                    </div>
                                </li>
                            </ul>
                            {/*  <p className="text-center my-12">Aucune adresse</p> */}
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                modalTitle="Description de l'adresse"
            >
                <div className="text-blue-400 flex items-center justify-between p-4 rounded-2xl bg-blue-400/[0.1] mb-4">
                    <div className="flex items-center">
                        <div>
                            <MdInfo size={"2rem"} />
                        </div>
                        <div>
                            <h3 className="text-lg ml-4">Solde</h3>

                        </div>
                    </div>
                    <h3 className="text-lg ml-4">20000</h3>

                </div>
                <div className="">
                    <p className="mb-2 text-xs">Passphrase</p>
                    <textarea value={"Simple"} className=" outline-none text-slate-400 text-lg placeholder:text-sm placeholder:text-slate-500  border rounded-md border border-slate-500 w-full bg-transparent resize-none p-4 " readOnly rows={2} cols={5}></textarea>
                </div>
                <div className="mt-4">
                    <p className="mb-2 text-xs">Clé Privée</p>
                    <input value={"Simple"} className=" outline-none text-slate-400 text-lg placeholder:text-sm placeholder:text-slate-500  border rounded-md border border-slate-500 w-full bg-transparent resize-none p-2 px-4 " />
                </div>
                <div className="mt-4">
                    <p className="mb-2 text-xs">Clé public</p>
                    <input value={"Simple"} className=" outline-none text-slate-400 text-lg placeholder:text-sm placeholder:text-slate-500  border rounded-md border border-slate-500 w-full bg-transparent resize-none p-2 px-4 " />
                </div>
                <div className="mt-4">
                    <p className="mb-2 text-xs">Adresse </p>
                    <input value={"Simple"} className=" outline-none text-slate-400 text-lg placeholder:text-sm placeholder:text-slate-500  border rounded-md border border-slate-500 w-full bg-transparent resize-none p-2 px-4 " />
                </div>
            </Modal>
        </>
    )
}