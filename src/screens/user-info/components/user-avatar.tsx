import {Group, RichCell, Text, Div, Avatar} from "@vkontakte/vkui";
import {useMemo} from "react";

type TUserAvatar = {
  id: number
  username: {
    first_name: string;
    second_name?: string;
    last_name: string;
  }
}

export const UserAvatar = ({username, id}: TUserAvatar) => {
  const avatar = useMemo(() => (<Avatar size={80} src={`https://i.pravatar.cc/300?img=${id}`} />), [id]);
  return (
    <Group>
      <RichCell
        disabled
        before={avatar}
      >
        <Div>
          <Text weight="regular" size={24}>{username.first_name}</Text>
          <Text weight="regular" size={24}>{username.second_name}</Text>
          <Text weight="regular" size={24}>{username.last_name}</Text>
        </Div>
      </RichCell>
    </Group>
  );
}