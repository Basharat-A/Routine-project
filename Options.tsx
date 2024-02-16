import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  TextInput,
} from 'react-native';

import Lists from './Lists.json';

import {useNavigation} from '@react-navigation/native';
export default ({navigation}) => {
  const [text, onChangeText] = React.useState();
  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: '#02075d',
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <Image
          source={require('./Images/ho.png')}
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
          }}
        />

        <Text
          style={{
            color: '#ffffff',
            fontSize: 20,
            textAlign: 'center',
            fontWeight: 'bold',
            marginTop: 10,
          }}>
          Routines
        </Text>
        <Image
          source={require('./Images/s.png')}
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
          }}
        />
      </View>
      <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
        <Text
          style={{
            fontWeight: 'bold',
            color: '#000000',
            marginTop: 20,
            marginLeft: 30,
          }}>
          Morning Routine
        </Text>
        <Text
          style={{
            fontWeight: 'bold',
            color: '#000000',
            marginTop: 20,
            marginRight: 30,
          }}>
          Evening Routine
        </Text>
      </View>
      <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
        <View
          style={{
            backgroundColor: '#87CEFA',
            marginTop: 10,
            marginLeft: 10,
            width: 155,
            height: 120,
            borderRadius: 10,
          }}>
          <Text style={{color: '#000000', paddingTop: 10, paddingLeft: 10}}>
            Weekdays
          </Text>
          <Text
            style={{
              color: '#000000',
              paddingLeft: 10,
              textAlignVertical: 'center',
            }}>
            9:00 PM
          </Text>

          <View style={{flexDirection: 'row-reverse'}}>
            <Image
              source={require('./Images/W.png')}
              style={{
                width: 50,
                height: 50,
                paddingRight: 50,
              }}
            />
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#02075d',
            marginTop: 10,
            marginRight: 10,
            height: 120,
            width: 155,
            borderRadius: 10,
          }}>
          <Text style={{color: '#ffffff', paddingTop: 10, paddingLeft: 10}}>
            Everyday
          </Text>
          <Text style={{color: '#ffffff', paddingLeft: 10}}>9:00 PM</Text>
          <View style={{flexDirection: 'row-reverse'}}>
            <Image
              source={require('./Images/m.png')}
              style={{
                width: 50,
                height: 50,
                paddingRight: 50,
              }}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row-reverse',
          alignItems: 'center',
          marginLeft: 60,
          marginTop: 10,
          marginBottom: 10,
          marginRight: 15,

          paddingHorizontal: 10,
          borderWidth: 1,
        }}>
        <Image
          source={require('./Images/g.png')}
          style={{
            width: 40,
            height: 40,
          }}
        />
        <TouchableOpacity
          onPress={() => {
            // const navigation = useNavigation();
            console.log('Details');
          }}>
          {/* ...your button content */}
        </TouchableOpacity>
        <TextInput onChangeText={onChangeText} value={text} />
      </View>

      <FlatList
        style={{paddingTop: 10}}
        data={Lists}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Details', {Lists: item})}
            style={{
              flexDirection: 'row',
            }}>
            <Image
              source={{
                uri: item.image,
              }}
              style={{
                width: 70,
                height: 70,
                marginLeft: 20,
                marginTop: 10,
                borderRadius: 10,
              }}
            />
            <View
              style={{
                marginLeft: 10,
                justifyContent: 'space-between',
                paddingVertical: 10,
              }}>
              <View>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: '#000000',
                  }}>
                  {item.name}
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                  }}>
                  {item.Time}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};
