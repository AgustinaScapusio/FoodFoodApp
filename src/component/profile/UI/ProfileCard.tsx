import { UserType } from "../../../types/types";


export function ProfileCard(profileData : UserType) {
    return <>
    <img className="" 
    src="https://media.discordapp.net/attachments/1211580822985908234/1220724207344943165/IMG_4508.png?ex=660ffb02&is=65fd8602&hm=c77253dc9abaf0fe2a054086d3a2219797186bfa3e97da7de19f6c6b69d5da56&=&format=webp&quality=lossless&width=263&height=350"></img>
    <h1>{profileData.userName}</h1>
    </>
}