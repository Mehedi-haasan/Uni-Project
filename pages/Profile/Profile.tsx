import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Camera from '@/components/camera/camera'

const Profile = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text onPress={() => navigation.navigate('Details')} style={{ padding: 10 }}>
        Go to Details
      </Text>
      <Text onPress={() => navigation.navigate('Details')} style={{ padding: 10 }}>
        Go to Details
      </Text>
      <Camera/>
    </View>
  );
};

export default Profile;