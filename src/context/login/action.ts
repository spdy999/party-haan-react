import axios from 'axios';
import { SET_LOGIN } from './action-types';
import React from 'react';
import { Action } from './reducer';
export interface ILoginPayload {
  email: string;
  password: string;
}
export interface ILoginResp {
  access_token: string;
}
export interface IDispatch {
  dispatch: () => void;
}

export const login = async (
  dispatch: React.Dispatch<Action>,
  payload: ILoginPayload,
): Promise<void> => {
  const { data }: { data: ILoginResp } = await axios.post(
    '/auth/login',
    payload,
  );

  dispatch({ type: SET_LOGIN, payload: data });
};
