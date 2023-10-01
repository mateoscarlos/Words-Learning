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
  y: px(500),
  w: DEVICE_WIDTH - px(42) * 2,
  h: px(300),
  color: 0xffffff,
  text_size: px(40),
  align_h: hmUI.align.CENTER_H,
  text_style: hmUI.text_style.WRAP,
};

export const EMOJI_STYLE = {
  x: px(DEVICE_WIDTH/2) - (64/2),
  y: px(DEVICE_HEIGHT-64),
  src: 'flag_it.png'
  // w: DEVICE_WIDTH - px(42) * 2,
  // h: px(310),
  // color: 0x00615d,
  // text_size: px(30),
  // align_v: hmUI.align.BOTTOM,
  // align_h: hmUI.align.CENTER_H,
  // text_style: hmUI.text_style.WRAP,
  // text: "Local",
};

export const BUTTON_NEXT_STYLE = {
  x: DEVICE_WIDTH-64,
  y: (DEVICE_HEIGHT/2)-(64/2),
  w: -1,
  h: -1,
  normal_src: "source_button.png",
  press_src: "press_button.png",
};