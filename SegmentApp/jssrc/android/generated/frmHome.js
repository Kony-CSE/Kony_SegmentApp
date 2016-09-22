//Form JS File
function frmHome_btnContext_onClick_seq0(eventobject) {
    frmButtonContext.show();
};

function frmHome_btnTwoItems_onClick_seq0(eventobject) {
    frmOneRowTwoItems.show();
};

function frmHome_btnSegEdit_onClick_seq0(eventobject) {
    frmSegRowEdit.show();
};

function frmHome_btnColExp_onClick_seq0(eventobject) {
    frmSegColAndExp.show();
};

function frmHome_btnDictionary_onClick_seq0(eventobject) {
    frmSegGestures.show();
};

function addWidgetsfrmHome() {
    var imgKony = new kony.ui.Image2({
        "id": "imgKony",
        "top": "2%",
        "left": "10dp",
        "width": "300dp",
        "height": "50dp",
        "zIndex": 1,
        "isVisible": true,
        "src": "logo.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 11
    }, {});
    var btnContext = new kony.ui.Button({
        "id": "btnContext",
        "top": "5%",
        "left": "15dp",
        "width": "75%",
        "height": "50dp",
        "centerX": "50%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Context Parameter",
        "skin": "btnMenuskin",
        "focusSkin": "slButtonGlossRed",
        "onClick": frmHome_btnContext_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 11
    }, {});
    var btnTwoItems = new kony.ui.Button({
        "id": "btnTwoItems",
        "top": "1%",
        "left": "15dp",
        "width": "75%",
        "height": "50dp",
        "centerX": "50.00%",
        "zIndex": 1,
        "isVisible": true,
        "text": "1 Row 2 Items",
        "skin": "btnMenuskin",
        "focusSkin": "slButtonGlossRed",
        "onClick": frmHome_btnTwoItems_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 11
    }, {});
    var btnSegEdit = new kony.ui.Button({
        "id": "btnSegEdit",
        "top": "1%",
        "left": "15dp",
        "width": "75%",
        "height": "50dp",
        "centerX": "50%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Segment Row Edit",
        "skin": "btnMenuskin",
        "focusSkin": "slButtonGlossRed",
        "onClick": frmHome_btnSegEdit_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 11
    }, {});
    var btnColExp = new kony.ui.Button({
        "id": "btnColExp",
        "top": "1%",
        "left": "15dp",
        "width": "75%",
        "height": "50dp",
        "centerX": "50%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Segment Row Col & Exp",
        "skin": "btnMenuskin",
        "focusSkin": "slButtonGlossRed",
        "onClick": frmHome_btnColExp_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 11
    }, {});
    var btnDictionary = new kony.ui.Button({
        "id": "btnDictionary",
        "top": "1%",
        "left": "15dp",
        "width": "75%",
        "height": "50dp",
        "centerX": "50%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Segment Gestures",
        "skin": "btnMenuskin",
        "focusSkin": "slButtonGlossRed",
        "onClick": frmHome_btnDictionary_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 11
    }, {});
    frmHome.add(imgKony, btnContext, btnTwoItems, btnSegEdit, btnColExp, btnDictionary);
    frmHome.setDefaultUnit(kony.flex.DP);
};

function frmHomeGlobals() {
    var MenuId = [];
    frmHome = new kony.ui.Form2({
        "id": "frmHome",
        "enableScrolling": true,
        "bounces": true,
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "pagingEnabled": false,
        "needAppMenu": true,
        "title": null,
        "enabledForIdleTimeout": false,
        "skin": "frmBGColrSkin",
        "layoutType": kony.flex.FLOW_VERTICAL,
        "addWidgets": addWidgetsfrmHome
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