/*global QUnit*/

sap.ui.define([
	"org/indexit/fsui5app/controller/bpartner.controller"
], function (Controller) {
	"use strict";

	QUnit.module("bpartner Controller");

	QUnit.test("I should test the bpartner controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
