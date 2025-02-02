import { motion } from 'framer-motion'
type Props = {
    title: string
    desc: string
    scale: boolean
    img: string
    height: string
    more: string
    left: boolean
}
const Banner = (props: Props) => {

    const { title, desc, scale, more, left } = props
    return (

        <motion.div
            initial={{
                y: 250,
                opacity: 0,
                scale: scale ? 0 : 1
            }}
            animate={{
                y: 0,
                scale: scale ? 1 : 1,
                opacity: [0, 0.2, 0.4, 0.6, 0.8, 1]

            }}
            transition={{
                duration: 0.5,
                ease: "easeIn",
                times: [0, 0.2, 0.4, 0.6, 0.8, 1]
            }} className={`w-full ${props.height ? props.height : "h-[40vh]"} sm:px-0 px-2   flex-col flex ${left ? "items-start " : "item-center"} justify-center `}>

            <h1 className={`text-secondary-100 text-center px-2 uppercase`}>{title}</h1>
            <h1 className="text-4xl px-2 text-center font-bold">
                {desc}
            </h1>
            <p className="text-slate-500 text-center  px-2">
                {more ? more : "Netus feugiat vitae enim enim in viverra. Id at sagittis cras pretium dictum nec netus. Ante dolor quis convallis."}
            </p>

            <div className="flex sm:px-24"></div>
        </motion.div>




    )
}

export default Banner