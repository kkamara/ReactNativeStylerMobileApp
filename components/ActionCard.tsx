import {
    StyleSheet,
    Text,
    View,
    Linking,
    Image,
    TouchableOpacity,
} from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink)
    }

    return (
        <View>
            <Text style={styles.headingText}>Blog Card</Text>
            <View style={[styles.card, styles.elevatedCard]}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}>
                        What's new in Javascript 21 (ES12)?
                    </Text>
                </View>
                <Image
                    source={{
                        uri: "https://reactjs.org/logo-og.png",
                    }}
                    style={styles.cardImage}
                />
                <View style={styles.bodyContainer}>
                    <Text numberOfLines={3}>
                        Esse proident in consequat esse pariatur esse qui magna. Ullamco elit quis esse sint reprehenderit incididunt velit minim laboris minim officia id velit. Fugiat consectetur tempor consectetur est minim veniam exercitation sint occaecat mollit esse proident do sit. Fugiat anim consequat duis in dolore occaecat sint enim sit in qui. Et sint est nostrud ad cillum sint ut veniam nulla officia adipisicing id cupidatat.

                        Proident pariatur cillum est id consequat aliquip exercitation nulla quis irure. Ea sint magna sit aliqua culpa Lorem sit deserunt mollit. Eu aliquip pariatur id eu culpa ex laborum non deserunt qui ullamco velit adipisicing. Consequat nulla do duis consequat aliquip ullamco laboris sit aliquip fugiat ipsum nulla magna ad.

                        Sunt cillum proident exercitation nulla. Pariatur enim excepteur tempor excepteur velit irure exercitation adipisicing sint ea non veniam. Velit eiusmod deserunt ad eu est Lorem mollit mollit ipsum magna sunt eiusmod quis. Sit fugiat laboris nostrud officia consequat excepteur nostrud exercitation reprehenderit et non tempor anim. Nisi proident laborum exercitation excepteur mollit dolor adipisicing ipsum.
                    </Text>
                </View>
                <View style={styles.footerContainer}>
                    <TouchableOpacity
                        onPress={() => { openWebsite("https://www.kelvinkamara.com/") }}
                    >
                        <Text style={styles.socialLinks}>Read more</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { openWebsite("https://github.com/kkamara") }}
                    >
                        <Text style={styles.socialLinks}>Follow me</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {},
    card: {},
    elevatedCard: {},
    headingContainer: {},
    headerText: {},
    cardImage: {
        height: 100,
    },
    bodyContainer: {},
    footerContainer: {},
    socialLinks: {},
})