import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import {RiRoadMapFill} from 'react-icons/ri'
import './Style.css'
 

export const MapView2 = () => {
  return (
    <>
        <div className='container'> 
            <MapContainer className='leaflet-container' center={{lat:33.218587565511 , lon:-97.08303264564017}} zoom={15}>
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={{lat:33.218587565511, lon:-97.08303264564017}}>
                <Popup>
                    LujanCar Dent Shop. <br /> UBICATION<a href="https://www.google.com/maps/place/504+N+Mayhill+Rd,+Denton,+TX+76208,+EE.+UU./@33.2189778,-97.0838771,18z/data=!4m6!3m5!1s0x864c354895b7b587:0x7a854f41c9804dde!8m2!3d33.2185706!4d-97.0830295!16s%2Fg%20%2F11h2p83q2w?entry=ttu"><RiRoadMapFill
/></a>
                </Popup>
                </Marker>
            </MapContainer>
        </div>
    </>
  )
}


