import Banner from "./banner"
import BG from './../assets/images/pointex/cards.jfif'
import Custom from './../assets/images/pointex/custom.jfif'
import Quick from './../assets/images/pointex/quick.jfif'
import { useRef} from "react"
import Stats from "./dashboardcomponents/stats"

import { WhyUsArray } from "../data"
import { useScroll, useTransform, motion } from "framer-motion"
type Props = {
    title: string
    img: string
    desc: string
   
}
const Item = (props: Props) => {
    const { title, img, desc, } = props
    return (
        <div className="flex   sm:w-1/3 w-full h-full    sm:px-10 flex-col">
            <img src={img} alt="" className="flex sm:h-[150px] h-[200px]  object-fit rounded-md " />
            <div className="flex flex-col h-[40%] gap-x-2 w-full border-b">
                <h2 className="font-semibold ">{title}</h2>
                <p className="text-slate-500">{desc}</p>
                <div className="flex font-semibold cursor-pointer text-[18px] items-center text-secondary-100 group">
                    Learn more<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.0" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>

                </div>
            </div>


        </div>
    )
}

// type ModalProp = {
//     show: boolean
    
//     item: any
// }
// const Modal = (props: ModalProp) => {
//     const {item } = props
//     return (
//         <div className="absolute  min-h-full sm:w-[40vw] w-full flex  justify-center items-center z-20">
//             <div className="absolute cursor-pointer  h-5 right-2 top-5 w-5 rounded-full flex justify-center items-center z-10">
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-6 text-secondary-100">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
//                 </svg>

//             </div>
//             <div className="absolute  min-h-[89.7%] top-14 w-full flex flex-col z-10">

//                 <img src={item.img} alt="" className="flex h-60 object-fit" />
//                 <h2 className="text-secondary-100 font-bold py-6 ">{item.title}</h2>
//                 <p className="text-black">{item.desc}</p>
//             </div>
//         </div>
//     )
// }

const Whyitem = ({ title, desc }: any) => {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"]
    })
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1])
    return (
        <motion.div style={{
            scale: scaleProgress, opacity: scrollYProgress
        }} ref={ref} className="flex w-full h-20 bg-slate-100 px-2 rounded-md">
            <div className="flex w-[10%]  items-center justify-center h-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.0" stroke="currentColor" className="size-6 text-secondary-100">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                </svg>
            </div>
            <div className="flex h-full w-[90%] justify-center flex-col ">
                <h2 className="font-bold text-secondary-100/[50%] ">{title}</h2>
                <p className="text-slate-500"> {desc}</p>
            </div>
        </motion.div>
    )
}

function About() {
   
 
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
        // <div className="w-full relative z-0">
        //     {/* <p className="italic text-bold bd-red-100 font-serif">Map</p> */}
        //     <div className="absolute  flex justify-center items-center z-10">
        <div className="w-full  ">
            <Banner img={BG} scale={true} title="about Us" desc="Your Trusted Partner for Superior Printing Services" height={""} more={""} left={false} />
            <div className="flex w-full sm:min-h-[60vh]    sm:px-24 ">
                <div className="flex  sm:flex-row flex-col px-1  w-full">
                    {Items.map((item) => (
                        <Item  title={item.title} img={item.img} desc={"Imperdiet turpis ut quis quis scelerisque ullamcorper eu tellus."} />
                    ))}

                </div>
            </div>
            <div className="flex h-[90vh] w-full py-4  sm:px-24">

                <div className="flex w-full h-full flex-col">
                    <div className="flex">
                        <Banner left height="h-[20vh]" img="" scale={false} title="why choose us" desc="Experience Excellence Service" more={""} />
                    </div>
                    <div className="flex gap-y-2 flex-col">
                        {WhyUsArray.map((item: any, i: any) => (
                            <Whyitem title={item.title} desc={item.desc} key={i} />
                        ))}
                    </div>
                </div>


            </div>
            <Stats />
            {/* </div>
            </div>

            <div className={`absolute bg-gray-200 opacity-90 min-h-full w-[40vw] ${show ? "flex" : "hidden"}  justify-center items-center z-10`}>
            </div>
            {show && <Modal item={obj} show={show} setShow={() => setShow(false)} />} */}
        </div>



    )
}

export default About