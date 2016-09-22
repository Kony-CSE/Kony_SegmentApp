//Template File
function initializerowPage2() {
    var imgPage2 = new kony.ui.Image2({
        "id": "imgPage2",
        "top": "120dp",
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
    var page2lbl1 = new kony.ui.Label({
        "id": "page2lbl1",
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
    var page21lbl2 = new kony.ui.Label({
        "id": "page21lbl2",
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
    var page2lbl3 = new kony.ui.Label({
        "id": "page2lbl3",
        "top": "300dp",
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
    var page2lbl4 = new kony.ui.Label({
        "id": "page2lbl4",
        "top": "350dp",
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
    flxSegPage2 = new kony.ui.FlexContainer({
        "id": "flxSegPage2",
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
    flxSegPage2.setDefaultUnit(kony.flex.DP)
    flxSegPage2.add(imgPage2, page2lbl1, page21lbl2, page2lbl3, page2lbl4);
};