import {BaseRepositoryRest} from "./BaseRestRepository";

type TUserRoom = {
  id: number,
  fullName: string
};

type TUser = {
  id: number,
  first_name:string;
  second_name: string;
  last_name: string;
}

class UsersRepository extends BaseRepositoryRest{
  check(): Promise<boolean>{
    const url = `/api/check`;
    return this.get<{}, boolean>(url).catch(() => false);
  }

  getAllByRoomId(roomId: number): Promise<TUserRoom[]>{
    const url = `/api/rooms/${roomId}/patients`;
    return this.get<{}, TUserRoom[]>(url).catch(() => [] as TUserRoom[]);
  }

  getById(id: number): Promise<TUser>{
    const url = `/api/patient/${id}`;
    return this.get<{}, TUser>(url);
  }
}

export const userRepository = new UsersRepository();