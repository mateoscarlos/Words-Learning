import { SETTINGS_TITLE, SETTINGS_LANGUAGE, SETTINGS_DIFFICULTY, SETTINGS_ABOUT, EXTRA, 
         IMG_LANGUAGE_SETTING, IMG_DIFFICULTY_SETTING, IMG_ABOUT_SETTING } from "./settings.style";

Page({
    state: {
        title: 'app'
    },
    onInit() {

    },

    build() {

        // TODO: Check it out
        scrollBar = hmUI.createWidget(hmUI.widget.PAGE_SCROLLBAR)

        // Title
        title = hmUI.createWidget(hmUI.widget.TEXT, {
            ...SETTINGS_TITLE,
            text: "Settings",
        });

        // SETTINGS > LANGUAGE
        group_language = hmUI.createWidget(hmUI.widget.GROUP)
        language_setting = group_language.createWidget(hmUI.widget.TEXT, {
            ...SETTINGS_LANGUAGE,
            text: "Language",
        });
        img_language_setting = group_language.createWidget(hmUI.widget.IMG, {
            ...IMG_LANGUAGE_SETTING,
        });

        // SETTINGS > DIFFICULTY
        group_difficulty = hmUI.createWidget(hmUI.widget.GROUP)
        difficulty_setting = group_difficulty.createWidget(hmUI.widget.TEXT, {
            ...SETTINGS_DIFFICULTY,
            text: "Difficulty",
        });
        img_difficulty_setting = group_difficulty.createWidget(hmUI.widget.IMG, {
            ...IMG_DIFFICULTY_SETTING,
        });

        // SETTINGS > ABOUT
        group_about = hmUI.createWidget(hmUI.widget.GROUP)
        about_setting = group_about.createWidget(hmUI.widget.TEXT, {
            ...SETTINGS_ABOUT,
            text: "About",
        });
        img_about_setting = group_about.createWidget(hmUI.widget.IMG, {
            ...IMG_ABOUT_SETTING,
        });

        // SETTINGS > EXTRA ROOM
        hmUI.createWidget(hmUI.widget.TEXT, {
            ...EXTRA,
            text: "",
        });


        // Listeners
        group_language.addEventListener(hmUI.event.CLICK_DOWN, (info) => {
            hmUI.showToast({
                text: 'Language'
            })
        })
        group_difficulty.addEventListener(hmUI.event.CLICK_DOWN, (info) => {
            hmUI.showToast({
                text: 'Difficulty'
            })
        })
        group_about.addEventListener(hmUI.event.CLICK_DOWN, (info) => {
            hmUI.showToast({
                text: 'About'
            })
        })

    },

    onDestroy() {
    },
})