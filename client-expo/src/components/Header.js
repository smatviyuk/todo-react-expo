import { View, StyleSheet, Text } from "react-native"
import { COLORS, FONTS, SHADOW, SIZES } from "../constants"

const styles = StyleSheet.create({
  view: {
    ...SHADOW,
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: SIZES.padding,
    borderRadius: SIZES.borderRadius,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.secondary,
    marginBottom: 10,
  }, 
  text: {
    ...FONTS.h1_semibold,
    color: COLORS.text
  }
})

export default function Header() {
  return <View style={styles.view}>
          <Text style={styles.text}>🕑 Your Todo list</Text>
      </View>
}

