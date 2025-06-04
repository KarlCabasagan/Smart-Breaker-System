

function ProfileIcon(props) {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 32 32">
            <path stroke={props.page ? "#FFA500" : "#000"} stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 2.667C8.636 2.667 2.667 8.636 2.667 16S8.636 29.333 16 29.333 29.333 23.364 29.333 16 23.364 2.667 16 2.667Z"/>
            <path stroke={props.page ? "#FFA500" : "#000"} stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.695 24.461S8.667 20.667 16 20.667s10.307 3.794 10.307 3.794M16 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"/>
        </svg>
    )
}

export default ProfileIcon