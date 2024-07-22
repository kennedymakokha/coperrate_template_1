


import Main from './dashboardcomponents/index'
import Attribute from "./dashboardcomponents/attributes"
import Toprate from "./dashboardcomponents/toprate"
import Services from './dashboardcomponents/services'
function Dashboard() {


    return (
        <div className='w-full h-full flex flex-col  sm:py-10 py-0'>
            <Main />
            <Attribute />
            <Toprate />
            <Services />
        </div>
    )
}

export default Dashboard