import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, ScrollView } from 'react-native';



export default function App() {
  return (
    <SafeAreaView style={styles.container}>
       <ScrollView>
         <View style={styles.testArea}>
         <Text style={styles.text} >Türkiye de ilk vaka ne zaman görülmüştür ?</Text>
         <Button style={styles.button} 
         title="9 Mart" 
         onPress={() => Alert.alert('Yanlis Cevap')} />
         <Text>  </Text>
         <Button style={styles.button} 
         title="10 mart" 
         onPress={() => Alert.alert('Dogru Cevap')} />
         <Text>  </Text>
         <Button style={styles.button} 
         title="11 Mart" 
         onPress={() => Alert.alert('Yanlis Cevap')} />
         <Text>  </Text>
         <Button style={styles.button} 
         title="12 Mart" 
         onPress={() => Alert.alert('Yanlis Cevap')} />
         </View>
       </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff0f5',

  },
  testArea: {
    borderRadius: 20,
    padding: 20,
    marginHorizontal: 40,
    marginVertical: 120 ,
    backgroundColor: '#fff',
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00,

elevation: 24,
  },
  text: {
    marginVertical:10,
    fontSize: 24
  },
  button: {
    marginVertical:10,
    paddingVertical: 20
  }
});
