 
import { Form } from '../../Core/infrastructure/components/form/Form'
import { MapView } from '../../Core/infrastructure/components/mapView/MapView'

export const Contact = () => {
  return (
    <>
      <h1>Contact</h1> <hr/>
      <div className='container'>
        <Form/>
      </div>
      <div className="container">
        <MapView/>
      </div>  
    </>
  )
}
