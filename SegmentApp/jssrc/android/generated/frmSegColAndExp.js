//Form JS File
function frmSegColAndExp_frmSegColAndExp_postshow_seq0(eventobject) {
    CandESegmentData.call(this);
};

function frmSegColAndExp_Button0cc1f45d6080d40_onClick_seq0(eventobject) {
    frmHome.show();
};

function addWidgetsfrmSegColAndExp() {
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
        "focusSkin": "CopyslButtonGlossBlue0fd7f57b2d0b04b",
        "onClick": frmSegColAndExp_Button0cc1f45d6080d40_onClick_seq0
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
        "text": "Collapse  & Expand",
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
    var segColExpbox = new kony.ui.FlexContainer({
        "id": "segColExpbox",
        "isVisible": true,
        "orientation": null,
        "width": "100%",
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "layoutType": kony.flex.FLOW_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": null
    }, {});
    var segColExp = new kony.ui.SegmentedUI2({
        "id": "segColExp",
        "top": "10%",
        "left": "0dp",
        "width": "100%",
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "zIndex": 1,
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "rowSegColAndExp": "rowSegColAndExp",
            "lblProdName": "lblProdName",
            "flexContainer999296733161203": "flexContainer999296733161203",
            "flxProdDesc": "flxProdDesc",
            "flxCMain": "flxCMain",
            "prodDescription": "prodDescription",
            "btnProd": "btnProd",
            "imgProd": "imgProd",
            "lblProdPrice": "lblProdPrice"
        },
        "data": [{
            "lblProdName": "Label",
            "prodDescription": "",
            "btnProd": "View Prod",
            "imgProd": "imagedrag.png",
            "lblProdPrice": "Label"
        }, {
            "lblProdName": "Label",
            "prodDescription": "",
            "btnProd": "View Prod",
            "imgProd": "imagedrag.png",
            "lblProdPrice": "Label"
        }, {
            "lblProdName": "Label",
            "prodDescription": "",
            "btnProd": "View Prod",
            "imgProd": "imagedrag.png",
            "lblProdPrice": "Label"
        }],
        "Location": "[0,45]",
        "rowTemplate": flxCMain,
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
        "layoutType": kony.flex.FLOW_VERTICAL
    }, {
        "padding": [0, 0, 0, 0]
    }, {});
    segColExpbox.add();
    frmSegColAndExp.add(FlexContainer09ba3e0b3fa634a, Label0999382505cd447, segColExp);
    frmSegColAndExp.setDefaultUnit(kony.flex.DP);
};

function frmSegColAndExpGlobals() {
    var MenuId = [];
    frmSegColAndExp = new kony.ui.Form2({
        "id": "frmSegColAndExp",
        "enableScrolling": true,
        "bounces": true,
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "pagingEnabled": false,
        "needAppMenu": true,
        "title": null,
        "enabledForIdleTimeout": false,
        "skin": "frmBGColrSkin",
        "postShow": frmSegColAndExp_frmSegColAndExp_postshow_seq0,
        "layoutType": kony.flex.FREE_FORM,
        "addWidgets": addWidgetsfrmSegColAndExp
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