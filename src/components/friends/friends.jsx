import { CssFriendsList, TegStatus } from "./friends_styled"

export const FriendList = ({ friends }) => {
    return (
        <CssFriendsList>
            {friends.map(({ avatar, name, isOnline, id}) => (
                <li key={id}>
                    <TegStatus value= {isOnline}></TegStatus>
                    <img src={avatar} alt={name} width="48" />
                    <p>{name}</p>
                </li>
          ))}  
        </CssFriendsList>
    )
}

