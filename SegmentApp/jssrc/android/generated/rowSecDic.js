//Template File
function initializerowSecDic() {
    var Image05639a729b2774c = new kony.ui.Image2({
        "id": "Image05639a729b2774c",
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
    var Label0b728530b8cee4c = new kony.ui.Label({
        "id": "Label0b728530b8cee4c",
        "top": "10dp",
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
    rowSegDic = new kony.ui.FlexContainer({
        "id": "rowSegDic",
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
    rowSegDic.setDefaultUnit(kony.flex.DP)
    rowSegDic.add(Image05639a729b2774c, Label0b728530b8cee4c);
};