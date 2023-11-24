import { Button, FlatList, StyleSheet, Text, View, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import GoalInput from './components/GoalInput'
import GoalItem from './components/GoalItem';
import { StatusBar } from 'expo-status-bar';

const App = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [courseGoals, setCourseGoals] = useState([]);

    const onAddGoalsHandler = (existingGoals) => {
        setCourseGoals((currentGoals) => [...currentGoals,
        { text: existingGoals, id: Math.random().toString() }]);
        cancelGoallHandler();
    }

    const startAddGoalHandler = () => {
        setIsModalVisible(true)
    };

    const cancelGoallHandler = () => {
        setIsModalVisible(false)
    };

    const deleteGoalHanlder = (id) => {
        setCourseGoals((currentGoals) => {
            return currentGoals.filter((item) => {
                return item.id !== id
            })
        })

    }

    return (
        <>
            <StatusBar style='light' />
            <View style={styles.appContainer}>
                <Button title='Add New Goal' color='#7c29e7' onPress={() => startAddGoalHandler()} />
                <GoalInput visible={isModalVisible} onCancel={() => cancelGoallHandler()} onAddTheGoal={(existingGoals) => onAddGoalsHandler(existingGoals)} />
                <View style={styles.goalsContainer}>
                    <Text style={styles.goalListText}>List of Goals</Text>
                    <FlatList data={courseGoals} renderItem={({ item }) => {
                        return <GoalItem itm={item} onDeleteGoal={(id) => {
                            ToastAndroid.show('Goal Deleted Sucessfully.', ToastAndroid.CENTER);
                            deleteGoalHanlder(id)
                        }} />
                    }}
                        keyExtractor={(item, index) => {
                            return item?.id;
                        }}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            </View >
        </>
    )
}

export default App

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: '18%',
        paddingHorizontal: 15,
        backgroundColor: '#1e0858'
    },
    goalListText: {
        alignItems: 'center',
        textAlign: 'center',
        color: 'white',
        marginTop: '12%',
        padding: 5,
        marginBottom: 8,
        borderRadius: 6,
        backgroundColor: '#3f13ad',
    },
    goalsContainer: {
        flex: 4,
    },
})