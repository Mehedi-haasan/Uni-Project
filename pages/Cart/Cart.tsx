import React from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import data from './cart.json';
import { Link } from "expo-router";

const Cart = () => {
    // console.log(data);
    return (
        <ScrollView>
            <View style={styles.container}>
                {data.map((item, index) => (
                    <View key={index} style={styles.cart}>
                        <View style={styles.item1}>
                            <Image source={{ uri: item.image }} style={styles.image} />
                        </View>
                        <View style={styles.item3}>
                            <View style={styles.item2}>
                                <Text>{item.title}</Text>
                                <Text>X</Text>
                            </View>
                            <View style={styles.item2}>
                                <Text>Price</Text>
                                <Text>{item.price} Tk</Text>
                            </View>
                            <View style={styles.item2}>
                                <Text>Qty</Text>
                                <View style={styles.qty}>
                                    <Text style={styles.plus}>-</Text>
                                    <Text style={styles.count}>{item.qty}</Text>
                                    <Text style={styles.minus}>+</Text>
                                </View>
                            </View>
                            <View style={styles.item2}>
                                <Text>Subtotal</Text>
                                <Text>{item.price} Tk</Text>
                            </View>
                        </View>
                    </View>
                ))}
            </View>


            <View style={styles.total}>
                <Text>Cart Totals</Text>
                <View style={styles.item2}>
                    <Text>Subtotal</Text>
                    <Text>320 Tk</Text>
                </View>
                <View style={styles.item2}>
                    <Text>Shipping</Text>
                    <View>
                        <Text>320 Tk</Text>
                        <Text>320 Tk</Text>
                    </View>
                </View>
                <View style={styles.item2}>
                    <Text>Total</Text>
                    <Text>320 Tk</Text>
                </View>
                <Link style={styles.link} href={`/`}>Proceed to checkout</Link>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 5,
        paddingVertical: 5,
    },
    cart: {
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 3,
        paddingVertical: 10,
        borderBottomWidth: 1
    },
    item1: {
        width: '30%',
    },
    item2: {
        width: '100%',
        paddingVertical: 3,
        justifyContent: 'space-between',
        flexDirection: 'row',
        // alignItems: 'center', // Center the items horizontally
        // borderRadius: 5,
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.1,
        // shadowRadius: 2,
        // elevation: 1,
        // marginVertical: 5, // Add vertical margin to space out the items
        // padding: 10, // Add padding for better spacing inside the item
    },
    item3: {
        width: '69%',
        marginLeft: '1%'
    },
    image: {
        height: 100,
        width: '98%',
        borderRadius: 5
    },
    qty: {
        display: 'flex',
        flexDirection: 'row',
        // gap: 5
    },
    plus: {
        borderWidth: 1,
        paddingHorizontal: 3,
        paddingVertical: 4,
        borderTopLeftRadius: 2,
        borderBottomLeftRadius: 2
    },
    minus: {
        borderWidth: 1,
        paddingHorizontal: 3,
        paddingVertical: 4,
        borderTopRightRadius: 2,
        borderBottomRightRadius: 2
    },
    count: {
        borderTopWidth: 1,
        borderBottomWidth: 1
    },
    total: {
        margin: 6,
        padding: 15,
        borderWidth: 1,
        borderRadius: 5
    },
    link: {
        justifyContent: 'space-between',
        alignItems: 'center',
        textAlign: 'center',
        padding: 10,
        borderWidth: 1,
        borderRadius: 3
    }
});

export default Cart;
