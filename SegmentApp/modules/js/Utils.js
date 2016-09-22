function buttonContext()
{
	frmButtonContext.segBtnContext.widgetDataMap={imgProd:"imgProd", lblProdName:"lblProdName", lblProdPrice:"lblProdPrice", btnProd:"btnProd"};
	
	var masterTable=[{imgProd:"img1.png", lblProdName:"Food Item 1", lblProdPrice:"$12.23", btnProd:"View Prod"},
					 {imgProd:"img2.png", lblProdName:"Food Item 2", lblProdPrice:"$11.13", btnProd:"View Prod"},
					 {imgProd:"img3.png", lblProdName:"Food Item 3", lblProdPrice:"$12.21", btnProd:"View Prod"},
					 {imgProd:"img1.png", lblProdName:"Food Item 4", lblProdPrice:"$14.22", btnProd:"View Prod"},
					 {imgProd:"img2.png", lblProdName:"Food Item 5", lblProdPrice:"$15.24", btnProd:"View Prod"},
					 {imgProd:"img3.png", lblProdName:"Food Item 6", lblProdPrice:"$16.13", btnProd:"View Prod"}
					];
	frmButtonContext.segBtnContext.setData(masterTable);				
}

function getProdContext(context)
{
	var img=JSON.stringify(context.widgetInfo.selectedItems[0]["imgProd"]);
	frmButtonContext.imgProd1.src=img.slice(1, -1);
	frmButtonContext.lblProdName1.text=JSON.stringify(context.widgetInfo.selectedItems[0]["lblProdName"]);
	frmButtonContext.lblProdPrice2.text=JSON.stringify(context.widgetInfo.selectedItems[0]["lblProdPrice"]);
	frmButtonContext.FlexContainer0e378e636d6c142.setVisibility(true);
	
}

function closeProdPop()
 {
 	frmButtonContext.FlexContainer0e378e636d6c142.setVisibility(false);
 }

 function recordWithTwoItems()
 {
 	frmOneRowTwoItems.segRowItems.widgetDataMap={imgProd1:"imgProd1", lblProdName1:"lblProdName1", lblProdPrice1:"lblProdPrice1", btn1:"btn1", imgProd2:"imgProd2", lblProdName2:"lblProdName2", lblProdPrice2:"lblProdPrice2", btn2:"btn2"};
 	
 	var masterTable=[{imgProd1:"img1.png", lblProdName1:"Food Item 1", lblProdPrice1:"$12.23", btn1:{info:{a:'Item1'}}, imgProd2:"img2.png", lblProdName2:"Food Item 2", lblProdPrice2:"$11.13", btn2:{info:{a:'Item2'}}},
					 {imgProd1:"img2.png", lblProdName1:"Food Item 3", lblProdPrice1:"$11.13", btn1:{info:{a:'Item1'}}, imgProd2:"img3.png", lblProdName2:"Food Item 4", lblProdPrice2:"$12.21", btn2:{info:{a:'Item2'}}},
					 {imgProd1:"img3.png", lblProdName1:"Food Item 5", lblProdPrice1:"$12.21", btn1:{info:{a:'Item1'}}, imgProd2:"img1.png", lblProdName2:"Food Item 6", lblProdPrice2:"$14.22", btn2:{info:{a:'Item2'}}},
					 {imgProd1:"img1.png", lblProdName1:"Food Item 7", lblProdPrice1:"$14.22", btn1:{info:{a:'Item1'}}, imgProd2:"img2.png", lblProdName2:"Food Item 8", lblProdPrice2:"$15.24", btn2:{info:{a:'Item2'}}},
					 {imgProd1:"img2.png", lblProdName1:"Food Item 9", lblProdPrice1:"$15.24", btn1:{info:{a:'Item1'}}, imgProd2:"img3.png", lblProdName2:"Food Item 10", lblProdPrice2:"$16.13", btn2:{info:{a:'Item2'}}},
					 {imgProd1:"img3.png", lblProdName1:"Food Item 11", lblProdPrice1:"$16.13", btn1:{info:{a:'Item1'}}, imgProd2:"img1.png", lblProdName2:"Food Item 12", lblProdPrice2:"$12.23", btn2:{info:{a:'Item2'}}}
					];
	frmOneRowTwoItems.segRowItems.setData(masterTable);				
 }

 function segButtonContextEvent2(eventobject, context)
{
	var selectedItem=eventobject.info.a;
	if(selectedItem=='Item1')
	{
	//alert("Selected Index:["+context.sectionIndex+","+context.rowIndex+"], SelectedItem:Item 1 is selected");
	var img1=JSON.stringify(context.widgetInfo.selectedItems[0]["imgProd1"]);
	frmOneRowTwoItems.imgProd1.src=img1.slice(1, -1);
	frmOneRowTwoItems.lblProdName1.text=JSON.stringify(context.widgetInfo.selectedItems[0]["lblProdName1"]);
	frmOneRowTwoItems.lblProdPrice2.text=JSON.stringify(context.widgetInfo.selectedItems[0]["lblProdPrice1"]);
	frmOneRowTwoItems.FlexContainer0e378e636d6c142.setVisibility(true);
	}
	else
	{
	//alert("Selected Index:["+context.sectionIndex+","+context.rowIndex+"], SelectedItem:Item 2 is selected");
	var img2=JSON.stringify(context.widgetInfo.selectedItems[0]["imgProd2"]);
	frmOneRowTwoItems.imgProd1.src=img2.slice(1, -1);
	frmOneRowTwoItems.lblProdName1.text=JSON.stringify(context.widgetInfo.selectedItems[0]["lblProdName2"]);
	frmOneRowTwoItems.lblProdPrice2.text=JSON.stringify(context.widgetInfo.selectedItems[0]["lblProdPrice2"]);
	frmOneRowTwoItems.FlexContainer0e378e636d6c142.setVisibility(true);
	}
}

 function closeProdPop2()
 {
 	frmOneRowTwoItems.FlexContainer0e378e636d6c142.setVisibility(false);
 }

 var editSegData=[];
 function editSegmentData()
 {
 	frmSegRowEdit.segEdit.widgetDataMap={img:"img", lbl:"lbl"};
 	
 	editSegData=[
 					{img:{src:"check_btn.png"}, lbl:"Segment Record data1"},
 					{img:{src:"check_btn.png"}, lbl:"Segment Record data2"},
 					{img:{src:"check_btn.png"}, lbl:"Segment Record data3"},
 					{img:{src:"check_btn.png"}, lbl:"Segment Record data4"},
 					{img:{src:"check_btn.png"}, lbl:"Segment Record data5"},
 					{img:{src:"check_btn.png"}, lbl:"Segment Record data6"},
 					{img:{src:"check_btn.png"}, lbl:"Segment Record data7"},
 					{img:{src:"check_btn.png"}, lbl:"Segment Record data8"}
 				];
 	frmSegRowEdit.segEdit.setData(editSegData);			
 }

 function editSelectedRecord()
 {
 	var selectedIndex=frmSegRowEdit.segEdit.selectedIndex;
 	var rowIndex=selectedIndex[1];
 	var selectedItem=frmSegRowEdit.segEdit.selectedItems;
 	for(var i=0; i<editSegData.length; i++)
 	{
 		if(i==rowIndex)
 		{
 			selectedItem["img"]={src:"check_btn_f.png"}
 			selectedItem["lbl"]="Segment Lable Date Edited";
 		}
 		frmSegRowEdit.segEdit.setDataAt(selectedItem, selectedIndex[1], selectedIndex[0]);
 	}
 	
 }
 

 var ceTable=[];
 function CandESegmentData()
 {
 	frmSegColAndExp.segColExp.widgetDataMap={imgProd:"imgProd", lblProdName:"lblProdName", lblProdPrice:"lblProdPrice", btnProd:"btnProd", prodDescription:"prodDescription", flxProdDesc:"flxProdDesc"};
 	
 	ceTable=[{imgProd:"img1.png", lblProdName:"Food Item 1", lblProdPrice:"$12.23", btnProd:"View Prod",prodDescription:"Eggs boiled and roasted in masala gravy in Tomato and spices; served with Basmati Rice", flxProdDesc:{isVisible:false}},
					 {imgProd:"img2.png", lblProdName:"Food Item 2", lblProdPrice:"$11.13", btnProd:"View Prod",prodDescription:"Eggs boiled and roasted in masala gravy in Tomato and spices; served with Basmati Rice", flxProdDesc:{isVisible:false}},
					 {imgProd:"img3.png", lblProdName:"Food Item 3", lblProdPrice:"$12.21", btnProd:"View Prod",prodDescription:"Eggs boiled and roasted in masala gravy in Tomato and spices; served with Basmati Rice", flxProdDesc:{isVisible:false}},
					 {imgProd:"img1.png", lblProdName:"Food Item 4", lblProdPrice:"$14.22", btnProd:"View Prod",prodDescription:"Eggs boiled and roasted in masala gravy in Tomato and spices; served with Basmati Rice", flxProdDesc:{isVisible:false}},
					 {imgProd:"img2.png", lblProdName:"Food Item 5", lblProdPrice:"$15.24", btnProd:"View Prod",prodDescription:"Eggs boiled and roasted in masala gravy in Tomato and spices; served with Basmati Rice", flxProdDesc:{isVisible:false}},
					 {imgProd:"img3.png", lblProdName:"Food Item 6", lblProdPrice:"$16.13", btnProd:"View Prod",prodDescription:"Eggs boiled and roasted in masala gravy in Tomato and spices; served with Basmati Rice", flxProdDesc:{isVisible:false}}
					];
	frmSegColAndExp.segColExp.setData(ceTable);				
 }
 
 function showHiddenDescription(context)
 {
 	var rowIndex=context.rowIndex;
    for(var i=0; i<ceTable.length; i++)
 	{
 		if(i==rowIndex)
 		{
 			if(ceTable[i]["flxProdDesc"]["isVisible"]==false)
 			{
 				ceTable[i]["flxProdDesc"]={isVisible:true}
 				ceTable[i]["btnProd"]="Hide"
 			}
 			else
 			{
 				ceTable[i]["flxProdDesc"]={isVisible:false}
 				ceTable[i]["btnProd"]="View Prod"
 			}
 			
 			
 		}
 	}
 	frmSegColAndExp.segColExp.setData(ceTable);	
 }

 function GestureSegmentData()
 {
 	frmSegGestures.segGestures.widgetDataMap={img:"img", lbl:"lbl"};
 	
 	var editSegData=[
 					{img:{src:"check_btn.png"}, lbl:"Segment Record data1"},
 					{img:{src:"check_btn.png"}, lbl:"Segment Record data2"},
 					{img:{src:"check_btn.png"}, lbl:"Segment Record data3"},
 					{img:{src:"check_btn.png"}, lbl:"Segment Record data4"},
 					{img:{src:"check_btn.png"}, lbl:"Segment Record data5"},
 					{img:{src:"check_btn.png"}, lbl:"Segment Record data6"},
 					{img:{src:"check_btn.png"}, lbl:"Segment Record data7"},
 					{img:{src:"check_btn.png"}, lbl:"Segment Record data8"}
 				];
 	frmSegGestures.segGestures.setData(editSegData);			
 }
 

 function GenericGestureHandler(  ){
	
	rowEditSeg.setGestureRecognizer (1, { fingers : 1, taps : 2 }, onGestureFunction);//double tap gesture
	rowEditSeg.setGestureRecognizer (2, { fingers : 1, swipedistance : 50, swipevelocity : 75 }, onGestureFunction);// swipe with default parameters
    rowEditSeg.setGestureRecognizer (3, { pressDuration : 2 }, onGestureFunction);// 2 sec press duration
}

 function onGestureFunction( commonWidget, gestureInfo, context ){
	    kony.print("Context:"+context);
	    kony.print("RowIndex"+context.rowIndex);
        kony.print("Section Idex:"+context.sectionIndex);
        kony.print("Widget Info:"+context.widgetInfo);
	var direction = "";
	var GesType = "" + gestureInfo.gestureType;
	if((GesType == "1")){
		kony.ui.Alert("Double tap gesture",
		               null,
		               "Information",
		               "Yes",
		               "No",
		               "Info",
		               null);
	}
	else if((GesType == "2")){
		var swipeDirection = "" + gestureInfo.swipeDirection;//Read swipe direction

		if((swipeDirection == "1")){
			direction = "LEFT";
		}else if((swipeDirection == "2")){
			direction = "RIGHT";
		}else if((swipeDirection == "3")){
			direction = "TOP";
		}else{
			direction = "BOTTOM";
		}
		kony.ui.Alert(direction+"Swipe gesture",
		               null,
		               "Information",
		               "Yes",
		               "No",
		               "Info",
		               null);
}
	else if((GesType == "3")){
		kony.ui.Alert("Longpress tap gesture",
		               null,
		               "Information",
		               "Yes",
		               "No",
		               "Info",
		               null);

	}
}