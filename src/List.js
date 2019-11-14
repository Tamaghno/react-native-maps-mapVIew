import React from 'react';
import { View, Text, Image, TouchableOpacity, Button, ScrollView, Alert} from 'react-native';

const styles={
    list:{
        width:'100%',
        height:60,
        // borderBottomColor:'red',
        // borderBottomWidth:1,
        // marginBottom:10
        display:'flex',
        flexDirection:'row',
    },
    listLeft:{
        display:'flex',
        flexBasis:'20%',
        justifyContent:'center',
        alignItems:'center',
    },
    listRight:{
        display:'flex',
        flex:1,
        justifyContent:'center',
        alignItems:'flex-start',
        paddingLeft:10

    },
    image:{
        width:50,
        height:50,
        borderRadius:25
    },
    circle:{
        width:10,
        height:10,
        borderRadius:25,
        position:'absolute',
        bottom:10,
        right:10
    },
    container:{
        display:'flex',
        flex:1,
        padding:10
    },
}
const Item=(props)=>{
    return(
        <View style={styles.list}>
            <View style={styles.listLeft}>
            <Image style={styles.image} source={{uri:props.data.imageUrl}}/>
            </View>
            <View style={styles.listRight}>
                <Text>{props.data.name}</Text>
                <Text>{props.data.status}</Text>
            </View>
            <View
            style={[
                styles.circle,
                {
                    backgroundColor:props.data.status ==="online"?"green":"red"
                }
            ]}/>
            
            
        <Text>{props.text}</Text>
        </View>
    );
};
class List extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[
                {
                     name:'Tamaghno',
                     imageUrl:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.slantmagazine.com%2Fwp-content%2Fuploads%2F2018%2F05%2Fimagebook-2.jpg&f=1&nofb=1',
                     status:'online'
                },
                {
                    name:'Tamaghno2',
                    imageUrl:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.slantmagazine.com%2Fwp-content%2Fuploads%2F2018%2F05%2Fimagebook-2.jpg&f=1&nofb=1',
                    status:'online'
               },
               {
                    name:'Tamaghno3',
                    imageUrl:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.slantmagazine.com%2Fwp-content%2Fuploads%2F2018%2F05%2Fimagebook-2.jpg&f=1&nofb=1',
                    status:'online'
                },
                {
                    name:'Tamaghno4',
                    imageUrl:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.slantmagazine.com%2Fwp-content%2Fuploads%2F2018%2F05%2Fimagebook-2.jpg&f=1&nofb=1',
                    status:'offline'
                },
                {
                    name:'Tamaghno4',
                    imageUrl:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.slantmagazine.com%2Fwp-content%2Fuploads%2F2018%2F05%2Fimagebook-2.jpg&f=1&nofb=1',
                    status:'offline'
                },
                {
                    name:'Tamaghno4',
                    imageUrl:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.slantmagazine.com%2Fwp-content%2Fuploads%2F2018%2F05%2Fimagebook-2.jpg&f=1&nofb=1',
                    status:'offline'
                },
                {
                    name:'Tamaghno4',
                    imageUrl:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.slantmagazine.com%2Fwp-content%2Fuploads%2F2018%2F05%2Fimagebook-2.jpg&f=1&nofb=1',
                    status:'offline'
                },
                {
                    name:'Tamaghno4',
                    imageUrl:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.slantmagazine.com%2Fwp-content%2Fuploads%2F2018%2F05%2Fimagebook-2.jpg&f=1&nofb=1',
                    status:'offline'
                },
                {
                    name:'Tamaghno4',
                    imageUrl:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.slantmagazine.com%2Fwp-content%2Fuploads%2F2018%2F05%2Fimagebook-2.jpg&f=1&nofb=1',
                    status:'offline'
                },
                {
                    name:'Tamaghno4',
                    imageUrl:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.slantmagazine.com%2Fwp-content%2Fuploads%2F2018%2F05%2Fimagebook-2.jpg&f=1&nofb=1',
                    status:'offline'
                },
                {
                    name:'Tamaghno4',
                    imageUrl:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.slantmagazine.com%2Fwp-content%2Fuploads%2F2018%2F05%2Fimagebook-2.jpg&f=1&nofb=1',
                    status:'offline'
                },
                {
                    name:'Tamaghno4',
                    imageUrl:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.slantmagazine.com%2Fwp-content%2Fuploads%2F2018%2F05%2Fimagebook-2.jpg&f=1&nofb=1',
                    status:'offline'
                },
                {
                    name:'Tamaghno4',
                    imageUrl:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.slantmagazine.com%2Fwp-content%2Fuploads%2F2018%2F05%2Fimagebook-2.jpg&f=1&nofb=1',
                    status:'offline'
                },
            ]

        }
    }
    render(){
        return(
            <View style={styles.container}>
            <ScrollView>
            {
                this.state.data.map((item)=>{
                    return <Item key={item} data={item}/>
                })
            }
            </ScrollView>
            </View>

        );
    }
}
export default List;