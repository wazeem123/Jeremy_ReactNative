import React from 'react';
import { Image, StyleSheet, Text, View,FlatList,ScrollView } from 'react-native';
import { Entypo} from '@expo/vector-icons';


export default function Profile() {
    const [reviews,setReviews] = React.useState([
        {title:"Name",key:1},
        {title:"Age",key:2},
        {title:"Gender",key:3},
        {title:"Country",key:4},
    ])

  return (
    
    <ScrollView contentContainerStyle={{flex:1,backgroundColor:"#ea8ced",padding:10}}>
        <View style={styles.imageContent}>
            <Image style={styles.image} source={require("../assets/download.jpeg")}/>
            <Text style={styles.nameText}>Musk</Text>
        </View>
        <View style={styles.bar}>

        </View>
        <View style={styles.detailsContent}>
            <View style={styles.name}>
                <Text style={styles.name}>Name</Text>
                <Text style={styles.name}>9</Text>
            </View>
            <View style={styles.instituteContent}>
            <View style={styles.institute}> 
                <Text style={styles.name}>Institute</Text>
                <Text style={styles.name}>9</Text>
            </View>
            </View>
            <View style={styles.course}>
                <Text style={styles.name}>Course</Text>
                <Text style={styles.name}>9</Text>
            </View>
        </View>
  
      <View style={styles.flatList}>
        <View style={styles.flatListContainer}>
        <FlatList 
      data={reviews}
      renderItem={({item})=>(
          <View style={styles.reviewItem}>
            <Text style={styles.reviewText}>{item.title}</Text>
            <View style={{flexDirection:"row",alignItems:"flex-end"}}>
              <Entypo style={{alignSelf:"center",}} name="chevron-small-right" size={24} color="white"/>
            </View>
          </View>
      )} 
      />

        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatList:{
    right:10,
    backgroundColor:"#1b0547",
    justifyContent:"flex-end",
   width:395
  },
  flatListContainer:{
    marginHorizontal:10,
    marginVertical:10,
    height:500,
    backgroundColor:"#1b0547",
  },
  image:{
      width:100,
      height:100,
      borderRadius:100,
      right:5
  },
  imageContent:{
      flexDirection:"row",
      marginVertical:50,
      left:30,
  },
  nameText:{
    color:"white",
    alignSelf:"center",
    marginHorizontal:50,
    right:30
  },
  bar:{
    borderWidth:15,
    borderColor:"#bb36d6",
    marginBottom:10,
    marginHorizontal:25,
    right:10
  },
  detailsContent:{
      flexDirection:"row",
      justifyContent:"center",
      marginVertical:15,
      right:10
  },
  name:{
    color:"white",
    alignSelf:"center",
    
  },
  institute:{
      
      marginHorizontal:40
  },
  instituteContent:{
    borderLeftWidth:2,
    borderRightWidth:2,
    borderLeftColor:"white",
    borderRightColor:"white",
    marginHorizontal:50
},
reviewText:{
    color:"white",
    padding:15,
    borderBottomColor:"white",
    
  },
  reviewItem:{
    flexDirection:"row",
    
  },
  
});
