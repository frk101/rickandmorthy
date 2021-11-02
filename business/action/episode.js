import {
  GET_EPISODE,
  GET_EPISODE_URL,
  GET_EPISODE_DETAIL,
  GET_EPISODE_DETAIL_URL,
} from "../types/episode";

export function getEpisode() {
  return {
    type: GET_EPISODE,
    payload: {
      request: {
        url: `${GET_EPISODE_URL}`,
      },
    },
  };
}

export function getEpisodeDetail(episodeId) {
  return {
    type: GET_EPISODE_DETAIL,
    payload: {
      request: {
        url: `${GET_EPISODE_DETAIL_URL}${episodeId}`,
      },
    },
  };
}
