import React, { useState } from 'react';
import { ActivityIndicator, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Book = (props) => {

    const [loading, setLoading] = useState(true);

    const load = () => {
        fetch('https://www.googleapis.com/books/v1/volumes?q=isbn:' + props.book.isbn)
            .then(response => response.json())
            .then(responseJSON => {
                props.book.title = responseJSON.items[0].volumeInfo.title;
                props.book.author = responseJSON.items[0].volumeInfo.authors[0];
                props.book.pages = responseJSON.items[0].volumeInfo.pageCount.toString();
                props.book.publisher = responseJSON.items[0].volumeInfo.publisher;
                props.book.publishedDate = responseJSON.items[0].volumeInfo.publishedDate;
                setLoading(false);
            })
            .catch(error => {
                props.book.title = 'Error';
                setLoading(false);
            });
    };

    if (!props.book._loaded) {
        props.book._loaded = true;
        load();
    }

    if (loading) {
        return (
            <View style={styles.view}>
                <ActivityIndicator size="small" />
            </View>
        );
    }

    return (
        <TouchableOpacity>
            <View style={styles.view}>
                <Text>Title: {props.book.title}</Text>
                <Text>Author: {props.book.author}</Text>
            </View>
        </TouchableOpacity>
    );

};

const styles = StyleSheet.create({
    view: {
        paddingBottom: 5,
        paddingTop: 5,
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
    }
});

export default Book;