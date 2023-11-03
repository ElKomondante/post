
import { ICreatePost, IPostInfo, IPostsResponse } from "../../../types";
import { getToken } from "../../../utils";
import { SET_POSTS, LOAD_POSTS, ADD_POSTS, SET_SELECTED_POST, LOAD_POST, SET_SEARCH } from "../action-types";
import { takeEvery, put } from 'redux-saga/effects'

const setPosts = (posts: IPostInfo[]) => ({
    type: SET_POSTS,
    posts,
})

const loadPosts = (searchInfo: any) => ({
    type: LOAD_POSTS,
    searchInfo,
})

const addPost = (postInfo: ICreatePost ) => ({
    type: ADD_POSTS,
    postInfo,
})

const loadPost = (id: number) => ({
    type: LOAD_POST,
    id,
})

const setSelectedPost = (post: IPostInfo) => ({
    type: SET_SELECTED_POST,
    post,
})

const setSearch = (search: string) => ({
    type: SET_SEARCH,
    search,
})

function* fetchPosts(action: any) {
    const { searchInfo } = action;
    const resp: Response = yield fetch(`https://studapi.teachmeskills.by/blog/posts/?limit=10&offset=0 ${searchInfo.search ? '&search=' + searchInfo.search : ''}`)
    const data: IPostsResponse = yield resp.json();
    yield put(setPosts(data.results))
}

function* fetchAddPost(action: any) {
    const token: string = yield getToken();
    const { postInfo } = action;
    const formData = new FormData();
    Object.entries(postInfo).forEach(([key, value]: any) => {
        formData.append(key, value)
    })
    const response: Response = yield fetch('https://studapi.teachmeskills.by/blog/posts/', {
    method: 'POST',    
    headers: {
            'Authorization' : `Bearer ${token}`
        },
        body: formData
    })
    if (response.status >= 200 && response.status < 300) {
        const data: IPostInfo = yield response.json();
        console.log(data)
    }
}

function* fetchLoadPost(action: any) {
    const response: Response = yield fetch(`https://studapi.teachmeskills.by/blog/posts/${action.id}`)
    const post: IPostInfo = yield response.json();
    yield put(setSelectedPost(post))
}

function* watcherPost() {
    yield takeEvery(LOAD_POSTS, fetchPosts)
    yield takeEvery(ADD_POSTS, fetchAddPost)
    yield takeEvery(LOAD_POST, fetchLoadPost)
}

export {
    setSelectedPost,
    addPost,
    setPosts,
    loadPosts,
    loadPost,
    setSearch,
    watcherPost,
}