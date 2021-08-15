import { ActionType } from "../action-types";

export interface Server {
  name: string;
  distance: number;
}

interface fetchServersStart {
  type: ActionType.FETCH_SERVERS_START;
}

interface fetchServerSuccess {
  type: ActionType.FETCH_SERVERS_SUCCESS;
  servers: Server[];
}

interface fetchServersFail {
  type: ActionType.FETCH_SERVERS_FAIL;
  error: string;
}

export type ServersAction =
  | fetchServersStart
  | fetchServerSuccess
  | fetchServersFail;
