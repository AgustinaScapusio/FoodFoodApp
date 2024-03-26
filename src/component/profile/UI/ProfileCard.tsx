import { UserType } from "../../../types/types";

export function ProfileCard(profileData: UserType) {
  return (
    <>
      <img
        alt={"gottem"}
        className=""
        src="https://media.discordapp.net/attachments/1191814565021888693/1222206691991617687/image.png?ex=66155fae&is=6602eaae&hm=83f14afaed43ff1621a4fddd1c6825e08c24d393dcd430109b7752246e690613&=&format=webp&quality=lossless&width=491&height=509"
      ></img>
      <h1>{profileData.userName}</h1>
    </>
  );
}
