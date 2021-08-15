import axios, { AxiosError } from 'axios';
import { ActionType } from '../action-types';
import { AuthAction } from '../actions';
import { ServersAction } from '../actions/';

import { Dispatch } from 'redux';

export const auth = (username: string, password: string) => {
    return async (dispatch: Dispatch<AuthAction>) => {
        dispatch({
            type: ActionType.AUTH_START,
        });
        const authData = {
            username: username,
            password: password,
        };

        await axios
            .post('https://playground.tesonet.lt/v1/tokens', authData)
            .then((res) => {
                dispatch({
                    type: ActionType.AUTH_SUCCESS,
                    token: res.data.token,
                });

                localStorage.setItem('token', res.data.token);
            })

            .catch((error: AxiosError) => {
                dispatch({
                    type: ActionType.AUTH_FAIL,
                    error: error,
                });
            });
    };
};

export const servers = (token: string) => {
    return async (dispatch: Dispatch<ServersAction>) => {
        dispatch({
            type: ActionType.FETCH_SERVERS_START,
        });

        try {
            await axios
                .get('https://playground.tesonet.lt/v1/servers', {
                    headers: { Authorization: `Bearer ${token}` },
                })
                .then((res) => {
                    dispatch({
                        type: ActionType.FETCH_SERVERS_SUCCESS,
                        servers: res.data,
                    });
                    console.log(res);
                });
        } catch (error) {
            dispatch({
                type: ActionType.FETCH_SERVERS_FAIL,
                error: error.message,
            });
        }
    };
};
