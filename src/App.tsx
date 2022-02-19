import React, {useCallback, useEffect, useMemo, useState} from "react";
import {Routes, Route, BrowserRouter, useNavigate} from "react-router-dom";
import {
  useAdaptivity,
  AppRoot,
  SplitLayout,
  SplitCol,
  ViewWidth,
  PanelHeader,
  View,
  Panel,
  PanelHeaderBack,
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import {UserInfo} from "./screens/user-info";
import {Login} from "./screens/login";
import {userRepository} from "./core";
import {RoomsList} from "./screens/rooms-list/rooms-list";
import {RoomInfo} from "./screens/room-info";

function AuthorizedRoot(props: {logoutCallback?: VoidFunction}){
  const navigate = useNavigate();
  return (
    <View activePanel="card">
      <Panel id="card">
        <PanelHeader
          left={<PanelHeaderBack onClick={() => navigate(-1)}/>}
        >
          HealthManager
        </PanelHeader>
        <Routes>
          <Route path="/patient/:id" element={<UserInfo/>}/>
          <Route path="/room/:id" element={<RoomInfo/>}/>
          <Route path="*" element={<RoomsList/>}/>
        </Routes>
      </Panel>
    </View>
  );
}

function UnauthorizedRoot(props: {callback: VoidFunction}) {
  return (
    <Routes>
      <Route path="*" element={<Login loginCallback={props.callback}/>}/>
    </Routes>
  );
}
const Browser = (props: { children: JSX.Element; }) => {
  return (
    <BrowserRouter key={"random-value"}>{props.children}</BrowserRouter>
  );
}

const RootScreen = () => {
  const navigate = useNavigate();
  const [isAuth, setAuth] = useState(false);
  useEffect(() => {
    userRepository.check().then(setAuth);
  })
  const updateLogin =  useCallback( () => {
     userRepository.check().then(
      result => {
        setAuth(result);
        if (!result) navigate('/');
      }
    )
  }, []);
  const route = useMemo(() => {
    return isAuth
      ? <AuthorizedRoot logoutCallback={updateLogin}/>
      : <UnauthorizedRoot callback={updateLogin}/>
  }, [isAuth])
  return (
    <>{route}</>
  );
}

export const App = () => {
  const { viewWidth } = useAdaptivity();

  return (
    <AppRoot>
      <SplitLayout header={<PanelHeader separator={false} />}>
        <SplitCol spaced={viewWidth && viewWidth > ViewWidth.MOBILE}>
          <Browser>
            <RootScreen/>
          </Browser>
        </SplitCol>
      </SplitLayout>
    </AppRoot>
  );
};