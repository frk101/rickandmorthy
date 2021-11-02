import {
  GET_EPISODE,
  GET_EPISODE_SUCCESS,
  GET_EPISODE_FAIL,
  GET_EPISODE_DETAIL,
  GET_EPISODE_DETAIL_SUCCESS,
  GET_EPISODE_DETAIL_FAIL,
} from "../types/episode";

const INITIAL_STATE = {
  getEpisodeLoading: false,
  getEpisodeResult: {},
  getEpisodeFail: false,
  getEpisodeDetailLoading: false,
  getEpisodeDetailResult: {},
  getEpisodeDetailFail: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_EPISODE:
      return {
        ...state,
        getEpisodeLoading: true,
        getEpisodeResult: {},
        getEpisodeFail: false,
      };
    case GET_EPISODE_SUCCESS:
      return {
        ...state,
        getEpisodeLoading: false,
        getEpisodeResult: action.payload.data,
        getEpisodeFail: false,
      };
    case GET_EPISODE_FAIL:
      return {
        ...state,
        getEpisodeLoading: false,
        getEpisodeResult: {},
        getEpisodeFail: true,
      };

    case GET_EPISODE_DETAIL:
      return {
        ...state,
        getEpisodeDetailLoading: true,
        getEpisodeDetailResult: {},
        getEpisodeDetailFail: false,
      };
    case GET_EPISODE_DETAIL_SUCCESS:
      return {
        ...state,
        getEpisodeDetailLoading: false,
        getEpisodeDetailResult: action.payload.data,
        getEpisodeDetailFail: false,
      };
    case GET_EPISODE_DETAIL_FAIL:
      return {
        ...state,
        getEpisodeDetailLoading: false,
        getEpisodeDetailResult: {},
        getEpisodeDetailFail: true,
      };
    default:
      return { ...state };
  }
};
