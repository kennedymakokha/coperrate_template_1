import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Footer";
import Subscribe from "../pages/dashboardcomponents/subscribe";

export default function Root() {

    // const [isDark, setIsDark] = useState(false);
    return (
        // <Navbar />

        <div style={{ fontFamily: "Causten-Round" }} className={` w-full  dark  overflow-hidden`}>
            {/* <Header dark={isDark} handleDarkToggle={() => setIsDark(!isDark)} /> */}
            <Navbar />
            <div className={`flex bg-blackmode-100 dark:bg-slate-200 `} >
                <div className={`    min-h-[90vh] relative z-0 w-full`}>
                    <Outlet />
                </div>
            </div>
            {/* <Stats /> */}
            <Subscribe />
            <Footer />
        </div>
    );
}