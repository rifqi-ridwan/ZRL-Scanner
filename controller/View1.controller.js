sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox"
], function (Controller, MessageBox) {
	"use strict";

	return Controller.extend("rfq.apps.barcodeScanner.controller.View1", {
		onInit: function () {

		},

		onPress: function () {
			var currView = this.getView();
			cordova.plugins.BarcodeScanner.scan(
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