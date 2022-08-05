import LogoImage from '../images/image.png'
import { Link } from 'react-router-dom'

const HomePage = () => {

  return (
    <div className="homepage">
    <Link to="coins">
      <img className='logo' src={LogoImage} alt="Spinner" />
    </Link>
    <h3>Click logo to enter</h3>
    </div>
  )

} 

export default HomePage