import React, {useContext} from 'react';
import BlogPostForm from '../component/BlogPostForm';
import { Context as BlogContext } from '../context/BlogContext';

const BlogEditScreen = ({navigation, route}) => {
    const {id} = route.params;
    const {state, editBlogPost} = useContext(BlogContext);

    const blogPost = state.find((blogPost) => blogPost.id === id)
    console.log(route.params)

    return(
        <>
            <BlogPostForm onSubmit={(title, content) => editBlogPost(id, title, content, () => { navigation.pop()})} initialValues={{title: blogPost.title, content: blogPost.content}}/>
        </>
    )
}

export default BlogEditScreen;