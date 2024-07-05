import { useState } from "react";

import { TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons"

import { styles } from "./styles";
import { theme } from "../themes";
import { Input } from "../components/input";
import { Contact } from "../components/contact";

export function Home() {
    const [name, setName] = useState("");

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Input style={styles.input}>
                    <Feather name="search" size={16} color={theme.colors.gray_300} />
                    <Input.Field
                        placeholder="Pesquisar pelo nome..."
                        onChangeText={setName}
                        value={name}
                    />
                    <TouchableOpacity onPress={() => setName("")}>
                        <Feather name="x" size={16} color={theme.colors.gray_300} />
                    </TouchableOpacity>
                </Input>
            </View>

            <Contact contact={{
                name: "André",
                image: require("@/app/assets/image.png")
            }}  />
        </View>
    )
}