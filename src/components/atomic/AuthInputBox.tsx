
type Props = {
    label: string
    name?: string
    placeholder: string
    value?: string | number
    showPass?: boolean
    setShowPass?: any
    onChange?: any
    type?: "text" | "email" | "number" | "date" | "password"
    error?: string | null | undefined
    min?: string | null | undefined
    max?: string | null | undefined
}
function AuthInputBox(props: Props) {
    const { name, showPass, setShowPass, label, placeholder, value, onChange, type, error, min, max } = props
    console.log(error, min, max)
    return (
        <div className="flex w-full flex-col px-2 ">
            <h2 className="font-bold text-xl text-slate-700 py-2">{label}</h2>
            <div className="flex h-14 border-primary-600  border  rounded-md">
                <input type={type === "password" && showPass === true ? "text" : type} name={name} value={value} onChange={onChange} className={`h-full ${type === "password" ? "w-3/4" : "w-full"} outline-none bg-transparent  rounded-md px-2`} placeholder={placeholder} />
                {type === "password" && <div onClick={() => setShowPass(!showPass)} className="w-1/4 items-center justify-center flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d={showPass ? "M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" : "M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"} />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg></div>}
            </div>

        </div>
    )
}

export default AuthInputBox