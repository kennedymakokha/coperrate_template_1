import Banner from "./banner"


function Contacts() {
  return (
    <div className="flex h-full w-full flex-col  sm:px-24 ">
      <Banner img="" scale={true} title="Get In Touch " desc="Get I Touch" height={""} more={""} left={false} />
      <div className="flex h-full w-full sm:flex-row flex-col  ">
        <div className="flex h-full sm:w-1/2 w-full items-center sm:justify-center">
          <div className="flex h-3/4 sm:w-[90%] w-full flex-col  rounded-md  ">
            <iframe className="rounded-md" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.958585698912!2d36.92848477496539!3d-1.189463398799171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f3fb9666037df%3A0xd5324bef7852fc40!2sComfy%20Inn!5e0!3m2!1sen!2ske!4v1721894415613!5m2!1sen!2ske" width="600" height="500" style={{ border: 0 }} loading="lazy" ></iframe>
          </div>
        </div>
        <div className="flex h-full sm:w-1/2 w-full items-center justify-center">
          <div className="flex sm:h-3/4 sm:w-3/4 flex-col bg-slate-100 rounded-md p-5 ">
            <div className="flex w-full">
              <div className="flex flex-col p-1 w-1/2">
                <h2 className="font-bold">Name</h2>
                <input type="text" className=" w-full inline-focus-none rounded-md h-10 shadow-3xl" />
              </div>
              <div className="flex flex-col p-1 w-1/2">
                <h2 className="font-bold">Email</h2>
                <input type="text" className=" w-full rounded-md h-10 shadow-3xl" />
              </div>
            </div>
            <div className="flex flex-col p-1 w-full">
              <h2 className="font-bold">Email</h2>
              <textarea rows={6} cols={50} className=" w-full shadow-3xl rounded-md" />
            </div>
            <div className="flex py-4 w-full items-center justify-end ">
              <div className="h-8 w-1/4 py-2 bg-secondary-100 items-center flex justify-center px-2 rounded-md shadow-3xl font-bold uppercase">Send</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts