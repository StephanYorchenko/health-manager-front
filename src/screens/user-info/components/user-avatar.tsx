import {calcInitialsAvatarColor, Group, InitialsAvatar, RichCell, Text, Div} from "@vkontakte/vkui";

type TUserAvatar = {
  username: {
    firstName: string;
    secondName?: string;
    lastName: string;
  }
}

export const UserAvatar = ({username}: TUserAvatar) => {
  const avatar = (
    <InitialsAvatar
      size={80}
      gradientColor={calcInitialsAvatarColor(1234)}
    >
      {username.lastName[0] + username.firstName[0]}
    </InitialsAvatar>
  )
  return (
    <Group>
      <RichCell
        disabled
        before={avatar}
      >
        <Div>
          <Text weight="regular" size={24}>{username.lastName}</Text>
          <Text weight="regular" size={24}>{username.firstName}</Text>
          <Text weight="regular" size={24}>{username.secondName}</Text>
        </Div>
      </RichCell>
    </Group>
  );
}