import { gettext } from "i18n";

export const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } =
    hmSetting.getDeviceInfo();

export const ORIGINAL_STYLE = {
    x: px(42),
    y: px(140),
    w: DEVICE_WIDTH - px(42) * 2,
    h: px(150),
    color: 0xffffff,
    text_size: px(50),
    align_h: hmUI.align.CENTER_H,
    text_style: hmUI.text_style.WRAP,
};

export const EXAMPLE_STYLE = {
    x: px(42),
    y: px(DEVICE_HEIGHT + 170),
    w: DEVICE_WIDTH - px(42) * 2,
    h: px(250),
    color: 0xffffff,
    text_size: px(40),
    align_h: hmUI.align.CENTER_H,
    text_style: hmUI.text_style.WRAP,
};

export const FLAG_STYLE = {
    x: px(DEVICE_WIDTH / 2) - (40 / 2),
    y: px(DEVICE_HEIGHT - 40),
    src: 'flag_it_40px.png'
};

export const BUTTON_NEXT_STYLE = {
    x: DEVICE_WIDTH - 64,
    y: (DEVICE_HEIGHT / 2) - (64 / 2),
    w: -1,
    h: -1,
    normal_src: "source_button.png",
    press_src: "source_settings.png",
};

export const BUTTON_SETTINGS_STYLE = {
    x: px(DEVICE_WIDTH/2 - 64/2),
    y: px(2*DEVICE_HEIGHT - 64),
    w: -1,
    h: -1,
    normal_src: "source_settings.png",
};