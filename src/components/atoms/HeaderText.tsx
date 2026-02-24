import React from "react";
import { StyleSheet, Text, TextProps } from "react-native";

interface IHeaderText extends TextProps {
  title: string;
}

export default function HeaderText({ title, style }: IHeaderText) {
  return <Text style={[styles.text, style]}>{title}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    fontWeight: "700",
    letterSpacing: 0.3,
    color: "white",
    marginBottom: 20,
  },
});
