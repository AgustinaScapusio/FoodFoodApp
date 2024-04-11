import { fetchUsersById } from "../../http/ProfileHttp";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { ProfileCard } from "./UI/ProfileCard";
import { useParams } from "react-router-dom";
import { fetchPersonaliaById } from "../../http/PersonaliaHttp";
import { PersonaliaUserType } from "../../util/types";

export function Profile() {
  const { data } = useAppSelector((state) => state.users);
  const { data: personaliaData } = useAppSelector((state) => state.personalia);
  const dispatch = useAppDispatch();
  const { id } = useParams();


  useEffect(() => {
    if (id) {
    const parsedId = parseInt(id);
    dispatch(fetchUsersById(parsedId));
    const personaliaUser = personaliaData.find((personalia) => personalia.userId === parsedId);
    personaliaUser &&
    dispatch(fetchPersonaliaById(personaliaUser.id));
    
  }
  }, [dispatch, id, personaliaData]);

  const [showInfo, setShowInfo] = useState<number>(0);

  return (
    <>
      <div style={{ paddingLeft: "22%" }}>
        <h1 className="text-2xl mt-10">Your Profile</h1>

        <div className=" w-3/4 grid grid-rows-1 grid-flow-col gap-5 content-center mt-5">
          <a onClick={() => setShowInfo(0)} className="col-span-1">
            Your information
          </a>
          <a onClick={() => setShowInfo(1)} className="col-span-1">
            Payment method
          </a>
          <a onClick={() => setShowInfo(2)} className="col-span-1">
            Adresse
          </a>
          <a onClick={() => setShowInfo(3)} className="col-span-1">
            Order-history
          </a>
          <a onClick={() => setShowInfo(4)} className="col-span-1">
            Setting
          </a>
        </div>
        <div style={{ paddingLeft: "10%", paddingTop: "50px" }}>
          {showInfo === 0 ? (
            data.map((user) => (
              <ProfileCard
                key={user.id}
                id={user.id}
                password={user.password}
                userName={user.userName}
              />
              
            ))
          ) : showInfo === 1 ? (
            showInfo === 1 && (
              <h1>payment</h1>
            ) 
          ) : showInfo === 2 ? (
            personaliaData &&
           personaliaData.map((personalia:PersonaliaUserType) => (
            <div key={personalia.id}>
              <h1> Your registred address: </h1>
              <h1>{personalia.address}</h1>
              </div>
            ))
          ) : showInfo === 3 ? (
            <h1>order history</h1>
          ) : (
            <h3>asd</h3>
          )}
        </div>
      </div>
    </>
  );
}
