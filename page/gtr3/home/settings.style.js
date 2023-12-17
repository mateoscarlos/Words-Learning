import { gettext } from "i18n";

export const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } =
    hmSetting.getDeviceInfo();

// ____ TITLE _______________________________
export const SETTINGS_TITLE = {
    x: px(0),
    y: px(15),
    w: DEVICE_WIDTH,
    h: px(50),
    color: 0xffffff,
    text_size: px(35),
    align_h: hmUI.align.CENTER_H,
    text_style: hmUI.text_style.WRAP,
};

// ____ SETTINGS OPT ___________________________
// ________ Main _______________________________
const SETTINGS_OPT = {
    x: px(120),
    y: DEVICE_HEIGHT/2 - 30,
    w: DEVICE_WIDTH,
    h: px(55),
    color: 0xffffff,
    text_size: px(40),
    align_h: hmUI.align.LEFT,
    text_style: hmUI.text_style.WRAP,
};

// ________ Language ___________________________
export const SETTINGS_LANGUAGE = {
    x: SETTINGS_OPT.x,
    y: DEVICE_HEIGHT/2 - 30,
    w: SETTINGS_OPT.w,
    h: SETTINGS_OPT.h,
    color: SETTINGS_OPT.color,
    text_size: SETTINGS_OPT.text_size,
    align_h: SETTINGS_OPT.align_h,
    text_style: SETTINGS_OPT.text_style,
};

// ________ Difficulty _________________________
export const SETTINGS_DIFFICULTY = {
    x: SETTINGS_OPT.x,
    y: SETTINGS_OPT.y + 100,
    w: SETTINGS_OPT.w,
    h: SETTINGS_OPT.h,
    color: SETTINGS_OPT.color,
    text_size: SETTINGS_OPT.text_size,
    align_h: SETTINGS_OPT.align_h,
    text_style: SETTINGS_OPT.text_style,
};

// ________ About ______________________________
export const SETTINGS_ABOUT = {
    x: SETTINGS_OPT.x,
    y: SETTINGS_OPT.y + 200,
    w: SETTINGS_OPT.w,
    h: SETTINGS_OPT.h,
    color: SETTINGS_OPT.color,
    text_size: SETTINGS_OPT.text_size,
    align_h: SETTINGS_OPT.align_h,
    text_style: SETTINGS_OPT.text_style,
};

// ________ Extra ______________________________
export const EXTRA = {
    x: px(95),
    y: SETTINGS_OPT.y + 300,
    w: DEVICE_WIDTH,
    h: px(150),
    color: 0xffffff,
    text_size: px(40),
    align_h: hmUI.align.LEFT,
    text_style: hmUI.text_style.WRAP,
};

// ____ SETTINGS IMG ___________________________
// ________ Main _______________________________
const IMG_MAIN_SETTING = {
    x: SETTINGS_OPT.x - 60,
    w: 45,
    h: 45,
    pos_x: 0,
};

export const IMG_LANGUAGE_SETTING = {
    x: IMG_MAIN_SETTING.x,
    y: SETTINGS_LANGUAGE.y + 9,
    w: IMG_MAIN_SETTING.w,
    h: IMG_MAIN_SETTING.h,
    src: 'language.png',
};

export const IMG_DIFFICULTY_SETTING = {
    x: IMG_MAIN_SETTING.x,
    y: SETTINGS_DIFFICULTY.y + 9,
    w: IMG_MAIN_SETTING.w,
    h: IMG_MAIN_SETTING.h,
    src: 'difficulty.png',
};

export const IMG_ABOUT_SETTING = {
    x: IMG_MAIN_SETTING.x,
    y: SETTINGS_ABOUT.y + 9,
    w: IMG_MAIN_SETTING.w,
    h: IMG_MAIN_SETTING.h,
    src: 'about.png',
};