import { UserType } from "../../../util/types";
import profilepic from "../../../assets/asdadsadsa.jpg"

export function ProfileCard(profileData: UserType) {
  return (
    <>
    <div>
      <img
          className={"w-24 rounded-full shadow-lg mb-10"}
          src={profilepic}
          alt={"gottem"}
          ></img>
      
      <h1>
        <span className="text-l text-cyan-500 font-semibold">Your email: </span>
        {profileData.userName.toLowerCase()}
      </h1>
        </div>
      
      <h1 className="text-xl text-cyan-500 font-semibold">Your favorites!</h1>

    </>
  );
}
