import {Group, Header, Panel, PanelHeader, View} from "@vkontakte/vkui";
import {StatsCard} from "../../components";

export const UserInfo = () => {
  return (
    <View activePanel="card">
      <Panel id="card">
        <PanelHeader>Показатели</PanelHeader>
        <Group>
          <StatsCard label={"Температура"} fieldName={"test"}/>
        </Group>
      </Panel>
    </View>
  );
}