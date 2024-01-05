import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
    return (
        <View>
            <Text style={styles.headingText}>Trending places</Text>
            <View style={[styles.card, styles.cardElevated]}>
                    <Image
                        source={{ uri: "https://reactjs.org/logo-og.png" }}
                        style={styles.cardImage}
                    />
                    <View style={styles.cardBody}>
                        <Text style={styles.cardTitle}>London City</Text>
                        <Text style={styles.cardLabel}>Lorem adipisicing mollit</Text>
                        <Text style={styles.cardDescription}>Id nisi laboris nisi incididunt et labore aute laborum aliquip adipisicing.</Text>
                        <Text style={styles.cardFooter}>12 mins away</Text>
                    </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: "bold",
        paddingHorizontal: 8,
    },
    card: {
        width: 350,
        height: 360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16,
    },
    cardElevated: {
        backgroundColor: "#fff",
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1,
        },
    },
    cardImage: {
        height: 180,
        width: "100%",
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12,
    },
    cardTitle: {
        color: "#000",
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 4,
    },
    cardLabel: {
        color: "#000",
        fontSize: 14,
        marginBottom: 6,
    },
    cardDescription: {
        color: "#242B2E",
        fontSize: 12,
        marginBottom: 12,
        marginTop: 6,
        flexShrink: 1,
    },
    cardFooter: {
        color: "#000",
    },
})