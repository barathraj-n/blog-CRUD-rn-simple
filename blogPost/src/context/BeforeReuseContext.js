// import React, {useReducer} from 'react';

// const BlogContext = React.createContext();

// const blogReducer = (state, action) => {
//     switch (action.type) {
//     case 'add_blogPost':
//         return [...state, {title : `BlogPost #${state.length + 1}`}];
//     default:
//         return state
//     }
// }

// export const BlogProvider = ({ children }) => {
//     const [blogPosts, dispatch] = useReducer(blogReducer, []);

//     const addBlogPost = () => {
//         dispatch({type: 'add_blogPost'})
//     }

//     return(
//         <BlogContext.Provider value={{blogPosts, addBlogPost}}>
//             {children}
//         </BlogContext.Provider>
//     )
// }

// export default BlogContext;