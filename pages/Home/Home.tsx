import React from "react";
import { Text, View, Image } from "react-native";


const Home = () => {
    return (
        <View>
            {/* <Text>From Home</Text> */}
            <View>
                <Image source={{uri:'https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/441499470_880386057451011_6390339010356399706_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=BK36nybvuVsQ7kNvgETuRfV&_nc_ht=scontent.fdac41-1.fna&oh=00_AYDCs1W5FuRNn97Wdr-4KnNZXF3c6mdDIHviNvTsIO3U7w&oe=66514B7E'}}
                style={{ width: '100%', height: 200 }} resizeMode="cover"
                alt="xvdf"/>
            </View>
        </View>
    )
}


export default Home