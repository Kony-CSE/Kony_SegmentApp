//Template File
function initializerowPage3() {
    var imgPage3 = new kony.ui.Image2({
        "id": "imgPage3",
        "top": "230dp",
        "left": "94dp",
        "width": "150dp",
        "height": "150dp",
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
    var page3lbl1 = new kony.ui.Label({
        "id": "page3lbl1",
        "top": "10dp",
        "left": "10%",
        "width": "80%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Label",
        "skin": "slLabel"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    var page31lbl2 = new kony.ui.Label({
        "id": "page31lbl2",
        "top": "60dp",
        "left": "10%",
        "width": "80%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Label",
        "skin": "slLabel"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    var page3lbl3 = new kony.ui.Label({
        "id": "page3lbl3",
        "top": "110dp",
        "left": "10%",
        "width": "80%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Label",
        "skin": "slLabel"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    var page3lbl4 = new kony.ui.Label({
        "id": "page3lbl4",
        "top": "170dp",
        "left": "10%",
        "width": "80%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Label",
        "skin": "slLabel"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    flxSegPage3 = new kony.ui.FlexContainer({
        "id": "flxSegPage3",
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
    flxSegPage3.setDefaultUnit(kony.flex.DP)
    flxSegPage3.add(imgPage3, page3lbl1, page31lbl2, page3lbl3, page3lbl4);
};