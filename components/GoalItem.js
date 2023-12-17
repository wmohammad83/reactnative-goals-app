import { StyleSheet, View, Text } from 'react-native';

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{props.text}</Text>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 18,
    borderRadius: 6,
    backgroundColor: '#39A7FF',
  },
  goalText: {
    color: '#E0F4FF',
    fontSize: 16,
  },
});