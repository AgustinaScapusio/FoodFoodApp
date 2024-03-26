import { fetchUsers,fetchUsersById } from "../../http/ProfileHttp";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { ProfileCard } from "./UI/ProfileCard";

export function Profile() {
    const { data, loading } = useAppSelector(state => state.users)
    const UserDispatch = useAppDispatch();



    useEffect(() => {
       UserDispatch(fetchUsersById(1));
    }, [UserDispatch]);

    return <>
    <h1>Profil</h1>
            {data.map((user) => (
                <ProfileCard id={user.id} password={user.password} salt={user.salt} userName={user.userName}/>
            ))}
    </>
}