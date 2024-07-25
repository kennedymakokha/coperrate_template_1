import { useState } from "react"
import Tab from "../components/molecules/tab"
import Banner from "./banner"
import { ProjectsArray, TabsArray } from './../data'
import { motion } from 'framer-motion'

function Projects() {
  const [tabs, setTabs] = useState(TabsArray)
  const [active, setActive] = useState('')

  const handleTab = (title: string) => {
    let newTab: any = []
    tabs.forEach(tab => {
      if (tab.title.toLowerCase() === title.toLowerCase()) {
        let v = { ...tab, state: true }
        newTab.push(v)
        setActive(tab.value)
        return v;
      }
      else {
        let v = { ...tab, state: false }
        newTab.push(v)
        return v;
      }
    });
    setTabs(newTab)
  }


  type Props = {
    img: string
    title: string
  }
  const Item = (props: Props) => {
    const { title, img } = props
    return (
      <motion.div

        initial={{
          y: 250,
          opacity: 0,
          scale: active === "cards" || active === "t-shirts" ? 0 : 1
        }}
        animate={{
          y: 0,
          scale: active === "cards" || active === "t-shirts" ? 1 : 1,
          opacity: [0, 0.2, 0.4, 0.6, 0.8, 1]

        }}
        transition={{
          duration: 0.5,
          ease: "easeIn",
          // times: [0, 0.2, 0.4, 0.6, 0.8, 1]
        }} className=" h-40 w-[13.5%] rounded-md  bg-secondary-100 relative z-0">
        <img src={img} alt="" className="w-full h-full object-fit rounded-md" />
        <div className="absolute h-10 w-full bottom-0 flex justify-center items-center z-20">
          <p className=" font-bold text-secondary-100">{title}</p>
        </div>
        <div className="absolute h-10 w-full bg-black rounded-b-md opacity-90 bottom-0 flex justify-center items-center z-10">

        </div>
      </motion.div>
    )
  }

  let data = active === "" ? ProjectsArray : ProjectsArray.filter((obj: any) => obj.category === active)
  return (
    <div className="w-full flex-col mb-5">
      <Banner img="" scale={true} title="OUR PROJECTS" desc="Browse Our Diverse Portfolio of Successful Printing Projects" />
      <div className="flex w-full flex-col   sm:px-24 ">
        <Tab data={tabs} setTabs={setTabs} onChange={handleTab} />
        <div className="flex w-full   gap-2 flex-wrap">
          {data.length === 0 ? <div className="w-full h-full flex items-center-justify-center">
            No Items
          </div> : data.map((item: any) => (
            <Item img={item.img} title={item.title} />
          ))}

        </div>
      </div>
    </div>
  )
}

export default Projects