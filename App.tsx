import React from "react"
import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
} from "react-native"
import FlatCards from "./components/FlatCards"
import ElevatedCards from "./components/ElevatedCards"
import FancyCard from "./components/FancyCard"

export default function App() {
    return (
        <SafeAreaView>
            <ScrollView>
                <FlatCards />
                <ElevatedCards />
                <FancyCard />
            </ScrollView>
        </SafeAreaView>
    )
}