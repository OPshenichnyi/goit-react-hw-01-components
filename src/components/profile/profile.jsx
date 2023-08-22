import { Container, ContInfo, ProfileName, Tumb} from "./profile_styled"


export const ProfileUser = (props) => {
    const { like, views, follower, urlImg, location, tag, name, } = props

    return (
        <Container>
            <ContInfo>
                <img
                    src={urlImg}
                    alt= {name}
                />
                <ProfileName>{name}</ProfileName>
                <p>{tag}</p>
                <p>{location}</p>
            </ContInfo>

            <Tumb>
                <li>
                    <span >Followers</span>
                    <span>{follower}</span>
                </li>
                <li>
                    <span >Views</span>
                    <span>{views}</span>
                </li>
                <li>
                    <span>Likes</span>
                    <span >{like}</span>
                </li>
            </Tumb>
        </Container>
    )
}