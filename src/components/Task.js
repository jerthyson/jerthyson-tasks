import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    TouchableOpacity
} from 'react-native'


import Icon from 'react-native-vector-icons/FontAwesome'


export default props =>{

    const doneOrNotStyle = props.doneAt != null ? 
        { textDecorationLine: 'line-through' } : {}

    

    return(

        <View style = {styles.container}>
             
             <TouchableWithoutFeedback 
             onPress = {() => props.toggleTask(props.id)}>
    
    
             <View style={styles.checkContainer}>
              {getCheckView(props.doneAt)}
             </View>
             </TouchableWithoutFeedback>
            
           
            <View >
               <Text style={[styles.desc, doneOrNotStyle]}>{props.desc}</Text>
               <Text style ={styles.date} >{props.estimateAt + ""}</Text>
            </View>
           
           
        
        </View>


    )

}

function getCheckView(doneAt){
    if(doneAt != null) {
        return (
            <View style={styles.done}>
                <Icon name='check' size={20} color='#FFF'></Icon>
            </View>
        )
    } else {
        return (
            <View style={styles.pending}></View>
        )
    }
}

const styles = StyleSheet.create({

    container:{
        flexDirection: 'row',
        borderColor: '#AAA',
        borderBottomWidth: 1,
        alignItems: 'center',
        paddingVertical: 10,
        backgroundColor: '#FFF'
    },
    checkContainer: {
        width: '20%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    pending: {
        height: 25,
        width: 25,
        borderRadius: 13, /*Fazendo um bola no css */ 
        borderWidth: 1,
        borderColor: '#555'
    },
    done: {
        height: 25,
        width: 25,

        borderRadius: 13,
        backgroundColor: '#009900',
        alignItems: 'center',
        justifyContent: 'center'
    },
    desc: {
        fontFamily: 'Open Sans',
        color: '#666666',
        fontSize: 15
    },
    date: {
        fontFamily: 'Roboto',
        color: '#b8b8b8',
        fontSize: 12
    },


})