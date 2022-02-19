import {CardGrid, Group} from "@vkontakte/vkui";
import {useEffect, useState} from "react";
import {roomsRepository} from "../../core";
import {PatientKarta} from "./patient-karta";

type RoomDTO = {
  name: string;
  identifier: number;
}

export const RoomsList = () => {
  const [rooms, setRooms] = useState([] as RoomDTO[]);
  useEffect(() => {
    roomsRepository.getAll().then(setRooms);
  }, [setRooms]);

  return (
      <Group>
        <CardGrid size="l">
          {
            rooms.map(v => <PatientKarta roomIdentifier={v.identifier} name={v.name}/>)
          }
        </CardGrid>
      </Group>
  );
}