import { StyleSheet } from 'react-native';

const defaultFontSize = 20;

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
        borderBottomWidth: 0.5
    },
    headerText:{
        fontSize: defaultFontSize * 1.1,
        color: '#dcdde1'
    },
    layout:{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    nav:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 50,
        borderTopColor: '#41414a',
        borderTopWidth: 0.5,
        paddingTop: 5
    },
    navButton: {
        alignSelf: 'center',
    },
    navButtonText:{
        fontSize: defaultFontSize * 0.8,
        color: '#dcdde1'
    },




    inputWrapperTop:{
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15
    },
    inputWrapperBottom:{
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15
    }
});

export default styles;