import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';

const BlogDetailScreen = ({route}) => {
    const {id} = route.params;
    const {state} = useContext(BlogContext);

    const blogPost = state.find((blogPost) => blogPost.id === id)

    return(
        <>
        <Text>{blogPost.title}</Text>
        </>
    )
}

export default BlogDetailScreen;