import React from 'react';
import { AppRegistry, View, Text } from 'react-native';


class Toaster{
    constructor(){
        this.messages = [];
        this.message = '';
        this.showListener = null;
        this.hideListener = null;
        this.marginTop = 0;
    }

    registerShowListener(listener){
        this.showListener = listener;
    }
    registerHideListener(listener){
        this.hideListener = listener;
    }


    showMessage(message){
            this.messages.push(message);

            if(this.showListener && this.hideListener) {
                this.messages.forEach((item, i)=> {
                    this.showListener(item+(i+1));
                    this.downMarginTop(i);
                    setTimeout(() => {
                        this.hideListener();
                        this.messages.pop();
                    }, 5000);
                })
            }
        }

    downMarginTop(i) {
        this.marginTop = 30 + i * 30;
    }



    // showMessage(message){
    //     this.message = message;
    //     if(this.showListener && this.hideListener) {
    //         this.showListener(message);
    //         setTimeout(() => {
    //             this.hideListener();
    //         }, 3000);
    //     }
    // }
}



export const ToasterView = (props) =>
        <View style={{position: 'absolute', top:props.top, width: '100%', backgroundColor:'red'}}>
            <Text>
                {props.text}
            </Text>
        </View>;


export default new Toaster();