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
    headingText: {},
    card: {},
    cardElevated: {},
    cardImage: {
        height: 180,
        width: "100%",
    },
    cardBody: {},
    cardTitle: {},
    cardLabel: {},
    cardDescription: {},
    cardFooter: {},
})