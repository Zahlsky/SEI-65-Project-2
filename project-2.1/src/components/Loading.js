import Spinner from 'react-bootstrap/Spinner'

const Loading = () => {
  return (
    <div className="justify-content-center">
    <Spinner animation="border" size="lg" variant="warning" />
    </div>
  )
}
export default Loading