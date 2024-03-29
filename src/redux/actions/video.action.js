import request from '../../api'
import { HOME_VIDEOS_FAIL, HOME_VIDEOS_REQUEST, HOME_VIDEOS_SUCCESS } from '../actionType'


export const getPopularVideos = () => async (dispatch,getState) => {
    try {
        dispatch({
            type: HOME_VIDEOS_REQUEST,
        })
        const { data } = await request('/videos', { 
            params: { 
                part: 'snippet, contentDetails, statistics',
                chart: 'mostPopular',
                regionCode: 'BD',
                maxResults: 20,
                pageToken: getState().homeVideos.nextPageToken,
            },
        })
        dispatch({
            type: HOME_VIDEOS_SUCCESS,
            payload: {
                videos: data.items,
                nextPageToken: data.nextPageToken,
                category: 'All',
            },
        })  
    }catch (error){
        console.log(error.message);
        dispatch({
            type: HOME_VIDEOS_FAIL,
            payload:error.message,
        })
    }
}

export const getVideoByCategory = (keyword) => async (dispatch,getState) => {
    try {
        dispatch({
            type: HOME_VIDEOS_REQUEST,
        })
        const { data } = await request('/search', { 
            params: { 
                part: 'snippet',
                maxResults: 20,
                pageToken: getState().homeVideos.nextPageToken,
                q:keyword,
                type: 'video'
            },
        })
        dispatch({
            type: HOME_VIDEOS_SUCCESS,
            payload: {
                videos: data.items,
                nextPageToken: data.nextPageToken,
                category:keyword,
            },
        })  
    }catch (error){
        console.log(error.message);
        dispatch({
            type: HOME_VIDEOS_FAIL,
            payload:error.message,
        })
    }
}