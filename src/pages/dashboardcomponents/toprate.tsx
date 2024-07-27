import { motion, useScroll, useTransform } from 'framer-motion'
import TotBag from './../../assets/images/pointex/T-Shirt.png'
import Texture from './../../assets/images/pointex/texture.jpg'
import Texture1 from './../../assets/images/pointex/back2.jpg'
import { useRef } from 'react'
type itemDetailProp = {
    title: string,
    bg: any
}
const CardDetailItem = (props: itemDetailProp) => {
    return (

        <div className={` px-4 flex items-center justify-between border-b ${props.bg ? "border-slate-100" : "border-slate-400"}   w-full sm:h-1/3 h-[50px] `}>
            <div className={`w-3/4  flex items-center ${props.bg && "text-slate-200"} font-bold text-xl h-full `}>
                {props.title}
            </div>
            <div className="w-1/4 flex items-center justify-end flex  h-full ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-6 text-secondary-100">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>

            </div>
        </div>


    )

}
type cardItemProps = {
    img: string
    bg: any
    back: any
    arr: any
}
const CardItem = (props: cardItemProps) => {
    return (

        <div className="  flex  py-4 w-full h-full ">
            <div className={`w-1/2 px-2 sm:flex hidden  h-full`}>
                <motion.img
                    initial={{
                        // x: 250,
                        opacity: 0,
                        scale: 0
                    }}
                    animate={{
                        x: 0,
                        scale: 1,
                        opacity: [0, 0.2, 0.4, 0.6, 0.8, 1]

                    }}
                    transition={{
                        duration: 0.5,
                        ease: "easeIn",
                        // times: [0, 0.2, 0.4, 0.6, 0.8, 1]
                    }}
                    // whileHover={{ opacity: 1, scale: 1 }}
                    // viewport={{ once: true }}
                    src={props.img} className={` ${props.bg ? " " : "  border-[0.1px] border-secondary-100"}   rounded-md`} alt="" />
            </div>
            <div className="sm:w-1/2 w-full  flex flex-col h-full ">
                {props.arr.map((item: string) => (
                    <CardDetailItem bg={props.bg} key={item} title={item} />
                ))}

            </div>
        </div>


    )

}

type Props = {
    bg: boolean
    back: string
    title: string
    list: any
}
const Item = (props: Props) => {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"]
    })
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1])
    return (

        <motion.div style={{
            scale: scaleProgress, opacity: scrollYProgress
        }} ref={ref} className="flex sm:w-1/2 w-full  sm:min-h-[200px] min-h-[400px] sm:px-2" >
            <div className="  border rounded-md   sm:min-h-[200px] min-h-[400px] w-full h-full relative z-0">
                <img src={props.back} className='h-full w-full  sm:min-h-[200px] min-h-[400px] rounded-md' alt="" />
                <div className="absolute inset-0 flex flex-col p-10 z-20">
                    <h2 className={`font-bold text-3xl ${props.bg ? "text-secondary-100" : "text-secondary-100"}`}>{props.title}</h2>
                    <p className={`${props.bg ? "text-white" : ""} text-[18px]`}>Elementum consectetur at aliquet turpis ultricies felis egestas aliquam porta. Amet vitae</p>

                    <CardItem arr={props.list} back={props.back} img={TotBag} bg={props.bg} />

                </div>
                <div className={`${props.bg ? "absolute" : "hidden"} rounded-md bg-orange-900 h-full opacity-90  inset-0 flex flex-col p-10 z-10 `}>


                </div>
            </div>

        </motion.div>

    )

}


const Toprate = () => {

    return (
        <div className='w-full sm:px-24 mt-10 sm:h-[400px] h-auto'>
            <div className="flex w-full sm:flex-row flex-col h-full">
                <Item list={[
                    "Tote Bags",
                    "Business Cards",
                    "T-shirts"
                ]} title="Popular in 2024" bg={false} back={Texture} />
                <Item list={[
                    "Brochures",
                    "Photo Books",
                    "Mouse Pads"]} title="Top Rated by Customers" bg={true} back={Texture1} />

            </div>
        </div>
    )
}

export default Toprate