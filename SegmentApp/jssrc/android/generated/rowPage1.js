//Template File
function initializerowPage1() {
    var imgPage1 = new kony.ui.Image2({
        "id": "imgPage1",
        "top": "47dp",
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
    var page1lbl1 = new kony.ui.Label({
        "id": "page1lbl1",
        "top": "200dp",
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
    var page11lbl2 = new kony.ui.Label({
        "id": "page11lbl2",
        "top": "250dp",
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
    var page1lbl3 = new kony.ui.Label({
        "id": "page1lbl3",
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
    var page1lbl4 = new kony.ui.Label({
        "id": "page1lbl4",
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
    flxSegPage1 = new kony.ui.FlexContainer({
        "id": "flxSegPage1",
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
    flxSegPage1.setDefaultUnit(kony.flex.DP)
    flxSegPage1.add(imgPage1, page1lbl1, page11lbl2, page1lbl3, page1lbl4);
};