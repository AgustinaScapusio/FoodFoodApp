import { UserType } from "../../../types/types";
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
        <h1>{profileData.userName}</h1>
        </div>
    </>
  );
}
