import ProfileIcon from '../../assets/profile.svg'

const Profile = () => {


    return (
        <div className="h-full grid place-content-center">
            <div className="flex-center min-w-1/2 min-h-1/2 shadow-xl p-10">
                <div className="flex-center">
                    <img src={ProfileIcon} width={300} alt="profile" />
                </div>
                <p className="text-3xl font-semibold text-gray-300">
                    Updating Soon!
                </p>
            </div>
        </div>
    )
}

export default Profile;