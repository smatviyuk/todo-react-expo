import { View, Text, StyleSheet, Pressable, Button } from "react-native";
import { COLORS, FONTS, SIZES, SHADOW } from "../constants";

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
  text: {
    ...FONTS.h2_semibold,
    color: COLORS.primary,
  },
});

export default function Todo({ todo, removeTodo, markTodo }) {
  return (
    <View>
      <Text
        style={{ textDecorationLine: todo.status ? "line-through" : "" }}
      >{todo.name}</Text>
      <Pressable style={styles.view} onLongPress={() => removeTodo(todo.id)}>
        <Text style={styles.text}>{todo.name}</Text>
        <Button onPress={() => markTodo(todo.id)}>Done</Button>
      </Pressable>
    </View>
  );
}
