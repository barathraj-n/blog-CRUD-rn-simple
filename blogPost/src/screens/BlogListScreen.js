import React, {useContext, useEffect} from 'react';
import {View, Text, FlatList, StyleSheet, Button, TouchableOpacity} from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import {Feather} from '@expo/vector-icons'

const BlogListScreen = ({navigation}) => {
    const {state, deleteBlogPost, getBlogPosts} = useContext(BlogContext);

    useEffect(() => {
        getBlogPosts();

        const listener = navigation.addListener('focus', () => {
            getBlogPosts();
        });

        return () => {
            listener();
        };

    }, []);

    // useEffect(() => {
    //     getBlogPosts();
    
    //     const listener = navigation.addListener('didFocus', () => {
    //       getBlogPosts();
    //     });
    
    //     return () => {
    //       listener.remove();
    //     };
    //   }, []);

    return(
        <>
            <FlatList
                data={state}
                // key={blogPost => blogPost.id}
                keyExtractor={(blogPost) => blogPost.id}
                renderItem={({item}) => {
                return(
                <TouchableOpacity onPress={() => navigation.navigate('Blog Detail', { id: item.id})}>
                    <View style={styles.rowStyle}>
                        <Text style={styles.titleStyle}>{item.title} - {item.id}</Text>
                        <TouchableOpacity onPress={() => {deleteBlogPost(item.id)}}>
                            <Feather style={styles.iconStyle} name='trash'/>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
                );
                }}
            />
        </>
    );
}

const styles = StyleSheet.create({
    rowStyle: {
        flexDirection: 'row',
        margin: 10,
        justifyContent: 'space-between',
        padding:10,
        borderWidth: 1,
        borderRadius: 10,
    },
    titleStyle:{
        fontSize: 20,
    },
    iconStyle: {
        fontSize: 24,
    }
});

export default BlogListScreen;