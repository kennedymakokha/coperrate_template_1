import { useScroll, useTransform, motion } from "framer-motion"
import { useRef } from "react"
import { OurServiceDescription } from "../../data"
type Props = {
    title: string
    icon: string
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
        }} className="flex w-1/3 h-full items-center justify-center ">
            <div className="flex w-[160px] h-full p-2">
                <div className="flex w-full h-full rounded-md shadow  border border-red-300 flex-col items-center justify-center ">
                    <div className="flex items-center justify-center border border-blue-100 size-16 bg-slate-50 rounded-full p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-6 text-secondary-100">
                            <path strokeLinecap="round" strokeLinejoin="round" d={props.icon} />
                        </svg>
                    </div>
                    <h2 className="font-bold">{props.title}</h2>
                </div>
            </div>
        </motion.div>
    )
}
const Services = () => {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"]
    })
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1])
    return (
        <div className="w-full sm:mt-10  sm:px-24 sm:h-[40vh] md:h-[40vh] h-auto py-10  bg-slate-200  ">
            <motion.div className="flex flex-col flex items-center justify-center py-1 sm:px-0 px-2 " style={{
                scale: scaleProgress, opacity: scrollYProgress
            }} ref={ref}> <h1 className="text-secondary-100 font-bold">OUR SERVICES</h1>
                <p className="text-[18px]">
                    {OurServiceDescription}
                </p>
            </motion.div>
            <div className="flex sm:px-24  h-[20vh] md:h-[20vh] w-full ">
                <div className="flex h-full w-full ">
                    <Item title="Design" icon="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                    <Item title="Print" icon="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z" />
                    <Item title="Deliver" icon="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />

                </div>
            </div>
        </div>



    )
}

export default Services