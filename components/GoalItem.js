
import { StyleSheet, Text, Pressable, View, Platform } from 'react-native'
import React from 'react'

const GoalItem = ({ itm, onDeleteGoal }) => {

    const onDeleteTheGoal = (itm) => {
        onDeleteGoal(itm?.id);
    }

    return (
        // Second way with bind method which is coming from the video
        // <Pressable android_ripple={{ color: '#dddddd' }} style={styles.goalItem} onPress={onDeleteGoal.bind(this, itm?.id)}>
        <>
            <View style={styles.goalItem}>
                <Pressable android_ripple={{ color: '#dddddd' }} onPress={() => onDeleteTheGoal(itm)} style={({ pressed }) => (Platform.OS === 'ios' && pressed) && styles.pressedItem}>
                    <Text style={styles.goalText}>{itm?.text}</Text>
                </Pressable>
            </View>
        </>
    )
}

export default GoalItem

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc'
    },
    pressedItem: {
        opacity: 0.5,
    },
    goalText: {
        padding: 8,
        color: 'white'
    },
})