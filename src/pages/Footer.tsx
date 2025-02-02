import { Logowd } from "../images"

type Props = {
    title: string
}
const Title = (props: Props) => {
    return (
        <div className="flex   h-10 w-full px-2">
            <div className="flex px-2 items-center justify-start border-b border-white h-full w-full">
                <h2 className="font-bold text-secondary-100 uppercase">{props.title}</h2>
            </div>
        </div>

    )
}

type LinkProps = {
    title: string,
    link: string
}
const Link = (props: LinkProps) => {
    return (
        <div className="flex items-center px-2  h-10 w-full">
            {props.link && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-white size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>}

            <h2 className="font-bold text-white ">{props.title}</h2>
        </div>

    )
}
const Footer = () => {

    return (
        <div className="w-full my-0 py-4 bg-black ">
            <div className="w-full sm:h-[30vh] h-[14vh]  bg-black flex-col sm:flex hidden items-center justify-center ">
                <div className="flex h-full w-full sm:flex-row flex-col sm:px-24 px-2  my-10">
                    <div className="flex sm:w-[25%] w-full flex-col h-full">
                        {/* <Title title="" /> */}
                        <div className="flex items-center w-full h-full flex-col justify-center">
                            <img src={Logowd} alt="" className="flex  h-44 w-44" />
                            <h2 className="text-secondary-100 font-bold ">
                                Pointex Solutions
                            </h2>
                        </div>

                    </div>
                    <div className="flex sm:w-[25%] w-full flex-col h-full">
                        <Title title="Company" />

                        {["About Us",
                            "Services",
                            "Our Projects",
                           ].map((item: string) => (
                                <Link link="i" title={item} key={item} />
                            ))}
                    </div>
                    <div className="flex sm:w-[25%] w-full flex-col h-full">
                        <Title title="Resources" />

                        {
                            ["Gift Cards",
                                " Design Tutorial",
                                " How to - Blog",
                                ].map((item: string) => (
                                    <Link link="" title={item} key={item} />
                                ))
                        }
                    </div>
                    <div className="flex sm:w-[25%] w-full h-full flex-col border-secondary-100 border-dotted ">
                        <Title title="Help" />
                        {["Customer Support",
                           
                            "Terms & Conditions",
                            "Privacy Policy"].map((item: string) => (
                                <Link link="" title={item} key={item} />
                            ))}

                    </div>

                </div>
            </div>
            <div className="flex w-full h-10 py-2 md:text-black text-secondary-100">
                © 2024 pointex. All rights reserved.
            </div>

        </div>
    )
}

export default Footer