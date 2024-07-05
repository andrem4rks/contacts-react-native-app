import { ImageProps, Text, TouchableOpacity, TouchableOpacityProps } from "react-native"
import { styles } from "./styles"
import { Avatar } from "../avatar"

export type ContactProps = {
    name: string,
    image?: ImageProps
}

type Props = TouchableOpacityProps & {
    contact: ContactProps,
}   

export function Contact({ contact, ...rest } : Props) {
    return (
        <TouchableOpacity style={styles.container} {...rest}>
            <Avatar name="André" image={contact.image}/>
            <Text style={styles.name}>{contact.name}</Text>
        </TouchableOpacity>
    )
}