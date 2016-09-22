//Template File
function initializerowSegEdit() {
    var img = new kony.ui.Image2({
        "id": "img",
        "top": "10dp",
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
    var lbl = new kony.ui.Label({
        "id": "lbl",
        "top": "15dp",
        "left": "50dp",
        "width": "80%",
        "height": "30dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Label",
        "skin": "lblColor1"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    rowEditSeg = new kony.ui.FlexContainer({
        "id": "rowEditSeg",
        "height": "60dp",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[0,0]",
        "skin": "slFbox",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    rowEditSeg.setDefaultUnit(kony.flex.DP)
    rowEditSeg.add(img, lbl);
};