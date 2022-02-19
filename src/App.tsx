import React from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import {useAdaptivity, AppRoot, SplitLayout, SplitCol, ViewWidth, PanelHeader, } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import {UserInfo} from "./screens/user-info";
import {Login} from "./screens/login";
import {userRepository} from "./core";
import {RoomsList} from "./screens/rooms-list/rooms-list";

function AuthorizedRoot(props: {logoutCallback?: VoidFunction}){
  return (
      <Routes>
        <Route path="/user/:id" element={<UserInfo/>}/>
        <Route path="*" element={<RoomsList/>}/>
      </Routes>
  );
}

function UnauthorizedRoot(props: {callback: VoidFunction}) {
  return (
    <Routes>
      <Route path="*" element={<Login loginCallback={props.callback}/>}/>
    </Routes>
  );
}

class RootScreen extends React.Component<any, {isAuth: boolean | null}>{

  constructor(props: {}) {
    super(props);
    this.state = {
      isAuth: null
    }
  }
  componentDidMount() {
    userRepository.check().then(v => {
      console.log(v);
      this.setState({isAuth: v})
    })
  }

  updateLogin =  async () => {
    await userRepository.check().then(
      result => {
        this.setState({isAuth: result}, () => {
          if (!result) window.location.reload()
        })
      }
    )
  }

  render(){
    const route = this.state.isAuth
        ? <AuthorizedRoot logoutCallback={this.updateLogin.bind(this)}/>
        : <UnauthorizedRoot callback={this.updateLogin.bind(this)}/>
    return (
      <BrowserRouter key={"random-value"}>{route}</BrowserRouter>
    )
  }
}

export const App = () => {
  const { viewWidth } = useAdaptivity();

  return (
    <AppRoot>
      <SplitLayout header={<PanelHeader separator={false} />}>
        <SplitCol spaced={viewWidth && viewWidth > ViewWidth.MOBILE}>
          <RootScreen/>
        </SplitCol>
      </SplitLayout>
    </AppRoot>
  );
};