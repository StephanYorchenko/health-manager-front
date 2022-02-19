import {
  calcInitialsAvatarColor,
  Card,
  Header,
  InitialsAvatar,
  Separator,
  SimpleCell
} from "@vkontakte/vkui";
import {Empty} from "../../components";
import {useEffect, useState} from "react";
import {userRepository} from "../../core";
import styled from "styled-components";

type TPatientCard = {
  roomIdentifier: number,
  name: string,
}

type TUser = {
  id: number;
  fullName: string;
}

const LapaHoverDiv = styled.div`
  &:hover{
    cursor: pointer;
  }

  &>:hover{
    cursor: pointer;
  }
`;

export const PatientKarta = ({roomIdentifier, name}: TPatientCard) => {
  const [patients, setPatients] = useState([] as TUser[]);
  useEffect(() => {
    userRepository.getAllByRoomId(roomIdentifier).then(setPatients);
  }, [])
  const avatar = (userName: string, userIdentifier: number) => {
    return (
      <InitialsAvatar
        size={40}
        gradientColor={calcInitialsAvatarColor(userIdentifier)}
      >
        {userName.split(" ").map(e => e[0]).join("")}
      </InitialsAvatar>
    );
  };
  return (
    <>
      <Card mode="tint">
        <LapaHoverDiv>
          <Header>
            {name}
          </Header>
          {
            patients.map(patient => (
              <SimpleCell
                before={avatar(patient.fullName, patient.id)}
                disabled
              >
                {patient.fullName}
              </SimpleCell>
            ))
          }
        </LapaHoverDiv>
        <Empty/>
      </Card>
      <Separator/>
    </>
  );
}