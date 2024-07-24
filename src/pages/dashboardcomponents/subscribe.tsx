

const Subscribe = () => {

    return (
        <div className="w-full my-0 ">
            <div className="w-full sm:h-[14vh] h-[10vh] pt-2  bg-secondary-100  flex-col flex items-center justify-center ">
                <div className="flex w-full sm:flex-row flex-col sm:px-24 px-2 ">
                    <div className="sm:flex hidden sm:w-1/2 w-full h-full gap-y-2 text-black font-bold text-xl">
                        Join Our Newsletter to Keep Up To Date With Us!
                    </div>
                    <div className="flex  sm:w-1/2 w-full border rounded-md border-white h-full">
                        <input type="text" className=" w-[80%]  sm:h-10 h-10 border  rounded-bl-md
                        rounded-tl-md border-brown-200" />
                        <div className="flex w-[20%] items-center h-[97%] justify-center rounded-br-md
                        rounded-tr-md font-bold bg-secondary-100">Go</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Subscribe