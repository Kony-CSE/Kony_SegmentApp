//Template File
function rowSegBtnContext_btnProd_onClick_seq0(eventobject, context) {
    getProdContext.call(this, context);
};

function initializerowSegBtnContext() {
    var imgProd = new kony.ui.Image2({
        "id": "imgProd",
        "top": "8dp",
        "left": "5%",
        "bottom": "8dp",
        "width": "25%",
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
        "top": "8dp",
        "left": "140dp",
        "width": "40%",
        "height": "25%",
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
        "top": "35dp",
        "left": "140dp",
        "width": "40%",
        "height": "25%",
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
        "top": "8dp",
        "bottom": "8dp",
        "right": "5%",
        "width": "20%",
        "height": "40dp",
        "centerY": "50%",
        "zIndex": 1,
        "isVisible": true,
        "text": "View Prod",
        "skin": "btnSmallSkin",
        "focusSkin": "slButtonGlossRed",
        "onClick": rowSegBtnContext_btnProd_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {});
    FlexContainer004712bbb23a74e = new kony.ui.FlexContainer({
        "id": "FlexContainer004712bbb23a74e",
        "height": "80dp",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[0,0]",
        "skin": "CopyslFbox082e1c80166ea45",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    FlexContainer004712bbb23a74e.setDefaultUnit(kony.flex.DP)
    FlexContainer004712bbb23a74e.add(imgProd, lblProdName, lblProdPrice, btnProd);
};