import { View, Text, StyleSheet, Pressable, Button } from "react-native";
import { COLORS, FONTS, SIZES, SHADOW } from "../constants";
import Todo from "./Todo";

const styles = StyleSheet.create({
  view: {
    ...SHADOW,
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: SIZES.padding,
    borderRadius: SIZES.borderRadius,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.secondary,
    marginBottom: 10,
  },
});

export default function Todos({ todos, removeTodo, markTodo }) {
  return (
    <View>
      {todos.map((todo) => (
        <View key={todo.id}>
          <View style={styles.view}>
            <Todo todo={todo} markTodo={markTodo} removeTodo={removeTodo} />
          </View>
        </View>
      ))}
    </View>
  );
}
