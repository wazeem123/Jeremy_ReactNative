import React, { useState } from 'react';
import { Image, StyleSheet, Text, View,FlatList, SafeAreaView,Modal,TouchableHighlight, ScrollView } from 'react-native';
import { Entypo,AntDesign} from '@expo/vector-icons';
import Form from "./form"


export default function Home() {
  
  const [modalVisible, setModalVisible] = useState(false);
    const [reviews,setReviews] = useState([
        {title:"Hi",key:1},
        {title:"Hello",key:2},
        {title:"Bye",key:3},
        {title:"Hoorey",key:4},
    ])

    const addReview = (review)=>{
      review.key=Math.random().toString()
      setReviews((currentReviews)=> {
          return[review,...currentReviews]
      });
      setModalVisible(false)
  }

  return (
      <ScrollView contentContainerStyle={{flex:1,backgroundColor:"#1b0547",padding:48}}>
      <Text style={styles.text}>Coding</Text>
      <Image style={styles.image} source={require("../assets/ima.png")}/>
      <Text style={styles.text}>Coding is something interesting</Text> 

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            
         <Form addReview={addReview}/>

          </View>
        </View>
      </Modal>

      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}>
          <View style={styles.ant}>
          <AntDesign name="pluscircleo" size={24} color="white" />
        <Text style={styles.textStyle}>Add Items</Text>
        </View>
      </TouchableHighlight>

      <FlatList 
      data={reviews}
      renderItem={({item})=>(
          <View style={styles.reviewItem}>
            <Text style={styles.reviewText}>{item.title}</Text>
            <View style={{flexDirection:"row",alignContent:"center"}}>
              <Text style={{flexDirection:"row",alignSelf:"center",color:"white",textAlign:"right"}}>0</Text>
              <Entypo style={{flexDirection:"row",alignSelf:"center",textAlign:"right"}} name="chevron-small-right" size={24} color="white"/>
            </View>
          </View>
      )} 
      />
    
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  
  image:{
    width:200,
    height:200,
    alignSelf:"center"
  },
  text:{
      color:"white",
      fontSize:20,
      marginBottom:20,
      textAlign: 'center',
      
  },
  reviewText:{
    color:"white",
    padding:15,
    borderBottomColor:"white",
    
  },
  reviewItem:{
    flexDirection:"row",
    borderBottomWidth:1,
    borderBottomColor:"white",
    
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
   
    padding: 10,
    
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  ant:{
    flexDirection:"row"
  }
});
