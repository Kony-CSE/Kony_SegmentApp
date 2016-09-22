//Form JS File
function frmOneRowTwoItems_frmOneRowTwoItems_postshow_seq0(eventobject) {
    recordWithTwoItems.call(this);
};

function frmOneRowTwoItems_Button0cc1f45d6080d40_onClick_seq0(eventobject) {
    frmHome.show();
};

function frmOneRowTwoItems_btnClose_onClick_seq0(eventobject) {
    closeProdPop2.call(this);
};

function addWidgetsfrmOneRowTwoItems() {
    var Button0cc1f45d6080d40 = new kony.ui.Button({
        "id": "Button0cc1f45d6080d40",
        "top": "8dp",
        "left": "2%",
        "width": "25%",
        "height": "35dp",
        "centerY": "50%",
        "zIndex": 1,
        "isVisible": true,
        "text": null,
        "skin": "CopyslButtonGlossBlue0fd7f57b2d0b04b",
        "focusSkin": "slButtonGlossRed",
        "onClick": frmOneRowTwoItems_Button0cc1f45d6080d40_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {});
    var Label05de6a232262f49 = new kony.ui.Label({
        "id": "Label05de6a232262f49",
        "top": "14dp",
        "left": "30%",
        "centerX": "50%",
        "centerY": "50%",
        "zIndex": 1,
        "isVisible": true,
        "text": "1 row  with 2 Itmes",
        "skin": "lblHeaderSkin"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    var FlexContainer09ba3e0b3fa634a = new kony.ui.FlexContainer({
        "id": "FlexContainer09ba3e0b3fa634a",
        "top": "0dp",
        "left": "0dp",
        "width": "100%",
        "height": "9%",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[0,0]",
        "skin": "slFbox",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    FlexContainer09ba3e0b3fa634a.setDefaultUnit(kony.flex.DP)
    FlexContainer09ba3e0b3fa634a.add(Button0cc1f45d6080d40, Label05de6a232262f49);
    var Label0999382505cd447 = new kony.ui.Label({
        "id": "Label0999382505cd447",
        "top": "9%",
        "left": "0dp",
        "width": "100%",
        "height": "1%",
        "zIndex": 1,
        "isVisible": true,
        "text": null,
        "skin": "lblLineSkin"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 1
    }, {
        "textCopyable": false
    });
    var segRowItemsbox = new kony.ui.FlexContainer({
        "id": "segRowItemsbox",
        "isVisible": true,
        "orientation": null,
        "width": "100%",
        "height": "40dp",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": null
    }, {});
    var segRowItems = new kony.ui.SegmentedUI2({
        "id": "segRowItems",
        "top": "10%",
        "left": "0dp",
        "width": "100%",
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "zIndex": 1,
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "flxItemTwo": "flxItemTwo",
            "flxItemOne": "flxItemOne",
            "imgProd2": "imgProd2",
            "btn2": "btn2",
            "lblProdPrice1": "lblProdPrice1",
            "lblProdName1": "lblProdName1",
            "lblProdPrice2": "lblProdPrice2",
            "lblProdName2": "lblProdName2",
            "btn1": "btn1",
            "flxMain": "flxMain",
            "imgProd1": "imgProd1",
            "rowSegTwoItems": "rowSegTwoItems",
            "lblSeparator": "lblSeparator"
        },
        "data": [{
            "imgProd2": "imagedrag.png",
            "btn2": "Button",
            "lblProdPrice1": "Label",
            "lblProdName1": "Label",
            "lblProdPrice2": "Label",
            "lblProdName2": "Label",
            "btn1": "Button",
            "imgProd1": "imagedrag.png",
            "lblSeparator": ""
        }, {
            "imgProd2": "imagedrag.png",
            "btn2": "Button",
            "lblProdPrice1": "Label",
            "lblProdName1": "Label",
            "lblProdPrice2": "Label",
            "lblProdName2": "Label",
            "btn1": "Button",
            "imgProd1": "imagedrag.png",
            "lblSeparator": ""
        }, {
            "imgProd2": "imagedrag.png",
            "btn2": "Button",
            "lblProdPrice1": "Label",
            "lblProdName1": "Label",
            "lblProdPrice2": "Label",
            "lblProdName2": "Label",
            "btn1": "Button",
            "imgProd1": "imagedrag.png",
            "lblSeparator": ""
        }],
        "Location": "[0,45]",
        "rowTemplate": flxMain,
        "rowSkin": "seg2Normal",
        "rowFocusSkin": "seg2Focus",
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "64646400",
        "showScrollbars": false,
        "groupCells": false,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});
    segRowItemsbox.add();
    var imgProd1 = new kony.ui.Image2({
        "id": "imgProd1",
        "top": "49dp",
        "left": "5%",
        "width": "150dp",
        "height": "150dp",
        "centerY": "50%",
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
        "top": "36dp",
        "left": "200dp",
        "width": "150dp",
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
    var lblProdPrice2 = new kony.ui.Label({
        "id": "lblProdPrice2",
        "top": "85dp",
        "left": "200dp",
        "width": "150dp",
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
    var btnClose = new kony.ui.Button({
        "id": "btnClose",
        "top": "150dp",
        "left": "200dp",
        "width": "150dp",
        "height": "50dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Close",
        "skin": "slButtonGlossBlue",
        "focusSkin": "slButtonGlossRed",
        "onClick": frmOneRowTwoItems_btnClose_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {});
    var FlexContainer0e378e636d6c142 = new kony.ui.FlexContainer({
        "id": "FlexContainer0e378e636d6c142",
        "top": "0",
        "width": "100%",
        "height": "220dp",
        "centerX": "50%",
        "centerY": "50%",
        "zIndex": 2,
        "isVisible": false,
        "clipBounds": true,
        "Location": "[0,115]",
        "skin": "flxPopSkin",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    FlexContainer0e378e636d6c142.setDefaultUnit(kony.flex.DP)
    FlexContainer0e378e636d6c142.add(imgProd1, lblProdName1, lblProdPrice2, btnClose);
    frmOneRowTwoItems.add(FlexContainer09ba3e0b3fa634a, Label0999382505cd447, segRowItems, FlexContainer0e378e636d6c142);
    frmOneRowTwoItems.setDefaultUnit(kony.flex.DP);
};

function frmOneRowTwoItemsGlobals() {
    var MenuId = [];
    frmOneRowTwoItems = new kony.ui.Form2({
        "id": "frmOneRowTwoItems",
        "enableScrolling": true,
        "bounces": true,
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "pagingEnabled": false,
        "needAppMenu": true,
        "title": null,
        "enabledForIdleTimeout": false,
        "skin": "frmBGColrSkin",
        "postShow": frmOneRowTwoItems_frmOneRowTwoItems_postshow_seq0,
        "layoutType": kony.flex.FREE_FORM,
        "addWidgets": addWidgetsfrmOneRowTwoItems
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false
    }, {
        "retainScrollPosition": false,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE,
        "titleBar": true,
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "formAnimation": 0
        },
        "outTransitionConfig": {
            "formAnimation": 0
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU
    });
};