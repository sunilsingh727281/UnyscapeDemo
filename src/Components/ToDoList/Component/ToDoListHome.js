import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, FlatList, TouchableOpacity, Dimensions, Alert } from 'react-native'
import { connect } from 'react-redux'
import ALL_API from '../../../Utility/APIConstants'
import * as ALL_ACTIONS from '../actions/ToDoActions'
import AllImages from '../../../Constants/ImageConstants'
import { Actions } from 'react-native-router-flux'
import commonStyle from '../../../Constants/commonStyle'
import ModalDropdown from 'react-native-modal-dropdown';




import {
    BallIndicator,
    BarIndicator,
    DotIndicator,
    MaterialIndicator,
    PacmanIndicator,
    PulseIndicator,
    SkypeIndicator,
    UIActivityIndicator
} from 'react-native-indicators';

const WT = Dimensions.get('window').width
const HT = Dimensions.get('window').height


export class ToDoListHome extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoading: true,
            FromArr: ['Completed', 'Incompleted', 'All ToDos'],
            defaultFrom: 'All ToDos',
            selectedFromCityId: '',

            completedToDo: [],
            incompletedToDO: [],
            allToDos: [],

            dataArr:[],
        }

    }

    componentDidMount() {

        // get all todo list when screen apears

        this.subs = [
            this.props.navigation.addListener('didFocus', this.onScreenFocus)
        ];

    }
    onScreenFocus = async () => {
        debugger
        this.props.getYourToDoList()
       
    }
    componentWillUnmount() {
        this.subs.forEach((sub) => {
            sub.remove();
        });
    }


    componentDidUpdate(prevProps, prevState) {
        debugger
        if (this.props.getTodoListDict != prevProps.getTodoListDict) {

            debugger

            var completedToDos = this.props.getTodoListDict.filter((item, index) => {
                return item.completed == true
            })
            var inCompletedToDos = this.props.getTodoListDict.filter((item, index) => {
                debugger
                return item.completed == false
            })
            this.setState({
                isLoading: this.props.isLoading,
                allToDos: this.props.getTodoListDict,
                completedToDo: completedToDos,
                incompletedToDO: inCompletedToDos,
                dataArr:this.props.getTodoListDict
            })
        }



        if (prevProps.updateTodoListDict != this.props.updateTodoListDict) {

            this.setState({
                isLoading: this.props.isLoading
            })

            this.props.getYourToDoList()
        }



    }

    // _onLongPress=(item)=>{

    // }
    renderItem = ({ item }) => (

        <TouchableOpacity
            onLongPress={() => {
                Alert.alert(
                    'Info',
                    'Dou want to delete this task from list',
                    [
                        {
                            text: 'YES',
                            onPress: () => {
                                this.props.deleteTask(item.id)
                            }
                        },
                        {
                            text: 'NO',
                            onPress: () => {

                            }
                        }
                    ]
                )
            }}
            onPress={() => {

                if (item.completed == false) {
                    Alert.alert(
                        'Info',
                        'Dou want to mark this task as completed?',
                        [
                            {
                                text: 'YES',
                                onPress: () => {
                                    this.props.editTask(item, item.id)
                                }
                            },
                            {
                                text: 'NO',
                                onPress: () => {

                                }
                            }
                        ]
                    )
                } else {
                    Alert.alert(
                        'Info',
                        'Task is already completed',
                    )
                }


            }}
        >
            <View style={[styles.item, { backgroundColor: item.completed ? 'green' : 'yellow', marginTop: 5 }]}>
                <Text style={[styles.title, { textDecorationLine: item.completed ? 'line-through' : 'none' }]}>{item.title}</Text>
            </View>
        </TouchableOpacity>

    );


    fromSelected(selectedValue) {
        debugger
        this.setState({
            defaultFrom: this.state.FromArr[selectedValue],
            //   selectedFromCityId: this.state.originArr[selectedValue].ID,
        }, () => {
            debugger
            if (this.state.defaultFrom == 'Completed') {
                this.setState({
                    dataArr: this.state.completedToDo
                })
            } else if (this.state.defaultFrom == 'Incompleted') {
                this.setState({
                    dataArr: this.state.incompletedToDO
                })
            }else{
                this.setState({
                    dataArr: this.state.allToDos
                })
            }
        })
    }

    render() {
        return (
            <View style={styles.parent}>
                {(this.state.isLoading || this.props.isLoading1 || this.props.isLoading2) && <View style={[commonStyle.loading]}>
                    <BallIndicator color='blue' />
                </View>}

                <View style={{ flexDirection: 'row', width: '100%' }} >
                    <ModalDropdown
                        dropdownStyle={{ width: '95%', height: 'auto', marginTop: 5 }}
                        dropdownTextStyle={{ fontSize: 15, textAlign: 'left', }}
                        style={{ width: '100%', height: 50, borderWidth: 1, borderColor: 'rgb(110,167,207)', marginTop: 5, borderRadius: 5, }}
                        textStyle={{
                            textAlign: 'left', paddingTop: 15, color: 'black', marginLeft: 10, fontWeight: '400',
                            fontSize: 16, height: 40
                        }}

                        options={this.state.FromArr}
                        defaultValue={this.state.defaultFrom}
                        value={this.state.defaultFrom}
                        onSelect={(defaultFrom) => this.fromSelected(defaultFrom)}


                    />

                    <Image
                        style={{ marginTop: 10, position: 'absolute', marginLeft: '90%', height: 10, marginTop: 20 }}
                        source={AllImages.homeIMage.down} />

                </View>


                <FlatList
                    data={this.state.dataArr}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.id}
                />
                <TouchableOpacity
                    onPress={() => {
                        Actions.AddNewTask()
                    }}
                    style={{ position: 'absolute', marginLeft: '83%', marginTop: HT / 1.4 }}>
                    <Image
                        source={AllImages.homeIMage.addImage}
                        style={{ height: 40, width: 40 }}
                    >

                    </Image>
                </TouchableOpacity>


            </View>
        )
    }
}

const styles = StyleSheet.create({
    parent: {
        flex: 1,

    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        paddingVertical: 10,

    },
})

function mapStateToProps(state) {
    return {

        // get todo list dict

        getTodoListDict: state.GetToDoListRed.getTodoListDict,
        isLoading: state.GetToDoListRed.isLoading,
        error: state.GetToDoListRed.error,

        // update todo list dict
        updateTodoListDict: state.UpdateTodoRed.updateTodoListDict,
        isLoading1: state.UpdateTodoRed.isLoading1,
        error: state.UpdateTodoRed.error,

        //delete todo list dict
        deletedTodoListDict: state.DeleteTaskRed.deletedTodoListDict,
        isLoading2: state.DeleteTaskRed.isLoading2,
        error: state.DeleteTaskRed.error,



    }
}


function mapDispatchToProps(dispatch) {
    return {
        getYourToDoList: () => dispatch(ALL_ACTIONS.getYourToDoList(ALL_API.todo_homepage.todo,
            {

            }
        )),

        editTask: (item, todoId) => dispatch(ALL_ACTIONS.editTask(ALL_API.todo_homepage.todo + todoId,
            {
                'title': item.title,
                'userId': item.userId,
                'completed': true
            }
        )),

        deleteTask: (todoId) => dispatch(ALL_ACTIONS.deleteTask(ALL_API.todo_homepage.todo + todoId,
            {

            }
        )),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoListHome);