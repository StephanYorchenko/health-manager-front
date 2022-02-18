import {Card, Group, Title, Text} from "@vkontakte/vkui";
import styled from "styled-components";

const CenteredDiv = styled.div`
  text-align: center;
  height: 50px;
  min-width: 200px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const CenterFlex = styled.div`
  display: flex;
  padding-bottom: 5px;
  padding-top: 5px;
  justify-content: space-around;
  margin-bottom: 10px;
`;

export const ParamsLayout = () => {
  return (
    <Group mode="plain">
      <CenterFlex>
        <Card>
          <CenteredDiv>
            <Title level={"1"}>21 год</Title>
            <Text weight={"regular"}>возраст</Text>
          </CenteredDiv>
        </Card>
        <Card>
          <CenteredDiv>
            <Title level={"1"}>175 см</Title>
            <Text weight={"regular"}>рост</Text>
          </CenteredDiv>
        </Card>
        <Card>
          <CenteredDiv>
            <Title level={"1"}>80 кг</Title>
            <Text weight={"regular"}>вес</Text>
          </CenteredDiv>
        </Card>
      </CenterFlex>
    </Group>
  );
}