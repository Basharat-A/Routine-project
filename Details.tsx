import React from 'react';
import {SafeAreaView, Text} from 'react-native';

export default ({route}) => {
  const {Lists} = route.params;

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text
        style={{
          color: '#000000',
          fontSize: 20,
          textAlign: 'center',
          fontWeight: 'bold',
        }}>
        {Lists.name}
      </Text>
    </SafeAreaView>
  );
};
