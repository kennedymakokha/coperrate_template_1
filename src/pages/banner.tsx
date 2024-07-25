import { motion } from 'framer-motion'
type Props = {
    title: string
    desc: string
    scale: boolean
    img: string
}
const Banner = (props: Props) => {

    const { title, desc,  scale } = props
    return (

        <motion.div
            initial={{
                y: 250,
                opacity: 0,
                scale: scale ? 0: 1
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
            }} className="w-full h-[40vh] sm:px-0 px-2   flex-col flex items-center justify-center ">
            
                <h1 className="text-secondary-100 uppercase">{title}</h1>
                <h1 className="text-4xl text-center font-bold">
                    {desc}
                </h1>
                <p className="text-slate-500">
                    Netus feugiat vitae enim enim in viverra. Id at sagittis cras pretium dictum nec netus. Ante dolor quis convallis.
                </p>
           
            <div className="flex sm:px-24"></div>
        </motion.div>
       
           
     

    )
}

export default Banner