import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import {RiRoadMapFill} from 'react-icons/ri'
import './Style.css'
 

export const MapView = () => {
  return (
    <>
        <div className='container'> 
            <MapContainer className='leaflet-container' center={{lat:30.33293263480608 , lon:-97.34646468867393}} zoom={15}>
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={{lat:30.33293263480608, lon:-97.34646468867393}}>
                <Popup>
                    LujanCar Dent Shop. <br /> UBICATION<a href="https://www.google.com/maps/place/127+Roy+Davis+Rd,+Elgin,+TX+78621/@30.332869,-97.3470843,168m/data=!3m1!1e3!4m6!3m5!1s0x8644eca8abaaa2c5:0x6f69e54b9c4bac76!8m2!3d30.3329232!4d-97.3464654!16s%2Fg%2F11v03hg5zx?authuser=0&entry=ttu"><RiRoadMapFill
/></a>
                </Popup>
                </Marker>
            </MapContainer>
        </div>
    </>
  )
}
