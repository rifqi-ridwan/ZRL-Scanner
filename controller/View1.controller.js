sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ndc/BarcodeScanner",
	"sap/m/MessageBox"
], function (Controller, BarcodeScanner,MessageBox) {
	"use strict";

	return Controller.extend("rfq.apps.barcodeScanner.controller.View1", {
		onInit: function () {

		},

		onPress: function () {
			var currView = this.getView();
			var test = 'check';
			sap.ndc.BarcodeScanner.scan(
				function (mResult) {
					var textbox = currView.byId('inpt_valuescn');
					textbox.setValue(mResult.text);
				},
				function (Error) {
					MessageBox.show("Error");
				}
			);
		}
	});
});