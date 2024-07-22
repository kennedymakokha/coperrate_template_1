


import Main from './dashboardcomponents/index'
import Attribute from "./dashboardcomponents/attributes"
import Toprate from "./dashboardcomponents/toprate"
import Services from './dashboardcomponents/services'
import Stats from './dashboardcomponents/stats'
import Subscribe from './dashboardcomponents/subscribe'
function Dashboard() {


    return (
        <div className='w-full h-full flex flex-col  sm:pt-10 py-0'>
            <Main />
            <Attribute />
            <Toprate />
            <Services />
            <Stats />
            <Subscribe />
        </div>
    )
}

export default Dashboard