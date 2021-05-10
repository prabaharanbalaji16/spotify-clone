export const initialState = {
    user:null,
    playlists:[],
    playing:false,
    item:null,
    discover_weekly:null,
    token:null
    // token:'BQBbWXaNqIY05EsEDKYHtYRCW8asSDo7cm3vp8wMcX0CP2G09B36rV_k-0ba2bblyryJsserFYalhSizYyt2WXHznf70H_FZl2DJVlQ8E1YaBHk4g9ReO3Dg7r9W3iO-AkToJSAOICYKA5NiFpo33cY-8CThscggvrhc9aE5g3NSq_gt',
};

const reducer = (state,action)=>{
    console.log(action);
    switch(action.type)
    {
        case "SET_USER":
            return {
                ...state,
                user:action.user,
            }
        case "SET_TOKEN":
            return {
                ...state,
                token:action.token,
            }
        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists:action.playlists,
            }
            
        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly:action.discover_weekly,
            }
        default:
            return state;
    }
};
export default reducer;