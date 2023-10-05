import { ORIGINAL_STYLE, FLAG_STYLE, EXAMPLE_STYLE, BUTTON_NEXT_STYLE, BUTTON_SETTINGS_STYLE } from "./index.style";
// import { createWidget, widget } from '@zos/ui'
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
        // const scrollBar = createWidget(widget.PAGE_SCROLLBAR)

        // ___PAGE 1___________________________
        // Word widget
        word = hmUI.createWidget(hmUI.widget.TEXT, {
            ...ORIGINAL_STYLE,
            text: italian[index],
        });
        // Language widget
        hmUI.createWidget(hmUI.widget.IMG, {
            ...FLAG_STYLE,
        });

        const nextButton = hmUI.createWidget(hmUI.widget.BUTTON, {
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
            }
        })

        // ___PAGE 2___________________________
        // Example widget
        example = hmUI.createWidget(hmUI.widget.TEXT, {
            ...EXAMPLE_STYLE,
            text: it_examples[index]
        });

        const settingsButton = hmUI.createWidget(hmUI.widget.BUTTON, {
            ...BUTTON_SETTINGS_STYLE,
            click_func: () => {
                hmApp.gotoPage({ url: 'page/gtr3/home/settings.page' })           
            }
        })

    },

    onDestroy() {
    },

});