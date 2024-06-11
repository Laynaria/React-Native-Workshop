import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";

import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";
import { useState } from "react";

const PlaceholderImage = require("../assets/images/background-image.png");

export default function Index() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const pickImgAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImg(result.assets[0].uri);
    } else {
      alert("You didn't pick any pic!");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer
          placeholderImageSource={PlaceholderImage}
          selectedImg={selectedImg}
        />
      </View>

      <View style={styles.footerContainer}>
        <Button label="Choose a photo" theme="primary" onPress={pickImgAsync} />
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
