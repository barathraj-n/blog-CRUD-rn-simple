import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
    switch (action.type) {
    case 'add_blogPost':
        return [...state, {title : `BlogPost #${state.length + 1}`}];
    default:
        return state
    }
}

const addBlogPost = (dispatch) => {
    dispatch({type: 'add_blogPost'})
}

export default { Context, Procider } = createDataContext(blogReducer,{addBlogPost},[]);