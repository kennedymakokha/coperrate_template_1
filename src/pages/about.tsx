import Banner from "./banner"
import BG from './../assets/images/pointex/cards.jfif'
import Custom from './../assets/images/pointex/custom.jfif'
import Quick from './../assets/images/pointex/quick.jfif'
import { useState } from "react"
type Props = {
    title: string
    img: string
    desc: string
    setShow: any
}
const Item = (props: Props) => {
    const { title, img, desc, setShow } = props
    return (
        <div className="flex   sm:w-1/3 w-full h-full    sm:px-10 flex-col">
            <img src={img} alt="" className="flex h-[150px]  object-fit rounded-md shadow-" />
            <div className="flex flex-col h-[40%] gap-x-2 w-full border-b">
                <h2 className="font-semibold ">{title}</h2>
                <p className="text-slate-500">{desc}</p>
                <div onClick={() => setShow(true)} className="flex font-semibold cursor-pointer text-[18px] items-center text-secondary-100 group">
                    Learn more<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.0" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>

                </div>
            </div>



        </div>
    )
}

type ModalProp = {
    show: boolean
    setShow: any
    item: any
}
const Modal = (props: ModalProp) => {
    const { setShow, item } = props
    return (
        <div className="absolute  min-h-full sm:w-[40vw] w-full flex  justify-center items-center z-20">
            <div onClick={() => setShow(false)} className="absolute cursor-pointer  h-5 right-2 top-5 w-5 rounded-full flex justify-center items-center z-10">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" className="size-6 text-secondary-100">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>

            </div>
            <div className="absolute  min-h-[89.7%] top-14 w-full flex flex-col z-10">

                <img src={item.img} alt="" className="flex h-60 object-fit" />
                <h2 className="text-secondary-100 font-bold py-6 ">{item.title}</h2>
                <p className="text-black">{item.desc}</p>
            </div>
        </div>
    )
}

function About() {
    const [show, setShow] = useState(false)
    const [obj, setObj] = useState({
        title: "",
        img: "",
        desc: ""
    })
    const Items = [
        {
            title: "High-Quality Printing",
            img: `${BG}`,
            desc: "Imperdiet turpis ut quis quis scelerisque ullamcorper eu tellus."
        },
        {
            title: "Customization Options", img: `${Custom}`,
            desc: "Imperdiet turpis ut quis quis scelerisque ullamcorper eu tellus."
        },
        {
            title: "Quick Turnaround Time", img: `${Quick}`,
            desc: "Imperdiet turpis ut quis quis scelerisque ullamcorper eu tellus."
        }

    ]
    return (
        <div className="w-full min-h-full h-auto relative z-0">
            {/* <p className="italic text-bold bd-red-100 font-serif">Map</p> */}
            <div className="absolute  flex justify-center items-center z-10">
                <div >
                    <Banner img={BG} scale={true} title="about Us" desc="Your Trusted Partner for Superior Printing Services" />
                    <div className="flex w-full sm:min-h-[60vh]    sm:px-24 ">
                        <div className="flex  sm:flex-row flex-col px-1  w-full">
                            {Items.map((item) => (
                                <Item setShow={() => { setShow(true); setObj(item) }} title={item.title} img={item.img} desc={"Imperdiet turpis ut quis quis scelerisque ullamcorper eu tellus."} />
                            ))}

                        </div>
                    </div>

                    {/* <Stats /> */}
                </div>
            </div>

            <div className={`absolute bg-gray-200 opacity-90 min-h-full w-[40vw] ${show ? "flex" : "hidden"}  justify-center items-center z-10`}>
            </div>
            {show && <Modal item={obj} show={show} setShow={() => setShow(false)} />}
        </div>



    )
}

export default About