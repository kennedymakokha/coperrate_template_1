
function Dashboard() {
    return (
        <div className='w-full h-full flex'>
            <div className="flex h-[400px] w-full">
                <div className="flex h-full w-3/4 p-2">
                    <div className="flex h-full relative z-0 w-full bg-red-200 rounded-sm ">
                        <p className="italic text-bold bd-red-100 font-serif">Map</p>
                        <div className="absolute inset-0 flex justify-center items-center z-10">
                            <p className="text-2xl font-bold">This should be on top of the map</p>
                        </div>
                    </div>
                </div>
                <div className="flex h-full w-1/4 bg-green-200 "></div>
            </div>

        </div>
    )
}

export default Dashboard