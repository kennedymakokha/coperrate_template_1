/* eslint-disable react/no-unknown-property */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */

// import TitleContainer from './titleContainer'

function Tab(props: any) {
    return (
        <div className='p-1 mb-4 w-full'>
            <div className='sm:flex hidden h-10 gap-x-1 w-full '>
                {props.data.map((menu: any, i: number) => (
                    <div key={i} className={`h-full w-full rounded-md  text-slate-100 `}>
                        <div onClick={() => props.onChange(menu.title)} className={`h-full capitalize font-semibold  text-[15px] rounded-md w-full p-1 drop-shadow-md flex items-center justify-center  ${menu.state === true ? "bg-black text-primary-100" : "bg-secondary-100 text-black"} `}>
                            {menu.title}
                        </div>
                    </div>
                ))}
            </div>

            {/* <div className='w-auto sm:hidden flex   '>
                <select onChange={() => props.onChange(menu.title)} className='h-10 w-auto capitalize flex items-center text-[20px] px-2 text-primary-100 font-semi-bold  rounded-sm shadow-[inset_-12px_-8px_40px_#46464620]'>
                    {props.data.map((sub:any, i:number) => (
                        <option value={sub.title}  key={i}>{sub.title}</option>
                    ))
                    }
                </select>
            </div> */}
        </div>
    )
}



export default Tab