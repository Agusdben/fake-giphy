import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { keywordFormatter } from '../../helpers/keywordFormatter'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import './LoadMore.css'

const LoadMore = ({ searchObj }) => {
  const { keyword, rating } = searchObj
  return (
    <Link className='load-more' to={`/gif/search/${keywordFormatter(keyword)}/${rating}`}>
      <FontAwesomeIcon className='load-more__arrow' icon={faArrowAltCircleRight} />
      <div>
        <p>Search more about</p>
        <p>"{keyword}"</p>
      </div>
    </Link>
  )
}

export default LoadMore
