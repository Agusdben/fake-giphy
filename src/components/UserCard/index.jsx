import { faCircleCheck, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './UserCard.css'

const UserCard = ({ user }) => {
  const {
    username,
    display_name: displayName,
    avatar_url: avatarUrl,
    is_verified: isVerified
  } = user

  return (
    <div className='user-card'>
      <picture className='user-card__avatar'>
        {avatarUrl && <img src={avatarUrl} alt={user.username} />}
        {!avatarUrl && <FontAwesomeIcon icon={faUser} />}
      </picture>
      <div className='user-card__info'>
        <h4>{displayName}</h4>
        <p className='user-card__username'>
          {username && <span>@{username}</span>}
          {isVerified && <FontAwesomeIcon icon={faCircleCheck} />}
        </p>
      </div>
    </div>
  )
}

export default UserCard
