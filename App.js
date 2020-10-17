import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {

	const [inputText, setInputText] = useState('');

	const textChangeHandler = (enteredText) => {
		setInputText(inputText => enteredText);
		// console.log(inputText);
		// console.log(e.target.value);
	}

	const [taskList, setTaskList] = useState([]);

	const onPressHandler = () => {
		setTaskList(taskList => {
			return [
				...taskList,
				{
					id: Math.random().toString(),
					value: inputText
				}]
		});

		// console.log(taskList);

		// data = [
		// 	{
		// 		id: '1',
		// 		value:'Task1' 
		// 	},
		// 	{
		// 		id:'2',
		// 		value:'Task2'
		// 	}
		// ];


		setInputText('');
		// console.log('I am clicked');
		// console.log(taskList);
	}

	const removeTask = (taskId) => {
		// console.log('remove able task is ',taskId);
		setTaskList(taskList => taskList.filter((item) => item.id !== taskId));
	}
	return (
		<View style={design.container}>
			<View style={design.form}>
				<View style={design.inputControl}>
					<TextInput placeholder="Enter Task" value={inputText} onChangeText={textChangeHandler} />
				</View>
				<View style={design.btn}>
					<Button title="Add New Task" onPress={onPressHandler} />
				</View>
			</View>

			{/* {taskList.map((value, index) => {
				return (
					<View style={design.taskListHolder} key={index}>
						<Text style={design.task}>{value}</Text>
					</View>
				);
			})} */}
			{/* <FlatList
				data={taskList}
				renderItem={() => {
					return (
						<TouchableOpacity activeOpacity="0.5" style={design.taskListHolder} onPress={() => console.log('I am clicked')}>
							<Text style={design.task}>Demo</Text>
						</TouchableOpacity>
					);
				}}
			/> */}

			<FlatList
				data={taskList}
				renderItem={(myTask) => {
					return (
						<TouchableOpacity activeOpacity="0.2" style={design.taskListHolder} onLongPress={() => {
							removeTask(myTask.item.id)
						}}>
							<Text style={design.task}>{myTask.item.value}</Text>
						</TouchableOpacity>
					);
				}}
			/>
			<StatusBar style="auto" />
		</View>
	);
}

const design = StyleSheet.create({
	container: {
		margin: 20,
		// backgroundColor:'red'
	},
	form: {
		width: '100%',
		display: 'flex',
		flexDirection: 'row'
	},
	inputControl: {
		flex: 3,
		borderWidth: 1,
		borderColor: 'black',
		padding: 7,
		marginRight: 5
	},
	btn: {
		flex: 1
	},
	task: {
		backgroundColor: 'blue',
		color: 'white',
		padding: 5,
		borderWidth: 2,
		borderColor: 'black',
		marginTop: 5,
		marginBottom: 5,
		fontSize: 19
	},
	taskListHolder: {

	}

});
