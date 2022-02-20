import {Avatar, SimpleCell} from "@vkontakte/vkui";
import {useMemo} from "react";
import {useNavigate} from "react-router-dom";

type TUserRow = {
  userId: number;
  userName: string;
  ivlState?: boolean;
}

export const UserRow = ({userId, ivlState=true, userName} : TUserRow) => {
  const navigate = useNavigate();
  const avatar = useMemo(() => (<Avatar src={`https://i.pravatar.cc/300?img=${userId}`} />), [userId]);
  const ivlStateDescription = useMemo(() => (ivlState ? undefined : "Отключен от ИВЛ"), [ivlState])
  return (
    <SimpleCell
      description={ivlStateDescription}
      before={avatar}
      onClick={() => navigate(`/patient/${userId}`)}
    >
      {userName}
    </SimpleCell>
  );
}