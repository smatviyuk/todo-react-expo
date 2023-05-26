import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
  ScrollView,
  Linking,
} from "react-native";
import { COLORS, FONTS, SHADOW, SIZES } from "../constants";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import AddToDo from "../components/AddToDo";
import Todos from "../components/Todos";

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "ios" ? 40 : StatusBar.currentHeight + 10,
    flex: 1,
    backgroundColor: COLORS.primary,
    padding: SIZES.padding,
  },
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
    borderRadius: SIZES.textBoxRadius,
    backgroundColor: COLORS.secondary,
    height: 54,
    width: "85%",
    color: COLORS.primary,
    marginRight: 15,
    paddingLeft: 15,
    ...FONTS.h2_semibold,
  },
  button: {
    backgroundColor: COLORS.accent,
    height: 54,
    width: 54,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function Homepage() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getTodos = async () => {
      const todosFromServer = await fecthTodos();
      setTodos(todosFromServer);
    };

    getTodos();
  }, []);

 

  async function fecthTodos () {
    try {
      const res = await fetch("http://192.168.0.102:8080/get");
      const data = await res.json();
      return data.todos;
    } catch (error) {
      console.error(error);
    }
  };

  async function fetchTodo(id) {
    try {
      const res = await fetch(`http://192.168.0.102:8080/get/${id}`);
      const data = await res.json();
      return data.todo;
    } catch (error) {
      console.error(error);
    }
  };

  async function addTodo(todo) {
    const res = await fetch("http://192.168.0.102:8080/post", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(todo),
    });

    const data = await res.json();

    setTodos([...todos, data.todo]);
  };

  async function removeTodo(id) {
    const res = await fetch(`http://192.168.0.102:8080/delete/${id}`, {
      method: "DELETE",
    });

    res.status === 200
      ? setTodos(todos.filter((todo) => todo.id !== id))
      : alert("There was an error while deleting");
  };

  async function markTodo(id) {
    const todoToToggle = await fetchTodo(id);
    const updatedTodo = { status: !todoToToggle.status };

    const res = await fetch(`http://192.168.0.102:8080/put/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedTodo),
    });

    if (res.status === 200) {
      const data = await res.json();

      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, status: data.todo.status } : todo
        )
      );
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{ display: "flex", alignItems: "center" }}
          {...todos.length > 0 ? (
            <Todos todos={todos} removeTodo={removeTodo} markTodo={markTodo} />
          ) : (
            "No Todos To Show"
          )}
        />
      </ScrollView>
      <AddToDo addTodo={addTodo} />
    </View>
  );
}
