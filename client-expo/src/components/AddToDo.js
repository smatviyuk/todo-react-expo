import { View, StyleSheet, Text, TextInput, TouchableOpacity, Button } from "react-native";
import { COLORS, FONTS, SHADOW, SIZES } from "../constants";
import { useState } from "react";

const styles = StyleSheet.create({
  textBoxWrapper: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    left: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: SIZES.padding,
  },
  textInput: {
    ...SHADOW,
    borderRadius: 15,
    backgroundColor: COLORS.secondary,
    height: 54,
    width: "90%",
    color: COLORS.primary,
    marginRight: 15,
    paddingLeft: 20,
    ...FONTS.h2_semibold,
  },
  button: {
    backgroundColor: COLORS.accent,
    height: 54,
    width: 54,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function AddToDo({ addTodo }) {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert("Please enter text");
      return;
    }

    addTodo({ name, status });

    setName("");
    setStatus(false);
  };

  return (
    <View style={styles.textBoxWrapper}>
      <TextInput 
      style={styles.textInput}
      value={name}
      onChangeText={(e) => {
        setName(e)
        setStatus(false)
      }}
      placeholder="Add new todo"
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={{ fontSize: 30, color: COLORS.secondary }}>+</Text>
        </TouchableOpacity>
    </View>
  );
}
