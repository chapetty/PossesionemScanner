import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

import AddBook from './AddBook';
import Book from './Book';

const fakeBookList = [{
    key: '9780061627019',
    isbn: '9780061627019',
    title: 'Basic Writings',
    author: 'Martin Heidegger'
}, {
    key: '9780807064733',
    isbn: '9780807064733',
    title: 'The Poetics of Space',
    author: 'Gaston Bachelard'
}];

const BookList = (props) => {

    const [bookList, setBookList] = useState(fakeBookList);
    const [addBookVisible, setAddBookVisible] = useState(false);

    const addBook = (isbn) => {
        const newBook = { key: isbn, isbn: isbn };
        setBookList([...bookList, newBook]);
    };

    return (
        <View style={styles.view}>
            <Button title="Add Book" onPress={() => setAddBookVisible(true)} />
            <AddBook visible={addBookVisible} setVisible={setAddBookVisible} addBook={addBook} />
            <View>
                {bookList.map(book => {
                    return (
                        <Book book={book} />
                    );
                })}
            </View>
        </View>
    );

};

const styles = StyleSheet.create({
    view: {

    }
});

export default BookList;