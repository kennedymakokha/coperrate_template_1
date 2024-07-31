import { useScroll, motion, useTransform } from "framer-motion"
import { useRef } from "react"
import { WhyUsArray } from "../../data"
import { Truncate } from "../../utils/trancateText"


type Prop = {
  title: string
  icon: any
  description: string
}
const Item = (props: Prop) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"]
  })
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1])
  const { title, icon, description } = props
 
  return (
    <motion.div style={{
      scale: scaleProgress, opacity: scrollYProgress
    }} ref={ref} className="flex sm:w-1/4 p-2 items-center justify-center h-full">
      <div className="flex h-full w-full items-center">
        <div className="flex  w-1/4 ">
          <div className="flex h-20 w-20  rounded-md  bg-slate-100 items-center justify-center ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.0" stroke="currentColor" className="size-6 text-secondary-100">
              <path strokeLinecap="round" strokeLinejoin="round" d={icon}
              />
            </svg>
          </div>
        </div>
        <div className="flex  flex-col px-2 w-3/4 ">
          <h2 className="font-bold text-secondary-100 md:text-xl text-2xl">{title}</h2>
          <p  className="text-slate-500 ">{Truncate(description,60)}</p>
        </div>
      </div>
    </motion.div>
  )
}

const Attribute = () => {
  return (
    <div className='w-full flex lg:px-24 md:px-4  sm:h-[200px] justify-center py-2 sm:flex-row flex-col  items-center sm:border-b border-secondary-100'>
      {WhyUsArray.map(item => (
        <Item key={item.title} title={item.title} icon={item.icon} description={item.desc} />
      ))}
    </div>
  )
}


export default Attribute