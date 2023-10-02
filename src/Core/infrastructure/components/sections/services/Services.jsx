import logo from '../../../../../assets/logo_grande.png';
import a from '../../../../../assets/icons/door-dings-1.png'
import b from '../../../../../assets/icons/enviro-technology-1.png'
import c from '../../../../../assets/icons/environment-1.png'
import d from '../../../../../assets/icons/hail-repair-1.png'
import e from '../../../../../assets/icons/satisfaction-1.png'
import f from '../../../../../assets/icons/dent-removal-1.png'
import './Style.css'

import 'bootstrap/dist/css/bootstrap.min.css'

export const Services = () => {
  return (
    <>
        {/* <div className="container"> */}
            <div className="row text-white text-center">
                <div className="block col-12 bg-dark align-middle">
                    <img className="mt-2" src={logo} alt='logo'/>
                    <p className="fs-1 fw-bold">Advantages of Auto Dent Removal Services from LUJANCAR</p> 
                </div>
                <div className="col-md-4 bg-dark">
                    {/* <FontAwesomeIcon className="icon fs-1 mt-2" icon={faDollarSign} /> */}
                    <img className="icon_services" src={c} alt='logo'/>
                    <p className="fs-4 fw-bold ">ENVIRONMENTALLY FRIENDLY ALTERNATIVE</p>
                    <p className="">Our vehicle repair process removes damage through our environmentally 
                    friendly process by sculpting the vehicle’s original body panels. We don’t use paint 
                    or body fillers.</p>
                </div>
                <div className="col-md-4 bg-dark">
                    {/* <FontAwesomeIcon className="icon fs-1 mt-2" icon={faThumbsUp} /> */}
                    <img className="icon_services" src={e} alt='logo'/>
                    <p className="fs-4 fw-bold ">SATISFACTION GUARANTEED</p>
                    <p className="">Our guarantee is that all Autobody Enviro-Technology® metal sculpting
                    will be done to the satisfaction of our clients. It is this guarantee that makes us
                     Calgary’s Most Trusted Auto Body Shop.</p>
                </div>
                <div className="col-md-4 bg-dark">
                    {/* <FontAwesomeIcon className="icon fs-1 mt-2" icon={faClock} /> */}
                    <img className="icon_services" src={b} alt='logo'/>
                    <p className="fs-4 fw-bold ">AUTOBODY ENVIRO-TECHNOLOGY</p>
                    <p className="">Autobody Enviro-Technology involves the repair of an automobile’s
                     exterior panels using the most environmentally friendly processes possible.</p>
                </div>
                <div className="col-md-4 bg-dark">
                    {/* <FontAwesomeIcon className="icon fs-1 mt-2" icon={faClock} /> */}
                    <img className="icon_services" src={f} alt='logo'/>
                    <p className="fs-4 fw-bold ">DENT REMOVAL</p>
                    <p className="">The Paintless Dent Repair process starts with gaining access to the
                    backside of the dent. The dent technician will select one of the many specialty tools
                     to massage the dent with, as the tools vary in size, shape, and strength.</p>
                </div>
                <div className="col-md-4 bg-dark">
                    {/* <FontAwesomeIcon className="icon fs-1 mt-2" icon={faClock} /> */}
                    <img className="icon_services" src={a} alt='logo'/>
                    <p className="fs-4 fw-bold ">DOOR DINGS</p>
                    <p className="">The first step in the removal of a door ding is to polish all impact 
                    scratching out of the dent, so a clear view of the painted surface can be seen for massaging out the dent.</p>
                </div>
                <div className="col-md-4 bg-dark">
                    {/* <FontAwesomeIcon className="icon fs-1 mt-2" icon={faClock} /> */}
                    <img className="icon_services" src={d} alt='logo'/>
                    <p className="fs-4 fw-bold ">HAIL REPAIR</p>
                    <p className="">Hail Damage affects mostly the horizontal panels on a vehicle: the hood, the roof, the trunk, 
                    the tops of the front fenders, and the tops of the rear quarter panels.</p>
                </div>
            </div>
        {/* </div> */}
    </>
  )
}
