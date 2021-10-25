import * as types from '../types';

export function config(payload) {
  return {
    type: types.CONFIG,
    payload,
  };
}
