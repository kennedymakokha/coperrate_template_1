


import Main from './dashboardcomponents/index'
import Attribute from "./dashboardcomponents/attributes"
import Toprate from "./dashboardcomponents/toprate"
import Services from './dashboardcomponents/services'
import Stats from './dashboardcomponents/stats'
function Dashboard() {


    return (
        <div className='w-full h-full flex flex-col  sm:pt-10 py-0'>
            <Main />
            <Attribute />
            <Toprate />
            <Services />
            <Stats />
          
        </div>
    )
}

export default Dashboard