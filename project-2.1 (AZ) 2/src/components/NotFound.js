import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='not-found'>
      <h1>404. YOU SHALL NOT GO HERE</h1>
      <Link to="/coins">Go here instead </Link>
    </div>
  )
}

export default NotFound