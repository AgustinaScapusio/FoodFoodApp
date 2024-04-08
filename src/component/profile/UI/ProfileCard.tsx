import { UserType } from "../../../util/types";
import profilepic from "../../../assets/asdadsadsa.jpg"

export function ProfileCard(profileData: UserType) {
  return (
    <>
    <div>
      <img
          className={"w-24 rounded-full shadow-lg"}
          src={profilepic}
          alt={"gottem"}
          ></img>
        <h1>{profileData.id}</h1>
        <h1>{profileData.userName}</h1>
        </div>
      
      <h1>Dine Favoritter!</h1>
      
      <h1>Bestill Igjen</h1>
    </>
  );
}
