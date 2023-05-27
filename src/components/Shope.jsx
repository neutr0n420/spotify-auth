import axios from "axios";
import { useEffect, useState } from "react";

const SPOTIFY_TOP_ARTIST_END_POINT = "https://api.spotify.com/v1/me/top/artists"


const getReturnedParamsFromSpotifyAuth = (hash) =>{
const stringAfterHashtag = hash.substring(1);
const pramsInUrl = stringAfterHashtag.split("&")
const pramsSplitUp = pramsInUrl.reduce((accumulators, currentValue) =>{
    const [key, value] = currentValue.split("=")
    accumulators[key] = value
    return accumulators
    },{})
    return pramsSplitUp
}
const Shope = () =>{
    useEffect(() =>{
        if(window.location.hash){
            const {access_token, token_type, expires_in} =getReturnedParamsFromSpotifyAuth(window.location.hash)
            // console.log(access_token, token_type, expires_in)
            localStorage.setItem("access_token", access_token)
            localStorage.setItem("token_type", token_type)
            localStorage.setItem("expires_in", expires_in)
        }
    },[])
    const [token, setToken] = useState('')
    const [data, setData] = useState({})

    useEffect(() =>{
        if(localStorage.getItem("access_token")){
        //    console.log(localStorage.getItem("access_token"))
            setToken(localStorage.getItem("access_token"))
        }
    },[])

    const handleGetTopIterm = () =>{
        axios
        .get(SPOTIFY_TOP_ARTIST_END_POINT, {
            headers: {
              Authorization: "Bearer " + token,
            },
          })
            .then((response) =>{
                setData(response.data)
            })
            .catch((error)=>{
                console.log(error)
            })
    }
    

    const getAccessToken = () =>{
        localStorage.getItem("access_token")
    }
    getAccessToken()
    return(
        <>
            <button onClick={handleGetTopIterm}>Get Top Artist</button>
        </>
    )
}
export default Shope