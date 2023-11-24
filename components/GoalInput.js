import { Button, Modal, StyleSheet, TextInput, View, Image } from 'react-native'
import React, { useCallback, useState } from 'react'

const GoalInput = ({ onAddTheGoal, visible, onCancel }) => {
    const [enterredText, setEnterredText] = useState('');

    const inputGoalHandler = (enterredText) => {
        setEnterredText(enterredText);
    }

    const onAddGoalHandler = (storingGoal) => {
        onAddTheGoal(storingGoal);
        setEnterredText('')
    }
    return (
        <Modal visible={visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <Image style={styles.images} source={require('../assets/images/goal.png')} />
                <TextInput
                    defaultValue={enterredText}
                    placeholder='Enter your Course Goals'
                    onChangeText={(enterredText) => inputGoalHandler(enterredText)}
                    style={styles.textInput} />
                <View style={styles.buttonContainer}>
                    <View>
                        <Button title='Cancel' color='#f31282' style={styles.button} onPress={onCancel} />
                    </View>
                    <View style={styles.button}>
                        <Button title='Add Goal' color='#5e0acc' onPress={() => {
                            if (!enterredText) return;
                            onAddGoalHandler(enterredText);
                        }} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#311b6b'
    },
    textInput: {
        width: '100%',
        borderWidth: 2,
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderRadius: 6,
        borderColor: '#e4d0ff',
        padding: 9,
    },
    buttonContainer: {
        marginTop: 15,
        marginLeft: 14,
        justifyContent: 'center',
        flexDirection: 'row',
    },
    button: {
        width: 100,
        marginHorizontal: 8
    },
    images: {
        height: 100,
        width: 100,
        margin: 20
    },
})