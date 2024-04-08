import { fetchUsersById } from "../../http/ProfileHttp";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { ProfileCard } from "./UI/ProfileCard";
import { useParams } from "react-router-dom";

export function Profile() {
  const { data } = useAppSelector((state) => state.users);
  const UserDispatch = useAppDispatch();

  const { id } = useParams();

  useEffect(() => {
    if (id !== null && id !== undefined) {
      UserDispatch(fetchUsersById(parseInt(id)));
    }
  }, [UserDispatch]);

  const [showInfo, setShowInfo] = useState<number>(0);

  return (
    <>
      <div style={{ paddingLeft: "22%" }}>
        <h1 className="text-2xl">Profil</h1>

        <div className=" w-3/4 grid grid-rows-1 grid-flow-col gap-5 content-center">
          <a onClick={() => setShowInfo(0)} className="col-span-1">
            Your-information
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
            <h1>abc</h1>
          ) : showInfo === 2 ? (
            <h1>wow</h1>
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
