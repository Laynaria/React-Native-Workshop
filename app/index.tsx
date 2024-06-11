import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet, Image } from "react-native";

import ImageViewer from "@/components/images-components/ImageViewer";
import Button from "@/components/buttons-components/Button";

const PlaceholderImage = require("../assets/images/background-image.png");

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage} />
      </View>

      <View style={styles.footerContainer}>
        <Button label="Choose a photo" />
        <Button label="Use this photo" />
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
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});
