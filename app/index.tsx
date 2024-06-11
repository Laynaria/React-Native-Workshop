import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet, Image } from "react-native";

import ImageViewer from "@/components/images-components/ImageViewer";

const PlaceholderImage = require("../assets/images/background-image.png");

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25292e",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
});
