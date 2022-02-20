import {Group, Spinner} from "@vkontakte/vkui";
import {StatsCard} from "../../components";
import {IvlState, ParamsLayout, UserAvatar} from "./components";
import {useEffect, useMemo, useState} from "react";
import {statsRepository, userRepository} from "../../core";
import styled from "styled-components";
import {useParams} from "react-router-dom";


const Stats = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 15px;
`;

type TUser = {
  id: number,
  first_name:string;
  second_name: string;
  last_name: string;
}

export const UserInfo = () => {
  const params = useParams<"id">();
  const [user, setUser] = useState<TUser | null>(null);

  useEffect(() => {
    userRepository.getById(parseInt(params.id || "")).then(setUser);
  }, [params, setUser]);

  const [temperatureData, setTData] = useState<{time: string, value: number}[]>([]);
  useEffect( () => {
    if (user !== null)
      statsRepository.getPatientTemp(user.id)
        .then(e => {
          return e.map(v => ({time: v.saved_at, value: parseFloat(v.value)}));
        })
        .then(setTData);
  }, [user]);

  const [hmotnostData, setHmotnostData] = useState<{time: string, value: number}[]>([]);
  useEffect( () => {
    if (user !== null)
      statsRepository.getPatientHmotnost(user.id)
        .then(e => {
          return e.map(v => ({time: v.saved_at, value: parseFloat(v.value)}));
        })
        .then(setHmotnostData);
  }, [user]);

  const [ivl, setIVL] = useState(true);
  useEffect(() => {
    if (user !== null)
      statsRepository.getIVLState(user.id).then(setIVL);
  }, [user])

  const avatar = useMemo(() => {
    if (user !== null)
      return <UserAvatar username={user} id={user.id}/>
    return <Spinner size="large"/>
  }, [user]);

  return (
    <>
      {avatar}
      <Group>
        <ParamsLayout/>
        <Stats>
          <StatsCard label={"Температура"} data={temperatureData}/>
          <StatsCard label={"Вес"} data={hmotnostData}/>
        </Stats>
        <IvlState state={ivl}/>
      </Group>
    </>
  );
}