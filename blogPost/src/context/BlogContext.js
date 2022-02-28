import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const blogReducer = (state, action) => {
    switch (action.type) {
    case 'get_0blogPost':
        return action.payload;
    case 'add_blogPost':
        return [...state, { 
            id: Math.floor(Math.random() * 999999),
            title : action.payload.title,
            content: action.payload.content
        }
        ];
    case 'delete_blogPost': 
        return state.filter(blogPost => blogPost.id !== action.payload)
    case 'edit_blogPost': 
        return state.map(blogPost => {
            return blogPost.id === action.payload.id ? action.payload : blogPost
        })
    default:
        return state
    }
}

const getBlogPosts = dispatch => {
    return async () => {
        const response = await jsonServer.get('/blogposts')
        dispatch({type: 'get_blogPost', payload: response.data})
    }
}

const addBlogPost = dispatch => {
    return (title, content, callback) => {
        dispatch({type: 'add_blogPost', payload: {title, content}});
        if (callback){
            callback();
        }
        
    }   
}

const deleteBlogPost = dispatch => {
    return (id) => {
        dispatch({type: 'delete_blogPost', payload: id});
    }
}

const editBlogPost = dispatch => {
    return (id, title, content, callback) => {
        dispatch({type: 'edit_blogPost', payload: {id, title, content}});
        if (callback){
            callback();
        }
    }
}

export const {Context, Provider} = createDataContext(
    blogReducer,
    {addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts},
    [{title: 'Test Post', content: 'Test Content', id: 1}]
    );