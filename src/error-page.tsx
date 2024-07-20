import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error: any = useRouteError();
    console.error(error);

    return (
        <div className="w-full h-screen  flex justify-center relative z-0 items-center">

            <p className="italic text-bold bd-red-100 font-serif">Map</p>
            <div className="absolute inset-0 flex justify-center items-center z-10">
                <p>Sorry, an unexpected error has occurred.</p>
                {/* //     <img src={NOTFOUND} alt="" /> */}
            </div>

        </div>

        // <div id="error-page" className="w-screen h-screen flex items-center justify-center">
        //     <h1>Oops!</h1>
        //     <p>Sorry, an unexpected error has occurred.</p>
        //     <img src={NOTFOUND} alt="" />
        //     <p>
        //         <i>{error.statusText || error.message}</i>
        //     </p>
        // </div>
    );
}