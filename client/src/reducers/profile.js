import {
  GET_PROFILE,
  GET_PROFILES,
  CLEAR_PROFILE,
  PROFILE_ERROR,
  UPDATE_PROFILE,
} from '../actions/types';

const initialState = {
  profile: null,
  profiles: [],
  repos: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROFILES:
      return { ...state, profiles: payload, loading: false };
    case UPDATE_PROFILE:
    case GET_PROFILE:
      return { ...state, profile: payload, loading: false };
    case PROFILE_ERROR:
      return { ...state, loading: false, error: payload, profile: null };
    case CLEAR_PROFILE:
      return { ...state, profile: null, repos: [], error: {} };

    default:
      return state;
  }
}
