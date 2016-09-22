//Template File
function initializesecSegDic() {
    var imgSecSelection = new kony.ui.Image2({
        "id": "imgSecSelection",
        "top": "5dp",
        "left": "2dp",
        "width": "40dp",
        "height": "40dp",
        "zIndex": 1,
        "isVisible": true,
        "src": "imagedrag.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {});
    var btnColExp = new kony.ui.Button({
        "id": "btnColExp",
        "top": "5dp",
        "right": "5dp",
        "width": "100dp",
        "height": "40dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Button",
        "skin": "slButtonGlossBlue",
        "focusSkin": "slButtonGlossRed"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {});
    var lblSecDescription = new kony.ui.Label({
        "id": "lblSecDescription",
        "top": "5dp",
        "left": "50dp",
        "width": "211dp",
        "height": "40dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Label",
        "skin": "slLabel"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    flxSecMain = new kony.ui.FlexContainer({
        "id": "flxSecMain",
        "height": "50dp",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[0,0]",
        "skin": "slFbox",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    flxSecMain.setDefaultUnit(kony.flex.DP)
    flxSecMain.add(imgSecSelection, btnColExp, lblSecDescription);
};