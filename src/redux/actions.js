import { types } from './constants';

const postsFetchedRequest = () => ({
    type: types.FETCH_POSTS_REQUEST,
});

const postsFetchedSuccess = (posts) => ({
    type: types.FETCH_POSTS_SUCCESS,
    payload: posts,
});

const postsFetchedFail = (error) => ({
    type: types.FETCH_POSTS_FAIL,
    payload: error,
});

export const fetchPosts = () => (dispatch) => {
    dispatch(postsFetchedRequest());
    return fetch('https://jsonplaceholder.typicode.com/photos?_limit=9')
        .then(response => response.json())
        .then((json) => {
            const posts = json.map(item => {
                return {
                    ...item,
                    title: 'По стандарту РБК заголовок материала должен содержать не более 73 знаков',
                    description: 'По стандарту РБК заголовок материала должен содержать не более 73 знаков',
                    tag: {name: 'Топик', url: '#'},
                };
            });

            dispatch(postsFetchedSuccess(posts));
        })
        .catch((error) => {
            dispatch(postsFetchedFail(error));
        })
    ;
};