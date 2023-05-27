import axios from "axios"
import { useEffect } from "react"
const CLIENT_ID = '2a778547eda84100a097234471160240'
const SPOTIFY_ATHORIZE_ENDPOINT = 'https://accounts.spotify.com/authorize'
const REDIRECT_URI_AFTER_LOGIN = 'http://localhost:5173/shope'
const SPACE_DELIMITTER = "%20"
const SCOPES = ["user-top-read"]
const SCOPES_URL_PARAM = SCOPES.join(SPACE_DELIMITTER)


const LoginPage = () =>{

    const handleLogin = () =>{
        const URL = `${SPOTIFY_ATHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI_AFTER_LOGIN}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`
        window.location = URL
    }
    `http://localhost:5173/shope#access_token=BQAxUHJwmrfieuzAA2g9hnKz5Ymt7AiUpg9LJmxG-zfGkBgVbA6JPFe1gHj-YFfROAyEJMpXHOWTNjaw0huinrWbGElcdf3jRZ8SQuCqskjUOvjAbkkfDzu_kecPq_5Y4h-0fqkIQuf99AXdZiKsACEgItVfgltADCk8ytXcsv1mnE7C7M1pYoJ2zbS9udMNw4wPMe-zNZg&token_type=Bearer&expires_in=3600`
    
    return(
        <button onClick={handleLogin}>Spotify</button>
    )
}
export default LoginPage