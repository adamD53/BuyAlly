import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function AppLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Lists",
          headerShown: false,
          tabBarIcon: ({ size, color }) => <FontAwesome name="list-ul" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="trash"
        options={{
          title: "Trash",
          headerShown: false,
          tabBarIcon: ({ size, color }) => <FontAwesome name="trash" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          headerShown: false,
          tabBarIcon: ({ size, color }) => <FontAwesome name="gear" size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}
