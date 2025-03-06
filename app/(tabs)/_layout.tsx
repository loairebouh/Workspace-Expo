import React from 'react';
import {Tabs} from "expo-router";

const TabsLayout = () => {
    return (
        <Tabs>
            <Tabs.Screen name={"index"} options={{
                headerTitle: "Index",
                title: "I"
            }}/>
            <Tabs.Screen name={"users/[id]"} options={{
                headerTitle: "User",
                title: "User"
            }}/>
        </Tabs>
    );
};

export default TabsLayout;
