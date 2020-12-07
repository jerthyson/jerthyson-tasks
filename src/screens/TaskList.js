import React,{ Component} from 'react'
import {View,Button, Text, ImageBackground, StyleSheet,FlatList,TouchableOpacity, Platform,} from 'react-native'

import moment from 'moment'
import 'moment/locale/pt-br'


import TodayImage from '../../assets/imgs/today.jpg'
import commonStyles from '../CommonStyles.js'
import Task from '../components/Task'

import Icon from 'react-native-vector-icons/FontAwesome'

export default class TaskList extends Component{

    state = {
        /*Atributo para mostar ou não se as task estão concluidas*/
        showDoneTasks : true, 
        tasks:[{
            id : Math.random(),
            desc : 'Comprar livro de React Native',
            estimateAt: new Date(),
            doneAt: new Date(),
        },{
            id : Math.random(),
            desc : 'Ler livro de React Native',
            estimateAt: new Date(),
            doneAt: null,
        }]
    }
    
    toggleFilter = () => {
        this.setState({ showDoneTasks: !this.state.showDoneTasks }, this.filterTasks)
    }
    /*Marcar e desmarcar*/
    toggleTask = tasKid =>{
        const tasks = [...this.state.tasks]
        tasks.forEach(task => {
            if(task.id == tasKid){
                task.doneAt =  task.doneAt ? null : new Date()
            }
        })

        this.setState({ tasks })

    }

    render(){
        const today = moment().locale('pt-br').format('ddd, D [de] MMMM')
        return(
            
            <View style ={styles.container}>

                 <ImageBackground source ={TodayImage}
                    style ={styles.background}>
                
                <View style ={styles.iconBar}>
                <TouchableOpacity onPress={this.toggleFilter}>
                        <Icon name={this.state.showDoneTasks ? 'eye' : 'eye-slash'}
                              size={20} color={commonStyles.colors.secondary} />
                </TouchableOpacity>
                </View>


                <View style={styles.titleBar}>
                     <Text style={styles.title}>Hoje</Text>
                    <Text style={styles.subtitle}>{today}</Text>
                  </View> 


                 </ImageBackground>
                  <View style={styles.TaskList}>

                    <FlatList  data ={this.state.tasks} 
                          keyExtractor={item => `${item.id}`}
                         renderItem = {({item}) => <Task {...item} toggleTask = {this.toggleTask}   />} />

                  </View> 

           </View>
        )
    }

}

const styles = StyleSheet.create({
    container :{
        flex: 1
    },
    background:{
        flex: 3
    },
    TaskList:{
        flex: 7
    },
    titleBar:{
        flex: 1,
        justifyContent: 'flex-end'
    },
    title:{
        fontFamily: commonStyles.fontFamily,
        color: '#f0f0f0',
        fontSize: 50,
        marginLeft: 20,
        marginBottom: 20
      
    },
    subtitle: {
        fontFamily: commonStyles.fontFamily,
        color: '#f0f0f0',
        fontSize: 20,
        marginLeft: 20,
        marginBottom: 30
    },
    iconBar: {
        flexDirection: 'row',
        marginHorizontal: 20,
        justifyContent: 'flex-end',
        marginTop: Platform.OS === 'ios' ? 40 : 10
    },
    addButton: {
        position: 'absolute',
        right: 30,
        bottom: 30,
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: commonStyles.colors.today,
        justifyContent: 'center',
        alignItems: 'center'
    },

});