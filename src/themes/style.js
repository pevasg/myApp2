import { StyleSheet } from 'react-native';

const defaultFontSize = 20;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#323138',
        flex:1,
        justifyContent: 'center'
    },
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
    inputWrapper:{
        height: 60,
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 10
    },
    iconInput: {
        width: 60,
        backgroundColor: '#2d2c33',
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5
    },
    fieldInput:{
        width: 250,
        justifyContent: 'center',
        backgroundColor: '#41414a',
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



    top:{
        height: 200,
        alignItems: 'center',
        justifyContent: 'center'
    },
    navigation:{
        height: 100,
        justifyContent: 'center'
    },
    companyName:{
        fontWeight: "bold",
        color: "#fff",
        marginTop: 15,
        fontSize: defaultFontSize * 3
    },
    button:{
        borderRadius: 30,
        backgroundColor: "#27ae60",
        padding: 15,
        marginLeft: 30,
        marginRight: 30
    },
    buttonInside:{
        alignSelf: 'center',
        color: "#fff",
        fontWeight: 'bold',
        fontSize: defaultFontSize * 1.5
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