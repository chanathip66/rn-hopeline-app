import { FontAwesome5 } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

export const BRAND_COLOR = "#3D0A4E";

type LogoProps = {
  size?: number;
};

export default function Logo({ size = 1 }: LogoProps) {
  return (
    <View style={styles.container}>
      <FontAwesome5
        name="pen-fancy"
        size={22 * size}
        color={BRAND_COLOR}
        style={{ marginBottom: 4 * size }}
      />
      <Text style={[styles.title, { fontSize: 36 * size }]}>hopeline</Text>
      <Text style={[styles.subtitle, { fontSize: 7 * size }]}>
        YOUR WRITING SOLUTIONS
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: BRAND_COLOR,
    fontWeight: "800",
    fontStyle: "italic",
    lineHeight: 40,
  },
  subtitle: {
    color: BRAND_COLOR,
    letterSpacing: 2,
    fontWeight: "700",
    marginTop: 2,
  },
});
