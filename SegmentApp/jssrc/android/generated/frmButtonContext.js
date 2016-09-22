//Form JS File
function frmButtonContext_frmButtonContext_postshow_seq0(eventobject) {
    buttonContext.call(this);
};

function frmButtonContext_Button0cc1f45d6080d40_onClick_seq0(eventobject) {
    frmHome.show();
};

function frmButtonContext_btnClose_onClick_seq0(eventobject) {
    closeProdPop.call(this);
};

function addWidgetsfrmButtonContext() {
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
        "onClick": frmButtonContext_Button0cc1f45d6080d40_onClick_seq0
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
        "text": "Context Patemeter",
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
    var segBtnContextbox = new kony.ui.FlexContainer({
        "id": "segBtnContextbox",
        "isVisible": true,
        "orientation": null,
        "width": "100%",
        "height": "40dp",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": null
    }, {});
    var segBtnContext = new kony.ui.SegmentedUI2({
        "id": "segBtnContext",
        "top": "10%",
        "left": "0dp",
        "width": "100%",
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "zIndex": 1,
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "lblProdName": "lblProdName",
            "btnProd": "btnProd",
            "rowSegBtnContext": "rowSegBtnContext",
            "imgProd": "imgProd",
            "FlexContainer004712bbb23a74e": "FlexContainer004712bbb23a74e",
            "lblProdPrice": "lblProdPrice"
        },
        "data": [{
            "lblProdName": "Label",
            "btnProd": "View Prod",
            "imgProd": "imagedrag.png",
            "lblProdPrice": "Label"
        }, {
            "lblProdName": "Label",
            "btnProd": "View Prod",
            "imgProd": "imagedrag.png",
            "lblProdPrice": "Label"
        }, {
            "lblProdName": "Label",
            "btnProd": "View Prod",
            "imgProd": "imagedrag.png",
            "lblProdPrice": "Label"
        }],
        "Location": "[0,45]",
        "rowTemplate": FlexContainer004712bbb23a74e,
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
    segBtnContextbox.add();
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
    var lblProdPrice2 = new kony.ui.Label({
        "id": "lblProdPrice2",
        "top": "85dp",
        "left": "200dp",
        "width": "150dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Label",
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
        "onClick": frmButtonContext_btnClose_onClick_seq0
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
    frmButtonContext.add(FlexContainer09ba3e0b3fa634a, Label0999382505cd447, segBtnContext, FlexContainer0e378e636d6c142);
    frmButtonContext.setDefaultUnit(kony.flex.DP);
};

function frmButtonContextGlobals() {
    var MenuId = [];
    frmButtonContext = new kony.ui.Form2({
        "id": "frmButtonContext",
        "enableScrolling": true,
        "bounces": true,
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "pagingEnabled": false,
        "needAppMenu": true,
        "title": null,
        "enabledForIdleTimeout": false,
        "skin": "frmBGColrSkin",
        "postShow": frmButtonContext_frmButtonContext_postshow_seq0,
        "layoutType": kony.flex.FREE_FORM,
        "addWidgets": addWidgetsfrmButtonContext
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