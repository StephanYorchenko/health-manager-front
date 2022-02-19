import {Icon16ErrorCircleFill} from "@vkontakte/icons";
import {ContentCard} from "@vkontakte/vkui";
import styled from "styled-components";

const IvlRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const IvlState = (props: {state: boolean}) => {
  return (
    <ContentCard
      subtitle="ИВЛ"
      mode="tint"
      header={props.state ? "Подключен, работает" : <IvlRow>Отключён<Icon16ErrorCircleFill/></IvlRow>}
    />
  );
}