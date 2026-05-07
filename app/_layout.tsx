import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerShown: false,
          animation: "slide_from_right",
          animationDuration: 280,
          gestureEnabled: true,
        }}
      >
        <Stack.Screen name="index" options={{ animation: "fade" }} />
      </Stack>
    </>
  );
}
