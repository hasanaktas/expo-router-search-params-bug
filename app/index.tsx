import * as React from "react";
import { useLocalSearchParams, usePathname, useRouter } from "expo-router";
import { View, Text, Button, TextInput } from "react-native";

const HomePage = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useLocalSearchParams();
  const [newUrl, setNewUrl] = React.useState("https://www.test.com");

  const navigate = (newUrl: string) => {
    const url = new URL(newUrl);
    const pathname = url.pathname;
    const search = url.search;

    router.navigate(`${pathname}${search}`);
  };

  return (
    <View style={{ padding: 20, gap: 4 }}>
      <View style={{ flexDirection: "row", gap: 20 }}>
        <Button
          color={"blue"}
          title="Home"
          onPress={() => {
            const url = "https://www.test.com";
            setNewUrl(url);
            navigate(url);
          }}
        />
        <Button
          color={"red"}
          title="Example 1 Url"
          onPress={() => {
            const url =
              "https://www.test.com?color=red&color=green&color=blue&size=large";
            setNewUrl(url);
            navigate(url);
          }}
        />
        <Button
          color="green"
          title="Example 2 Url"
          onPress={() => {
            const url = "https://www.test.com?color=red,green,blue&size=large";
            setNewUrl(url);
            navigate(url);
          }}
        />
      </View>
      <TextInput
        style={{
          padding: 20,
          backgroundColor: "#fff",
          borderColor: "#000",
          borderWidth: 1,
        }}
        value={newUrl}
      />

      <Text>Current Pathname</Text>
      <View style={{ backgroundColor: "#fff", padding: 20 }}>
        <Text>{JSON.stringify(pathname, null, 2)}</Text>
      </View>
      <Text>Current Search Params</Text>
      <View style={{ backgroundColor: "#fff", padding: 20 }}>
        <Text>{JSON.stringify(searchParams, null, 2)}</Text>
      </View>
    </View>
  );
};

export default HomePage;
