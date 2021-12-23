import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { RootStackParamList } from './types';

type Props = NativeStackScreenProps<RootStackParamList, 'Photo'>;

export default function Photo({ navigation }: Props) {
  return (
    <View
      style={{
        backgroundColor: 'black',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Text style={{ color: 'white' }}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
}
