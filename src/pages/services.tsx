
import { ServiceArray } from "../data"
import Banner from "./banner"
import {  motion } from "framer-motion"



type Props = {
    title: string
    icon: string
    desc: string
}
const Item = (props: Props) => {
   
   
    // const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1])
    const { title,
        icon,
        desc, } = props
    return (
        <div className="flex w-1/3 h-[300px] group px-1 mb-2  " >
            <div className="flex h-full w-full shrink-0 bg-slate-200 p-10 gap-3 m  rounded-md flex-col">
                <div className="flex size-16    ">
                    <div className="flex size-14 bg-white rounded-md items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-secondary-100">
                            <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
                        </svg>

                    </div>
                </div>
                <motion.h2
                    initial={{
                        x: 0
                    }}
                    whileHover={{
                        x: 10
                    }}
                    className="font-bold capitalize">
                    {title}
                </motion.h2>
                <p className="">{desc}</p>
                <div className="flex font-semibold cursor-pointer text-[18px] items-center  text-secondary-100 group">
                    Learn more<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.0" stroke="currentColor" className="size-6 pt-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>

                </div>
            </div>

        </div >
    )
}

const Services = () => {
    return (
        <div className="w-full mb-1 ">
            <Banner img="" scale={false} title="OUR SERVICES" desc="Printing Solutions for All Your Needs" />
            <div className="flex w-full  flex-wrap sm:px-24">

                {ServiceArray.map((item: any) => (
                    <Item title={item.title} icon={item.icon} desc="Mi donec risus commodo auctor phasellus adipiscing. Faucibus magna cursus sed sodales amet. Nunc." />
                ))}

            </div>
        </div>
    )
}

export default Services