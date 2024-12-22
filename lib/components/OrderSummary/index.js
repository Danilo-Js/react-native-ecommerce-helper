import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const OrderSummary = ({ items, subtotal, shipping, tax, total, onCheckout, title, subTitle, styles: customStyles = {}, }) => {
    const renderItem = ({ item }) => (<View style={[styles.itemContainer, customStyles.itemContainer]}>
      <Text style={[styles.itemText, customStyles.itemText]}>
        {item.name} x{item.quantity}
      </Text>
      <Text style={[styles.itemText, customStyles.itemText]}>${(item.price * item.quantity).toFixed(2)}</Text>
    </View>);
    return (<View style={[styles.container, customStyles.container]}>
      <Text style={[styles.title, customStyles.title]}>{title}</Text>
      {subTitle && <Text style={[styles.subTitle, customStyles.subTitle]}>{subTitle}</Text>}

      <FlatList data={items} renderItem={renderItem} keyExtractor={(item) => item.id} style={styles.itemList}/>

      <View style={[styles.summaryContainer, customStyles.summaryContainer]}>
        <Text style={[styles.summaryText, customStyles.summaryText]}>Subtotal: ${subtotal.toFixed(2)}</Text>
        <Text style={[styles.summaryText, customStyles.summaryText]}>Shipping: ${shipping.toFixed(2)}</Text>
        <Text style={[styles.summaryText, customStyles.summaryText]}>Tax: ${tax.toFixed(2)}</Text>
        <Text style={[styles.totalText, customStyles.totalText]}>Total: ${total.toFixed(2)}</Text>
      </View>

      <TouchableOpacity style={[styles.button, customStyles.button]} onPress={onCheckout}>
        <Text style={[styles.buttonText, customStyles.buttonText]}>Proceed to Checkout</Text>
      </TouchableOpacity>
    </View>);
};
const styles = StyleSheet.create({
    container: {
        padding: wp('5%'),
        backgroundColor: '#fff',
        borderRadius: wp('3%'),
        elevation: 2,
        flex: 1,
    },
    title: {
        fontSize: wp('5%'),
        fontWeight: 'bold',
        marginBottom: hp('1%'),
    },
    subTitle: {
        fontSize: wp('4%'),
        color: '#555',
        marginBottom: hp('2%'),
    },
    itemList: {
        marginBottom: hp('2%'),
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: hp('1%'),
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    itemText: {
        fontSize: wp('4%'),
    },
    summaryContainer: {
        marginTop: hp('2%'),
        borderTopWidth: 1,
        borderColor: '#ccc',
        paddingTop: hp('2%'),
    },
    summaryText: {
        fontSize: wp('4%'),
        marginBottom: hp('1%'),
    },
    totalText: {
        fontSize: wp('5%'),
        fontWeight: 'bold',
        marginTop: hp('1%'),
    },
    button: {
        backgroundColor: '#28a745',
        paddingVertical: hp('2%'),
        marginTop: hp('3%'),
        borderRadius: wp('2%'),
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: wp('4%'),
    },
});
export default OrderSummary;