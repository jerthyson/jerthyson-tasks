import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    TouchableOpacity
} from 'react-native'

import Swipeable from 'react-native-gesture-handler/Swipeable'
import Icon from 'react-native-vector-icons/FontAwesome'

import moment from 'moment'
import 'moment/locale/pt-br'


export default props =>{

    const doneOrNotStyle = props.doneAt != null ? 
        { textDecorationLine: 'line-through' } : {}

    const date = props.doneAt ? props.doneAt : props.estimateAt
    const formattedDate = moment(date).locale('pt-br')
            .format('ddd, D [de] MMMM')

    const getRightContent = () => {
     return (
             <TouchableOpacity style={styles.right}>
                   <Icon name="trash" size={30} color='#FFF' />
            </TouchableOpacity>
                
         )
    }
            

    return(

        <Swipeable  
        renderRightActions={getRightContent}>
             <View style = {styles.container}>
             
             <TouchableWithoutFeedback 
             onPress = {() => props.toggleTask(props.id)}>
    
    
             <View style={styles.checkContainer}>
              {getCheckView(props.doneAt)}
             </View>
             </TouchableWithoutFeedback>
            
           
            <View >
               <Text style={[styles.desc, doneOrNotStyle]}>{props.desc}</Text>
               <Text style={styles.date}>{formattedDate}</Text>
            </View>
           
             </View>
        </Swipeable>
       

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
    right: {
        backgroundColor: 'red',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingHorizontal: 20
    }

})