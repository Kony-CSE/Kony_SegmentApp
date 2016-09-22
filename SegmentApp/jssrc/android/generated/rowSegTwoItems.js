//Template File
function rowSegTwoItems_btn1_onClick_seq0(eventobject, context) {
    segButtonContextEvent2.call(this, eventobject, context);
};

function rowSegTwoItems_btn2_onClick_seq0(eventobject, context) {
    segButtonContextEvent2.call(this, eventobject, context);
};

function initializerowSegTwoItems() {
    var imgProd1 = new kony.ui.Image2({
        "id": "imgProd1",
        "top": "1dp",
        "left": "36dp",
        "width": "75dp",
        "height": "75dp",
        "centerX": "50%",
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
    var lblProdName1 = new kony.ui.Label({
        "id": "lblProdName1",
        "top": "80dp",
        "left": "0dp",
        "width": "100%",
        "height": "30dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Label",
        "skin": "lblSmallSkin"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    var lblProdPrice1 = new kony.ui.Label({
        "id": "lblProdPrice1",
        "top": "120dp",
        "left": "0dp",
        "width": "100%",
        "height": "30dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Label",
        "skin": "lblSmallSkin"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    var btn1 = new kony.ui.Button({
        "id": "btn1",
        "top": "0dp",
        "left": "0dp",
        "width": "100%",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "text": null,
        "skin": "btnTransSkin",
        "focusSkin": "slButtonGlossRed",
        "onClick": rowSegTwoItems_btn1_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {});
    var flxItemOne = new kony.ui.FlexContainer({
        "id": "flxItemOne",
        "top": "0dp",
        "left": "0dp",
        "width": "49.5%",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[0,0]",
        "skin": "slFbox",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    flxItemOne.setDefaultUnit(kony.flex.DP)
    flxItemOne.add(imgProd1, lblProdName1, lblProdPrice1, btn1);
    var imgProd2 = new kony.ui.Image2({
        "id": "imgProd2",
        "top": "1dp",
        "left": "36dp",
        "width": "75dp",
        "height": "75dp",
        "centerX": "50%",
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
    var lblProdName2 = new kony.ui.Label({
        "id": "lblProdName2",
        "top": "80dp",
        "left": "0dp",
        "width": "100%",
        "height": "30dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Label",
        "skin": "lblSmallSkin"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    var lblProdPrice2 = new kony.ui.Label({
        "id": "lblProdPrice2",
        "top": "120dp",
        "left": "0dp",
        "width": "100%",
        "height": "30dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Label",
        "skin": "lblSmallSkin"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    var btn2 = new kony.ui.Button({
        "id": "btn2",
        "top": "0dp",
        "left": "0dp",
        "width": "100%",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "text": null,
        "skin": "btnTransSkin",
        "focusSkin": "slButtonGlossRed",
        "onClick": rowSegTwoItems_btn2_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {});
    var flxItemTwo = new kony.ui.FlexContainer({
        "id": "flxItemTwo",
        "top": "0dp",
        "left": "50.5%",
        "width": "49.5%",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[227,0]",
        "skin": "slFbox",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    flxItemTwo.setDefaultUnit(kony.flex.DP)
    flxItemTwo.add(imgProd2, lblProdName2, lblProdPrice2, btn2);
    var lblSeparator = new kony.ui.Label({
        "id": "lblSeparator",
        "top": "0dp",
        "left": "49%",
        "width": "1%",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "text": null,
        "skin": "lblLineSkin"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    flxMain = new kony.ui.FlexContainer({
        "id": "flxMain",
        "height": "150dp",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[0,0]",
        "skin": "slFbox",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    flxMain.setDefaultUnit(kony.flex.DP)
    flxMain.add(flxItemOne, flxItemTwo, lblSeparator);
};