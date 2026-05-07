import { router } from "expo-router";
import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Logo, { BRAND_COLOR } from "../components/Logo";

export default function Index() {
  useEffect(() => {
    const t = setTimeout(() => router.replace("/signin"), 1800);
    return () => clearTimeout(t);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Logo size={1.4} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BRAND_COLOR,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  card: {
    backgroundColor: "#fff",
    width: "82%",
    aspectRatio: 1,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.18,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 8 },
    elevation: 8,
  },
});
