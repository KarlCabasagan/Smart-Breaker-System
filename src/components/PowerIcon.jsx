
function PowerIcon(props) {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 32 32">
            <path stroke={props.page ? "#FFA500" : "#1E1E1E"} stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M23.937 7A12 12 0 1 1 8.063 7M16 4v12"/>
        </svg>
    )
}

export default PowerIcon