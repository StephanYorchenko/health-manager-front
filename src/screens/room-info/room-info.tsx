import {Card, CardGrid, Group, Header, Separator, SizeType, SplitCol, SplitLayout} from "@vkontakte/vkui";
import { Icon16Pen } from '@vkontakte/icons';
import styled from "styled-components";

const Temperature = styled.h1`
  font-family: "SF Pro Display",sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 88px;
  @media(min-width: 750px){
    font-size: 128px;
  }
  line-height: 89px;
  color: #5D5FEF;
  text-align: center;
`;

const Vlhkost = styled.h1`
  font-family: "SF Pro Display",sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  @media(min-width: 750px){
    font-size: 35px;
  }
  line-height: 100%;
  color: #5D5FEF;
  text-align: center;
  height: 70px;
`;

const FirstCol = styled.div`
  display: grid;
  height: max-content;
  grid-template-columns: 40vw 40vw;
  grid-template-rows: 140px;
`;

export const RoomInfo = () => {
  return (
    <Group>
      <Header>Микроклимат в палате</Header>
      <FirstCol>
        <Card>
          <Header
            aside={<Icon16Pen/>}
          >
            Температура
          </Header>
          <Temperature>23°</Temperature>
        </Card>
        <Card>
          <Header
            aside={<Icon16Pen/>}
          >
            Влажность
          </Header>
          <Vlhkost>50%</Vlhkost>
        </Card>
        <Card>
          <Header
            aside={<Icon16Pen/>}
          >
            Освещенность
          </Header>
          <Vlhkost>3200 K</Vlhkost>
        </Card>
      </FirstCol>
    </Group>
  );
}