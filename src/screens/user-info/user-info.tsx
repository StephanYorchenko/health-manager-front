import {Group, Panel, PanelHeader, View} from "@vkontakte/vkui";
import {StatsCard} from "../../components";
import {IvlState, ParamsLayout, UserAvatar} from "./components";
import {useEffect, useState} from "react";
import {statsRepository} from "../../core";
import styled from "styled-components";


const Stats = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const UserInfo = () => {
  const user = {
    lastName: "Губанов",
    firstName: "Данил",
    secondName: "Денисович"
  };

  const [temperatureData, setTData] = useState<{time: string, value: number}[]>([]);
  useEffect( () => {
    statsRepository.getPatientTemp(1)
      .then(e => {
        return e.map(v => ({time: v.saved_at, value: parseFloat(v.value)}));
      })
      .then(setTData);
  }, []);

  const [hmotnostData, setHmotnostData] = useState<{time: string, value: number}[]>([]);
  useEffect( () => {
    statsRepository.getPatientHmotnost(1)
      .then(e => {
        return e.map(v => ({time: v.saved_at, value: parseFloat(v.value)}));
      })
      .then(setHmotnostData);
  }, []);

  const [ivl, setIVL] = useState(true);
  useEffect(() => {
    statsRepository.getIVLState(1).then(setIVL);
  }, [])

  return (
    <View activePanel="card">
      <Panel id="card">
        <PanelHeader>HealthManager</PanelHeader>
        <UserAvatar username={user}/>
        <Group>
          <ParamsLayout/>
          <Stats>
            <StatsCard label={"Температура"} data={temperatureData}/>
            <StatsCard label={"Вес"} data={hmotnostData}/>
          </Stats>
          <IvlState state={ivl}/>
        </Group>
      </Panel>
    </View>
  );
}