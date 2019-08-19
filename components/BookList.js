import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

import AddBook from './AddBook';

const BookList = (props) => {

    const [bookList, setBookList] = useState([]);
    const [addBookVisible, setAddBookVisible] = useState(false);

    const addBook = (isbn) => {
        setBookList([...bookList, { key: isbn, value: isbn }]);
    };

    return (
        <View style={styles.view}>
            <Button title="Add Book" onPress={() => setAddBookVisible(true)} />
            <AddBook visible={addBookVisible} setVisible={setAddBookVisible} addBook={addBook} />
            <View>
                {bookList.map(book => {
                    return (
                        <Text>{book.value}</Text>
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