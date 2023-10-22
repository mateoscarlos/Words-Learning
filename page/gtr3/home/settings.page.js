import { SETTINGS_TITLE, SETTINGS_LANGUAGE, SETTINGS_DIFFICULTY, SETTINGS_ABOUT, EXTRA, 
         IMG_LANGUAGE_SETTING, IMG_DIFFICULTY_SETTING, IMG_ABOUT_SETTING } from "./settings.style";

Page({
    state: {
        title: 'app'
    },
    onInit() {

    },

    build() {

        // Title
        title = hmUI.createWidget(hmUI.widget.TEXT, {
            ...SETTINGS_TITLE,
            text: "Settings",
        });

        language_setting = hmUI.createWidget(hmUI.widget.TEXT, {
            ...SETTINGS_LANGUAGE,
            text: "Language",
        });
        img_language_setting = hmUI.createWidget(hmUI.widget.IMG, {
            ...IMG_LANGUAGE_SETTING,
        });

        difficulty_setting = hmUI.createWidget(hmUI.widget.TEXT, {
            ...SETTINGS_DIFFICULTY,
            text: "Difficulty",
        });
        img_difficulty_setting = hmUI.createWidget(hmUI.widget.IMG, {
            ...IMG_DIFFICULTY_SETTING,
        });

        about_setting = hmUI.createWidget(hmUI.widget.TEXT, {
            ...SETTINGS_ABOUT,
            text: "About",
        });
        img_about_setting = hmUI.createWidget(hmUI.widget.IMG, {
            ...IMG_ABOUT_SETTING,
        });

        hmUI.createWidget(hmUI.widget.TEXT, {
            ...EXTRA,
            text: "",
        });

    }
})