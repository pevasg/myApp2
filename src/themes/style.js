import { StyleSheet } from 'react-native';

const defaultFontSize = 20;

export const cafeListStyle = StyleSheet.create({
    cafeWrap:{
        flex: 1,
        margin: 5,
        padding: 5,
        backgroundColor: '#858491',
        borderRadius: 5,
        //flexDirection: 'row'
    },
    imageWrap:{
        paddingRight: 5,
        flex: 1,
    },
    image:{
        width: 100,
        height: 100
    },
    title:{
        fontSize: 20,
        color: '#000000'
    },
    loader:{
        paddingTop: 25,
        alignSelf: 'center'
    }
});

export const taskSceneStyle = StyleSheet.create({
    mainImage: {
        width: 350,
        height: 350,
        alignSelf: 'center',
        backgroundColor: '#fff'
    },
    title:{
        color:"#ecf0f1",
        fontSize:20
    }
});

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#323138',
        flex:1,
        justifyContent: 'center'
    },

    //welcomeScene
    logo:{
        alignSelf: 'center',
        backgroundColor: '#FFA040',
        width:120,
        height:120,
        borderRadius: 15
    },
    largeText:{
        color: '#fff',
        textAlign: 'center',
        //fontWeight: "bold",
        fontSize: defaultFontSize * 3
    },
    smallText:{
        color: '#858491',
        textAlign: 'center',
        fontSize: defaultFontSize * 0.7
    },


    //loginScene
    inputWrapper:{
        height: 60,
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 10
    },
    iconInput: {
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2d2c33',
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5
    },
    fieldInput:{
        width: 250,
        justifyContent: 'center',
        backgroundColor: '#41414a',
        paddingLeft: 10,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5
    },
    smallBlock:{
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#2d2c33',
        borderRadius: 5,
        margin: 25
    },

    myButton:{
        borderRadius: 5,
        backgroundColor: '#FFA040',
        height: 60,
        width: 310,
        margin: 10,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    myButtonInside:{
        alignSelf: 'center',
        color: "#dcdde1",
        fontSize: defaultFontSize * 1.1
    },

    //taskListScenes
    header:{
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        borderBottomColor: '#41414a',
        borderBottomWidth: 1
    },
    headerText:{
        fontSize: defaultFontSize * 1.1,
        color: '#dcdde1'
    },
    layout:{
        justifyContent: 'flex-start',
        //alignItems: 'center',
        flex: 1,
    },
    nav:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 50,
        borderTopColor: '#41414a',
        borderTopWidth: 1,
        paddingTop: 5
    },
    navButton: {
        alignSelf: 'center',
    },
    navButtonText:{
        fontSize: defaultFontSize * 0.7,
        color: '#858491'
    },
    navIcon:{
        color: '#dcdde1',
        alignSelf: 'center'
    },
    navIcon2: {
        color: '#dcdde1',
        alignSelf: 'flex-end',
        alignItems: 'flex-end',
        zIndex: 10,
        //position: 'absoluteFillObject',
        //top: 10,
        backgroundColor: '#fff'
    }

});

export default styles;