import { ActionType } from '../action-types';
import { AuthAction } from '../actions';
import { AxiosError } from 'axios';

interface AuthState {
    loading: boolean;
    token: string | null;
    error: AxiosError | null;
}

const initialState = {
    token: null,
    error: null,
    loading: false,
};

const reducer = (
    state: AuthState = initialState,
    action: AuthAction
): AuthState => {
    switch (action.type) {
        case ActionType.AUTH_START:
            return {
                ...state,
                error: null,
                loading: true,
            };

        case ActionType.AUTH_SUCCESS:
            return {
                ...state,
                token: action.token,
                error: null,
                loading: false,
            };

        case ActionType.AUTH_FAIL:
            return {
                ...state,
                error: action.error,
                loading: false,
            };

        case ActionType.AUTH_LOGOUT:
            return {
                ...state,
                token: null,
            };

        default:
            return state;
    }
};

export default reducer;
