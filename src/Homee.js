import { View, Text, Image, TouchableOpacity, Button, ScrollView } from 'react-native';
import React from 'react';
import MapView, {Marker}from 'react-native-maps';
//import { Colors } from 'react-native/Libraries/NewAppScreen';
import b from "../assets/b.jpeg";
class Home extends React.Component{
    constructor(props)
    {
        super(props)
    this.state={
        bool:false
    };
    }
    
    press=()=>{
        if(!this.state.bool)
        this.setState({bool:true});
        else
        this.setState({bool:false});
    }
    render()
    {
        var mapStyle=[{"elementType": "geometry", "stylers": [{"color": "#242f3e"}]},{"elementType": "labels.text.fill","stylers": [{"color": "#746855"}]},{"elementType": "labels.text.stroke","stylers": [{"color": "#242f3e"}]},{"featureType": "administrative.locality","elementType": "labels.text.fill","stylers": [{"color": "#d59563"}]},{"featureType": "poi","elementType": "labels.text.fill","stylers": [{"color": "#d59563"}]},{"featureType": "poi.park","elementType": "geometry","stylers": [{"color": "#263c3f"}]},{"featureType": "poi.park","elementType": "labels.text.fill","stylers": [{"color": "#6b9a76"}]},{"featureType": "road","elementType": "geometry","stylers": [{"color": "#38414e"}]},{"featureType": "road","elementType": "geometry.stroke","stylers": [{"color": "#212a37"}]},{"featureType": "road","elementType": "labels.text.fill","stylers": [{"color": "#9ca5b3"}]},{"featureType": "road.highway","elementType": "geometry","stylers": [{"color": "#746855"}]},{"featureType": "road.highway","elementType": "geometry.stroke","stylers": [{"color": "#1f2835"}]},{"featureType": "road.highway","elementType": "labels.text.fill","stylers": [{"color": "#f3d19c"}]},{"featureType": "transit","elementType": "geometry","stylers": [{"color": "#2f3948"}]},{"featureType": "transit.station","elementType": "labels.text.fill","stylers": [{"color": "#d59563"}]},{"featureType": "water","elementType": "geometry","stylers": [{"color": "#17263c"}]},{"featureType": "water","elementType": "labels.text.fill","stylers": [{"color": "#515c6d"}]},{"featureType": "water","elementType": "labels.text.stroke","stylers": [{"color": "#17263c"}]}];
        return(
            
      
        <View style = {styles.container}>
        <MapView style={styles.map} 
        region={{
            latitude: 22.684668,
            longitude: 88.370651,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1
        }}
        customMapStyle={mapStyle}>
        <Marker
        draggable
        coordinate={{
          latitude: 27.78825,
          longitude: 89.4324,
        }}
        onDragEnd={(e) => alert(JSON.stringify(e.nativeEvent.coordinate))}
        title={'Test Marker'}
        description={'This is a description of the marker'}
      />
      </MapView>
        <ScrollView>
        <Text style = {styles.Text}>Restaurants</Text>
        <Image style = {styles.Image} source={{uri:'https://www.stlmag.com/downloads/291284/download/0219_Elmwood_0016.jpg?cb=05f56521ae049e15a8f3d244cafb3822&w=640'}}/>
        
        <Text style = {styles.Text2}>A restaurant, or an eatery, is a business that prepares and serves food and drinks to customers as for the profit. Meals are generally served and eaten on the premises, but many restaurants also offer take-out and food delivery services</Text>
        <TouchableOpacity style= {styles.button} >
        <Text style = {styles.buttonText} onPress={this.press}> BOOK </Text>
        </TouchableOpacity>
        <Button
        onPress={() => {
        alert('You tapped your table!');
        }}
        title="BOOK"/>
        {this.state.bool && <Text style = {styles.Text3}> thank you </Text>}
        
        <Text style={{fontSize:10}}>map integrated</Text>
        <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
        
       
      
      </ScrollView>
      </View>
    );
    } 
}
const styles={
    container:{
        display:'flex',
        flex:1,
        borderColor:'black',
        borderWidth:1
    },
    Text:{
        fontSize:40,
        color:'white',
        paddingBottom:5,
        paddingTop:25,
        fontFamily: 'LiuJianMaoCao-Regular',
    },
    Text2:{
        fontSize:20,
        color:'white',
        paddingBottom:2,
        marginLeft:10,
        fontFamily: 'SourceSansPro-Regular'
        
    },
    Text3:{
        marginLeft:65,
        fontSize:50
    },
    Image:{
        width:430,
        height:200,
        borderColor:'black',
        borderWidth:2,
        paddingLeft:5
    },
    button:{
        width:50,
        height:5,
        borderColor:'blue',
        borderWidth:1,
        marginLeft:150
    },
    buttonText:{
        color:'red',
        fontSize:20
        

    },
    map:{
        
        
        position:'absolute',
       // paddingTop:500,
        top:0,
        left:0,
        bottom:0,
        right:0
    }
}

export default Home;