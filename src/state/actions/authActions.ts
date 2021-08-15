import { ActionType } from '../action-types';
import { AxiosResponse, AxiosError } from 'axios';

interface AuthStartAction {
    type: ActionType.AUTH_START;
}

interface AuthSucessAction {
    type: ActionType.AUTH_SUCCESS;
    token: string;
    payload?: string[];
}

interface AuthFailAction {
    type: ActionType.AUTH_FAIL;
    error: AxiosError;
}

interface AuthLogoutAction {
    type: ActionType.AUTH_LOGOUT;
    error: AxiosError;
}

export type AuthAction =
    | AuthStartAction
    | AuthSucessAction
    | AuthFailAction
    | AuthLogoutAction;
