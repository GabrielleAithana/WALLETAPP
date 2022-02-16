import { StyleSheet, Text, View } from 'react-native';

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Task from './components/servicios'

export default function App() {
  return (

<View style={styles.container}>

<View style={styles.titleWrapper}>
<Text style={styles.sectionTitle}>Servicios</Text>
</View>
<View style={styles.serviciosWrapper}>

<View style={styles.items}>
{/* Aqui estan los servicios */}
<Task text={'Bills'}/>
<Task text={'Internet'}/>
<Task text={'Transport'}/>
<Task text={'Booking'}/>
<Task text={'Shopping'}/>
<Task text={'Insurance'}/>
<Task text={'Events'}/>
<Task text={'Education'}/>
<Task text={'Charity'}/>
</View>
  </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  serviciosWrapper: {
    paddingTop: 15,
    paddingHorizontal: 20,
  },
sectionTitle: {
  color: '#FFFF',
  fontSize: 24,
  fontWeight: 'bold',
  
},
items: {
  marginTop: 30,
},

titleWrapper: {
  backgroundColor: '#55BCF6',
  maxWidth: '100%',
  height: 140,
  borderBottomRightRadius: 30,
  borderBottomLeftRadius: 30,
  paddingTop: 60,
  paddingHorizontal: 25,
}

});
