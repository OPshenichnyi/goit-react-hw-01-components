import { CssFriendsList } from "./friends_styled"

export const FriendList = ({ friends }) => {
    return (
        <CssFriendsList>
            {friends.map(({ avatar, name, isOnline, id}) => (
                <li key={id}>
                    <span value={isOnline}></span>
                    <img src={avatar} alt={name} width="48" />
                    <p>{name}</p>
                </li>
          ))}  
        </CssFriendsList>
    )
}

