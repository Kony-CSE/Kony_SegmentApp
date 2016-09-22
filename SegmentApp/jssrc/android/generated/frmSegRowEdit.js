//Form JS File
function frmSegRowEdit_frmSegRowEdit_postshow_seq0(eventobject) {
    editSegmentData.call(this);
};

function frmSegRowEdit_segEdit_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    editSelectedRecord.call(this);
};

function addWidgetsfrmSegRowEdit() {
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
        "focusSkin": "slButtonGlossRed"
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
        "text": "Edit Record",
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
    var segEditbox = new kony.ui.FlexContainer({
        "id": "segEditbox",
        "isVisible": true,
        "orientation": null,
        "width": "100%",
        "height": "40dp",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": null
    }, {});
    var segEdit = new kony.ui.SegmentedUI2({
        "id": "segEdit",
        "top": "10%",
        "left": "0dp",
        "width": "100%",
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "zIndex": 1,
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "lbl": "lbl",
            "img": "img",
            "rowEditSeg": "rowEditSeg",
            "rowSegEdit": "rowSegEdit"
        },
        "Location": "[0,45]",
        "rowTemplate": rowEditSeg,
        "rowSkin": "seg2Normal",
        "rowFocusSkin": "seg2Focus",
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "64646400",
        "showScrollbars": false,
        "groupCells": false,
        "onRowClick": frmSegRowEdit_segEdit_onRowClick_seq0,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});
    segEditbox.add();
    frmSegRowEdit.add(FlexContainer09ba3e0b3fa634a, Label0999382505cd447, segEdit);
    frmSegRowEdit.setDefaultUnit(kony.flex.DP);
};

function frmSegRowEditGlobals() {
    var MenuId = [];
    frmSegRowEdit = new kony.ui.Form2({
        "id": "frmSegRowEdit",
        "enableScrolling": true,
        "bounces": true,
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "pagingEnabled": false,
        "needAppMenu": true,
        "title": null,
        "enabledForIdleTimeout": false,
        "skin": "frmBGColrSkin",
        "postShow": frmSegRowEdit_frmSegRowEdit_postshow_seq0,
        "layoutType": kony.flex.FREE_FORM,
        "addWidgets": addWidgetsfrmSegRowEdit
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