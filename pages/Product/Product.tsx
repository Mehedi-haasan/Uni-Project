import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import data from './product.json'
import { Link } from "expo-router";
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';


const Product = () => {
    return (
        <View style={styles.mainContainer}>
            {/* <Text>Product</Text> */}
            <View style={styles.container}>
                {
                    data.map((item) => {
                        return (
                            <View key={item.id} style={styles.item1}>
                                <View style={styles.item2}>
                                    <Text style={styles.discount}>{item.discount}</Text>
                                    <Image source={{ uri: item.image }} style={styles.image} />
                                    <Text>{item.title}</Text>
                                    <Link style={styles.link} href="/">
                                        <ThemedText type="link">View Details</ThemedText>
                                    </Link>
                                </View>
                            </View>
                        );
                    })
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        padding: 1,
    },
    item1: {
        width: '50%',
        paddingHorizontal: 5,
        marginBottom: 5,
        borderColor: 'black',
        borderRadius: 5,
    },
    item2: {
        width: '100%',
        padding: 2,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        position: 'relative'
    },
    image: {
        height: 120,
        width: '100%'
    },
    link: {
        textAlign: 'center',
        padding: 2,
        borderWidth: 1,
        borderRadius: 4,
        marginTop: 2,
        backgroundColor:'#FF811A'
    },
    discount: {
        position: 'absolute',
        top: 2,
        right: 2,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        color: 'white',
        paddingHorizontal: 5,
        paddingVertical: 2,
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 5,
        zIndex: 1
    }
});

export default Product;
