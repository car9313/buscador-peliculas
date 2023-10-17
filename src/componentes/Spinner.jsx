import { FaSpinner } from 'react-icons/fa'
import './Spinner.css'
const Spinner = () => {
  return (
    <div className="spinner__container">
      <FaSpinner className="spinnig" size={70} />
    </div>
  )
}
export default Spinner
