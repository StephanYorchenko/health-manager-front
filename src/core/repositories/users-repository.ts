import {BaseRepositoryRest} from "./BaseRestRepository";

type TUser = {
  id: number,
  fullName: string
};

class UsersRepository extends BaseRepositoryRest{
  check(): Promise<boolean>{
    const url = `/api/check`;
    return this.get<{}, boolean>(url).catch(() => false);
  }

  getAllByRoomId(roomId: number): Promise<TUser[]>{
    const url = `/api/rooms/${roomId}/patients`;
    return this.get<{}, TUser[]>(url).catch(() => [] as TUser[]);
  }
}

export const userRepository = new UsersRepository();