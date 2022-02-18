import {Group, Panel, PanelHeader, View} from "@vkontakte/vkui";
import {StatsCard} from "../../components";
import {ParamsLayout, UserAvatar} from "./components";

export const UserInfo = () => {
  const user = {
    lastName: "Губанов",
    firstName: "Данил",
    secondName: "Денисович"
  }
  return (
    <View activePanel="card">
      <Panel id="card">
        <PanelHeader>HealthManager</PanelHeader>
        <UserAvatar username={user}/>
        <Group>
          <ParamsLayout/>
          <StatsCard label={"Температура"} fieldName={"test"}/>
        </Group>
      </Panel>
    </View>
  );
}