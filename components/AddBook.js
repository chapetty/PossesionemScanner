import React, { useState } from 'react';
import { Modal, View, TextInput, Text, Button, StyleSheet } from 'react-native';
import BarcodeScanner from 'react-native-barcode-scanner-google';

const AddBook = (props) => {

    const barcodeRead = (data) => {
        // add data validation
        props.addBook(data.data);
        props.setVisible(false);
    };

    return (
        <Modal style={styles.modal} visible={props.visible}>
            <Button title="Cancel" onPress={() => props.setVisible(false)} />
            <BarcodeScanner style={{ flex: 1 }} onBarcodeRead={barcodeRead} />
        </Modal>
    );

};

const styles = StyleSheet.create({
    modal: {
        flex: 1
    }
});

export default AddBook;