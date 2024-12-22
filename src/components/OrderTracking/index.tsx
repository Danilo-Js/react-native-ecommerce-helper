import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

interface OrderTrackingStep {
  id: string;
  title: string;
  description: string;
  status: 'completed' | 'current' | 'pending';
}

interface OrderTrackingProps {
  steps: OrderTrackingStep[];
  title: string;
  subTitle?: string;
  styles?: {
    container?: object;
    title?: object;
    subTitle?: object;
    stepContainer?: object;
    stepTitle?: object;
    stepDescription?: object;
    stepCompleted?: object;
    stepCurrent?: object;
    stepPending?: object;
  };
}

const OrderTracking: React.FC<OrderTrackingProps> = ({
  steps,
  title,
  subTitle,
  styles: customStyles = {},
}) => {
  const renderStep = ({ item }: { item: OrderTrackingStep }) => {
    let stepStyle = styles.stepPending;
    if (item.status === 'completed') stepStyle = styles.stepCompleted;
    if (item.status === 'current') stepStyle = styles.stepCurrent;

    return (
      <View style={[styles.stepContainer, customStyles.stepContainer]}>
        <View style={[styles.stepIndicator, stepStyle]} />
        <View style={styles.stepContent}>
          <Text style={[styles.stepTitle, customStyles.stepTitle]}>{item.title}</Text>
          <Text style={[styles.stepDescription, customStyles.stepDescription]}>
            {item.description}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={[styles.container, customStyles.container]}>
      {/* Title */}
      <Text style={[styles.title, customStyles.title]}>{title}</Text>
      {subTitle && <Text style={[styles.subTitle, customStyles.subTitle]}>{subTitle}</Text>}

      {/* Steps */}
      <FlatList
        data={steps}
        renderItem={renderStep}
        keyExtractor={(item) => item.id}
        style={styles.flatList}
      />
    </View>
  );
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
    textAlign: 'center',
  },
  subTitle: {
    fontSize: wp('4%'),
    color: '#555',
    marginBottom: hp('2%'),
    textAlign: 'center',
  },
  flatList: {
    marginTop: hp('1%'),
  },
  stepContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp('2%'),
  },
  stepIndicator: {
    width: wp('4%'),
    height: wp('4%'),
    borderRadius: wp('2%'),
    marginRight: wp('3%'),
  },
  stepContent: {
    flex: 1,
  },
  stepTitle: {
    fontSize: wp('4%'),
    fontWeight: 'bold',
  },
  stepDescription: {
    fontSize: wp('3.5%'),
    color: '#666',
  },
  stepCompleted: {
    backgroundColor: '#28a745',
  },
  stepCurrent: {
    backgroundColor: '#ffc107',
  },
  stepPending: {
    backgroundColor: '#ccc',
  },
});

export default OrderTracking;