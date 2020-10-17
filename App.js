import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
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
		setTaskList(taskList => [...taskList, inputText]);
		setInputText('');
		// console.log('I am clicked');
		// console.log(taskList);
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

			{taskList.map((value, index) => {
				return (
					<View style={design.taskListHolder} key={index}>
						<Text style={design.task}>{value}</Text>
					</View>
				);
			})}
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
		marginRight:5
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
