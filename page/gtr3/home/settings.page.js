import { SETTINGS_STYLE } from "./settings.style";


Page({
    state: {
        title: 'app'
    },
    onInit() {
        hmUI.showToast({
            text: 'settings'
        })
    },
    build() {

        // Title
        word = hmUI.createWidget(hmUI.widget.TEXT, {
            ...SETTINGS_STYLE,
            text: "Settings",
        });

        // List
        const dataList = [
            { name: 'a', age: 12, like: 2 },
            { name: 'b', age: 13, like: 3 },
            { name: 'c', age: 13, like: 4 }
          ]
          
          function scrollListItemClick(list, index) {
            console.log('scrollListItemClick index=' + index)
          }
          
          hmUI.createWidget(hmUI.widget.SCROLL_LIST, {
            x: 10,
            y: 10,
            h: 454,
            w: 200,
            item_space: 10,
            item_config: [
              {
                type_id: 1,
                item_bg_color: 0xef5350,
                item_bg_radius: 10,
                text_view: [
                  { x: 0, y: 0, w: 100, h: 100, key: 'name', color: 0xffffff, text_size: 20 },
                  { x: 0, y: 100, w: 100, h: 30, key: 'age', color: 0xffffff }
                ],
                text_view_count: 2,
                item_height: 130
              },
              {
                type_id: 2,
                item_bg_color: 0xef5350,
                item_bg_radius: 10,
                text_view: [
                  { x: 0, y: 0, w: 100, h: 100, key: 'name', color: 0xffffff, text_size: 20 },
                  { x: 100, y: 0, w: 100, h: 100, key: 'like', color: 0x3d5afe }
                ],
                text_view_count: 2,
                item_height: 130
              }
            ],
            item_config_count: 2,
            data_array: dataList,
            data_count: dataList.length,
            item_click_func: scrollListItemClick,
            data_type_config: [
              {
                start: 0,
                end: 1,
                type_id: 1
              },
              {
                start: 1,
                end: 2,
                type_id: 2
              }
            ],
            data_type_config_count: 2
          })
    },
})