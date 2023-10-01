import { ORIGINAL_STYLE, EMOJI_STYLE, EXAMPLE_STYLE, BUTTON_NEXT_STYLE } from "./index.style";
import { italian, it_examples } from "./dict"


const logger = DeviceRuntimeCore.HmLogger.getLogger("app");

Page({
    state: {
        title: 'app'
    },

    onInit() {
        hmUI.showToast({
            text: 'Welcome'
        })
    },

    build() {
        let index = Math.floor(Math.random() * italian.length)
        let new_index

        hmUI.setScrollView(true, px(454), 2, true)

        // ___PAGE 1___________________________
        // Word widget
        word = hmUI.createWidget(hmUI.widget.TEXT, {
            ...ORIGINAL_STYLE,
            text: italian[index],
        });
        // Local widget
        // hmUI.createWidget(hmUI.widget.TEXT, {
        //   ...EMOJI_STYLE,
        // });
        hmUI.createWidget(hmUI.widget.IMG, {
            ...EMOJI_STYLE,
        });

        const button = hmUI.createWidget(hmUI.widget.BUTTON, {
            ...BUTTON_NEXT_STYLE,
            click_func: () => {
                do {
                    new_index = Math.floor(Math.random() * italian.length)
                } while (new_index == index)
                index = new_index

                word.setProperty(hmUI.prop.MORE, {
                    text: italian[index]
                })
                example.setProperty(hmUI.prop.MORE, {
                    text: it_examples[index]
                })
                // hmApp.reloadPage({ url: 'page/gtr3/home/index.page' })
                // hmApp.gotoPage({ url: 'page/gtr3/home/example.page' })
            }
        })


        // ___PAGE 2___________________________
        // Example widget
        example = hmUI.createWidget(hmUI.widget.TEXT, {
            ...EXAMPLE_STYLE,
            text: it_examples[index]
        });




    },

    onDestroy() {
    },

});