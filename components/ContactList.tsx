import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
} from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [
        {
            uid: 1,
            name: "Labore dolore",
            status: "Dolor adipisicing culpa duis adipisicing ipsum esse",
            imageUrl: "https://reactjs.org/logo-og.png",
        },
        {
            uid: 2,
            name: "Ut proident proident",
            status: "Elit consequat quis anim ex in cillum",
            imageUrl: "https://reactjs.org/logo-og.png",
        },
        {
            uid: 3,
            name: "Cupidatat magna elit",
            status: "Incididunt anim labore proident officia",
            imageUrl: "https://reactjs.org/logo-og.png",
        },
        {
            uid: 4,
            name: "Dolore et fugiat",
            status: "Tempor adipisicing ex eiusmod",
            imageUrl: "https://reactjs.org/logo-og.png",
        },
    ]

    return (
        <View>
            <Text style={styles.headingText}>ContactList</Text>
            <ScrollView
                style={styles.container}
                scrollEnabled={false}
            >
                {contacts.map(({
                    uid,
                    name,
                    status,
                    imageUrl,
                }) => (
                    <View 
                        key={uid}
                        style={styles.userCard}
                    >
                        <Image
                            source={{
                                uri: imageUrl,
                            }}
                            style={styles.userImage}
                        />
                        <View>
                            <Text style={styles.userName}>{name}</Text>
                            <Text style={styles.userStatus}>{status}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: "bold",
        paddingHorizontal: 8,
    },
    container: {
        paddingHorizontal: 16,
        marginBottom: 4,
    },
    userCard: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 3,
        backgroundColor: "#8D3DAF",
        padding: 8,
        borderRadius: 10,
    },
    userImage: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        marginRight: 14,
    },
    userName: {
        fontSize: 16,
        fontWeight: "600",
        color: "#fff",
    },
    userStatus: {
        fontSize: 12,
        color: "darkgrey",
    },
})