import {BaseRepositoryRest} from "./BaseRestRepository";

type RoomDTO = {
  name: string;
  identifier: number;
}
class RoomsRepository extends BaseRepositoryRest{
  getAll(): Promise<RoomDTO[]>{
    const url = `/api/rooms`
    return this.get<{}, RoomDTO[]>(url).catch(() => []);
  }
}

export const roomsRepository = new RoomsRepository();