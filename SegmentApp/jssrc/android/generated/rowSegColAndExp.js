//Template File
function rowSegColAndExp_btnProd_onClick_seq0(eventobject, context) {
    showHiddenDescription.call(this, context);
};

function initializerowSegColAndExp() {
    var imgProd = new kony.ui.Image2({
        "id": "imgProd",
        "top": "5dp",
        "left": "5dp",
        "width": "25%",
        "height": "75dp",
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
    var lblProdName = new kony.ui.Label({
        "id": "lblProdName",
        "top": "10dp",
        "left": "125dp",
        "width": "45%",
        "height": "26dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Label",
        "skin": "lblSmallSkin"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    var lblProdPrice = new kony.ui.Label({
        "id": "lblProdPrice",
        "top": "45dp",
        "left": "125dp",
        "width": "45%",
        "height": "26dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Label",
        "skin": "lblSmallSkin"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    var btnProd = new kony.ui.Button({
        "id": "btnProd",
        "top": "15dp",
        "right": "5dp",
        "width": "25%",
        "height": "50dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "More Details",
        "skin": "btnSmallSkin",
        "focusSkin": "btnSmallSkin",
        "onClick": rowSegColAndExp_btnProd_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {});
    var flexContainer999296733161203 = new kony.ui.FlexContainer({
        "id": "flexContainer999296733161203",
        "top": "0dp",
        "left": "0dp",
        "width": "100%",
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[0,0]",
        "skin": "CopyslFbox082e1c80166ea45",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    flexContainer999296733161203.setDefaultUnit(kony.flex.DP)
    flexContainer999296733161203.add(imgProd, lblProdName, lblProdPrice, btnProd);
    var prodDescription = new kony.ui.RichText({
        "id": "prodDescription",
        "top": "0dp",
        "left": "0dp",
        "width": "100%",
        "zIndex": 1,
        "isVisible": true,
        "text": null
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {});
    var flxProdDesc = new kony.ui.FlexContainer({
        "id": "flxProdDesc",
        "top": "0dp",
        "left": "0dp",
        "width": "100%",
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "zIndex": 1,
        "isVisible": false,
        "clipBounds": true,
        "Location": "[0,88]",
        "skin": "CopyslFbox082e1c80166ea45",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    flxProdDesc.setDefaultUnit(kony.flex.DP)
    flxProdDesc.add(prodDescription);
    flxCMain = new kony.ui.FlexContainer({
        "id": "flxCMain",
        "top": "0dp",
        "left": "0dp",
        "width": "100%",
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[0,0]",
        "skin": "CopyslFbox082e1c80166ea45",
        "layoutType": kony.flex.FLOW_VERTICAL
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    flxCMain.setDefaultUnit(kony.flex.DP)
    flxCMain.add(flexContainer999296733161203, flxProdDesc);
};