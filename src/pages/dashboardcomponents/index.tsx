
import { motion } from "framer-motion"
import Tshirt from './../../assets/images/pointex/T-Shirt.png'
import Card from './../../assets/images/pointex/businesscard.jpg'
import Dem from './../../assets/images/pointex/dem1.png'
import Bg from './../../assets/images/pointex/WhatsApp Image 2024-07-25 at 23.20.24.jpeg'

const index = () => {
    type Props = {
        title: string, onclick: any, outline: boolean
    }
    const Button = (props: Props) => {
        const { title, onclick, outline } = props
        console.log(onclick)
        return (
            <div className={`flex shadow-3xl ${outline ? "border border-secondary-100 hover:bg-slate-200 hover:text-secondary-100 sm:text-black text-white" : "sm:text-white text-black bg-secondary-100  hover:bg-black hover:text-secondary-100"} px-4 py-2 font-bold  rounded-md`}>{title}</div>
        )
    }
    return (
        <div className="flex sm:h-[60vh] h-auto sm:flex-row flex-col w-full sm:px-24">
            <div className="flex h-auto sm:w-3/4 sm:px-3 w-full ">
                <div className="flex h-full relative z-0 w-full rounded-md ">
                    <img src={Bg} alt="" className=" " />
                    <motion.img
                        initial={{
                            x: 150,
                            // opacity: 0,
                            // scale: 0
                        }}
                        animate={{
                            x: 0,
                            // scale: 1,
                            // opacity: [0, 0.2, 0.4, 0.6, 0.8, 1]

                        }}
                        transition={{
                            duration: 0.5,
                            ease: "easeIn",
                            // times: [0, 0.2, 0.4, 0.6, 0.8, 1]
                        }}
                        src={Dem} alt="" className="absolute h-full w-[69.9%] right-0  sm:flex hidden  z-20 object-cover" />
                    <div className="absolute h-full sm:gap-y-10   gap-y-4 sm:w-[65%] w-full flex-col items-center justify-center left-0   flex  z-20 object-cover" >
                        <h2 className="text-center sm:text-black text-white text-3xl font-bold"></h2>
                        <h1 className="text-secondary-100 text-3xl font-bold">Show Up, Stand Out!</h1>
                        <p className="sm:text-black text-white">Bring Your Ideas to Life with High-Quality Prints</p>
                        <div className="flex gap-x-3">
                            <Button title="Get Started" onclick={undefined} outline={false} />
                            <Button title="Read more" onclick={undefined} outline={true} />
                            <div className={`flex shadow-3xl bg-secondary-100 rounded-md`}></div>
                        </div>

                    </div>
                    <motion.div

                        initial={{
                            // x: 150,
                            // opacity: 1,
                            scale: 1
                        }}
                        animate={{
                            // x: 0,
                            scale: 0,
                            // opacity: [0, 0.2, 0.4, 0.6, 0.8, 1]

                        }}
                        transition={{
                            duration: 0.5,
                            ease: "easeIn",
                            // times: [0, 0.2, 0.4, 0.6, 0.8, 1]
                        }}
                        className="absolute inset-0 flex opacity-40 rounded-md  bg-secondary-100 z-10"></motion.div>
                </div>
            </div>
            <motion.div

                initial={{
                    y: 250,
                    // opacity: 0,
                    // scale: 0
                }}
                animate={{
                    y: 0,
                    // scale: 1,
                    // opacity: [0, 0.2, 0.4, 0.6, 0.8, 1]

                }}
                transition={{
                    duration: 0.5,
                    ease: "easeIn",
                    // times: [0, 0.2, 0.4, 0.6, 0.8, 1]
                }}
                className="sm:flex sm:mt-0 mt-1   h-full sm:w-1/4 w-full sm:flex-col  ">
                <div className="flex h-1/2  w-full pb-2  ">
                    <div className="w-full h-full bg-yellow-200 flex justify-center rounded-md items-center relative z-0">
                        <img src={Tshirt} className="h-full w-full rounded-md" alt="" />
                        <div className="absolute bottom-1 right-2 flex justify-center items-center z-10">
                            <p className="text-xl font-bold text-secondary-100 ">Design Now</p>
                        </div>
                    </div>
                </div>

                <div className="flex h-1/2  w-full   ">
                    <div className="w-full h-full bg-yellow-200 flex justify-center rounded-md items-center relative z-0">
                        <img src={Card} className="h-full w-full rounded-md" alt="" />
                        <div className="absolute bottom-1 right-2 flex justify-center items-center z-10">
                            <p className="text-xl font-bold text-secondary-100 ">Print It </p>
                        </div>

                    </div>
                </div>

            </motion.div>

        </div>

    )
}

export default index