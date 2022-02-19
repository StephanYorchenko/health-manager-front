import {Group, Panel, PanelHeader, View} from "@vkontakte/vkui";
import {StatsCard} from "../../components";
import {ParamsLayout, UserAvatar} from "./components";
import {useEffect, useState} from "react";
import {statsRepository} from "../../core";
import styled from "styled-components";


const Stats = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
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

  return (
    <View activePanel="card">
      <Panel id="card">
        <PanelHeader>HealthManager</PanelHeader>
        <UserAvatar username={user}/>
        <Group>
          <ParamsLayout/>
          <Stats>
            <StatsCard label={"Температура"} data={temperatureData}/>
            <StatsCard label={"Вес"} data={temperatureData}/>
          </Stats>
        </Group>
      </Panel>
    </View>
  );
}