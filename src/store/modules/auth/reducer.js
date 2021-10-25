import * as types from '../types';

const initialState = {
  user: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.CONFIG: {
      console.log('chegueiii');
      return state;
    }

    default: {
      return state;
    }
  }
}
