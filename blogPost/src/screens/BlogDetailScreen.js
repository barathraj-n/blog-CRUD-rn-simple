import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';

const BlogDetailScreen = ({route}) => {
    const {id} = route.params;
    const {state} = useContext(BlogContext);

    const blogPost = state.find((blogPost) => blogPost.id === id)

    return(
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{blogPost.title}</Text>
            <Text style={styles.contentStyle}>{blogPost.content}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 10,
        marginHorizontal: 10,
        padding: 10,
    },
    titleStyle:{
        fontSize: 24,
        fontWeight: 'bold',
    },
    contentStyle:{
        fontSize: 18,
        paddingTop: 10,
    }
});

export default BlogDetailScreen;