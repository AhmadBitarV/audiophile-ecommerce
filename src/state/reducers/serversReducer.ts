import { ActionType } from '../action-types';
import { ServersAction } from '../actions';
import { Server } from '../actions/serversActions';

interface ServersState {
    loading: boolean;
    servers: Server[] | null;
    error: string | null;
}

const initialState: ServersState = {
    loading: false,
    error: null,
    servers: null,
};

const reducer = (
    state: ServersState = initialState,
    action: ServersAction
): ServersState => {
    switch (action.type) {
        case ActionType.FETCH_SERVERS_START:
            return {
                ...state,
                error: null,
                loading: true,
            };

        case ActionType.FETCH_SERVERS_SUCCESS:
            return {
                ...state,
                servers: action.servers,
                loading: false,
                error: null,
            };

        case ActionType.FETCH_SERVERS_FAIL:
            return {
                servers: null,
                loading: false,
                error: action.error,
            };

        default:
            return state;
    }
};

export default reducer;
