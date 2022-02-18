import React from "react";
import {useAdaptivity, AppRoot, SplitLayout, SplitCol, ViewWidth, PanelHeader, } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import {UserInfo} from "./screens/user-info";

export const App = () => {
  const { viewWidth } = useAdaptivity();

  return (
    <AppRoot>
      <SplitLayout header={<PanelHeader separator={false} />}>
        <SplitCol spaced={viewWidth && viewWidth > ViewWidth.MOBILE}>
          <UserInfo/>
        </SplitCol>
      </SplitLayout>
    </AppRoot>
  );
};