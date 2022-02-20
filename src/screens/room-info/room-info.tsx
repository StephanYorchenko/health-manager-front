import {Card, Div, Group, Header, Separator, Title} from "@vkontakte/vkui";
import { Icon16Pen, Icon24AddSquareOutline } from '@vkontakte/icons';
import styled from "styled-components";
import {UserRow} from "./user-row";
import {useEffect, useState} from "react";
import {userRepository} from "../../core";
import {useParams} from "react-router-dom";

const Temperature = styled.h1`
  font-family: "SF Pro Display",sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 88px;
  @media(min-width: 750px){
    font-size: 100px;
  }
  line-height: 100%;
  color: #5D5FEF;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const FirstCol = styled.div`
  display: grid;
  grid-template-columns: 45vw 45vw;
  gap: 10px;
  grid-template-rows: 100px 100px;
  margin-left: calc(2vw + 10px);
  margin-right: calc(2vw - 10px);
`;

const A = styled(Card)`
  grid-column: 1;
  grid-row: 1 / 3;
`;

const B = styled(Card)`
  grid-column: 2;
  grid-row: 1
`;

const C = styled(Card)`
  grid-column: 2;
  grid-row: 2;
`;

const Empty = styled.div`
  display: block;
  height: 30px;
  width: 100%;
`;

type TUser = {
  id: number,
  fullName: string
};

export const RoomInfo = () => {
  const params = useParams<"id">();
  const [patients, setPatients] = useState([] as TUser[]);
  useEffect(() => {
    userRepository.getAllByRoomId(parseInt(params.id || "")).then(setPatients);
  }, [params.id])
  return (
    <Group>
      <Header>Микроклимат в палате</Header>
      <FirstCol>
        <A>
          <Header
            aside={<Icon16Pen/>}
          >
            Температура
          </Header>
          <Div>
            <Title level="1"><Temperature>23°</Temperature></Title>
          </Div>
        </A>
        <B>
          <Header
            aside={<Icon16Pen/>}
          >
            Влажность
          </Header>
          <Vlhkost>50%</Vlhkost>
        </B>
        <C>
          <Header
            aside={<Icon16Pen/>}
          >
            Освещенность
          </Header>
          <Vlhkost>3200 K</Vlhkost>
        </C>
      </FirstCol>
      <Empty/>
      <Group>
        <Header
          aside={<Icon24AddSquareOutline/>}
        >
          Пациенты
        </Header>
        {
          patients.map(u => (<UserRow userId={u.id} userName={u.fullName}/>))
        }
      </Group>
    </Group>
  );
}