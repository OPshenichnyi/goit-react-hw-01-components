export const ProfileUser = (props) => {
    const { like, views, follower, urlImg, location, tag, name, } = props

    return (
        <div className="profile">
            <h2>Profile</h2>
            <div className="description">
                <img
                    src={urlImg}
                    alt= {name}
                    className="avatar"
                />
                <p className="name">{name}</p>
                <p className="tag">{tag}</p>
                <p className="location">{location}</p>
            </div>

            <ul className="stats">
                <li>
                    <span className="label">Followers </span>
                    <span className="quantity">{follower}</span>
                </li>
                <li>
                    <span className="label">Views </span>
                    <span className="quantity">{views}</span>
                </li>
                <li>
                    <span className="label">Likes </span>
                    <span className="quantity">{like}</span>
                </li>
            </ul>
        </div>
    )
}