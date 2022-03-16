
import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, FlatList, TouchableOpacity, Dimensions, TextInput, Alert } from 'react-native'
import { connect } from 'react-redux'
import ALL_API from '../../../Utility/APIConstants'
import * as ALL_ACTIONS from '../actions/AddTaskAction'
import AllImages from '../../../Constants/ImageConstants'
import commonStyle from '../../../Constants/commonStyle'

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
import { Actions } from 'react-native-router-flux'
const WT = Dimensions.get('window').width
const HT = Dimensions.get('window').height


export class AddNewTask extends Component {
    constructor(props) {
        super(props)

        this.state = {
            newTask: '',
            isLoading: false,
        }
    }
  
    componentDidUpdate(prevProps, prevState) {

        debugger
        if (this.props.addToDoDict != prevProps.addToDoDict) {
            Alert.alert(
                'info',
                this.props.addToDoDict.title + 'has been added as a new task into todo list.'
            )

            this.setState({
                newTask:'' 
            })
            debugger
            Actions.pop()
        }

    }

    render() {
        return (
            <View style={styles.parent}>
                {this.props.isLoading && <View style={[commonStyle.loading]}>
                    <BallIndicator color='blue' />
                </View>}

                <View style={{ marginTop: 10 }}>
                    <Text style={styles.placeHolderHeadingText}>{'Add New Task'}</Text>

                    <TextInput
                        placeholder={'Add New Task'}
                        autoFocus={true}
                        value={this.state.newTask}
                        autoCorrect={false}
                        onChangeText={(newTask) => this.setState({ newTask })}
                        style={styles.textplaceHolder}
                        secureTextEntry={false}
                    />
                </View>


                <TouchableOpacity
                    onPress={() => {
                        if (this.state.newTask == '') {
                            Alert.alert('Please add task description')
                        } else {
                            this.props.addNewTask(this.state.newTask)
                        }

                    }}
                    style={styles.btnStyle}>
                    <Text style={styles.btnTextStyle}>{'SUBMIT'}</Text>

                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        paddingHorizontal: 20

    }, placeHolderHeadingText: {

        fontSize: 13,
        color: 'gray',
        paddingTop: 5,
        paddingBottom: 2,
    },
    textplaceHolder: {
        borderRadius: 12,
        borderColor: 'blue',
        borderWidth: 0.5,
        paddingVertical: Platform.OS === 'ios' ? 15 : 8,
        marginTop: 5,
        paddingHorizontal: 10,

    },
    btnStyle: {
        width: '100%',
        height: 40,
        marginTop: 30,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7
    },
    btnTextStyle: {
        color: 'white',
        fontWeight: '500',

    }
})

function mapStateToProps(state) {
    return {
        addToDoDict: state.AddToDoRed.addToDoDict,
        isLoading: state.AddToDoRed.isLoading,
        error: state.AddToDoRed.error,

    }
}


function mapDispatchToProps(dispatch) {
    return {

        addNewTask: (newTask) => dispatch(ALL_ACTIONS.addNewTask(ALL_API.todo_homepage.todo,
            {
                'title': newTask,
                'userId': '1',
                'completed': false
            }
        )),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewTask);