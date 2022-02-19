import {Button, FormItem, FormLayout, Group, Input, Panel, PanelHeader, View} from "@vkontakte/vkui";
import {useCallback, useState} from "react";

type TLoginProps = {
  loginCallback: VoidFunction
}
export const Login = ({loginCallback}: TLoginProps) => {
  const [login, setLogin] = useState("");
  const onChange = useCallback((e: any) => {
    const { name, value } = e.currentTarget;
    setLogin(value);
  }, [setLogin]);
  const [buttonPresses, setBtnPressed] = useState(false);
  const loginAction = useCallback(async () => {
    window.localStorage.setItem("user", login);
    await loginCallback();
  }, [login])
  return (
    <View activePanel="new-user">
      <Panel id="new-user">
        <PanelHeader>Регистрация</PanelHeader>
        <Group>
          <FormLayout>
            <FormItem
              top="Логин"
              status={login ? "valid" : buttonPresses ? "error" : "default"}
              bottom={
                 login
                  ? ""
                  : "Пожалуйста, введите логин"
              }
            >
              <Input
                type="text"
                name="login"
                value={login}
                onChange={onChange}
              />
            </FormItem>
            <Button size="l" stretched onClick={loginAction}>
              Войти
            </Button>
          </FormLayout>
        </Group>
      </Panel>
    </View>
  );
}