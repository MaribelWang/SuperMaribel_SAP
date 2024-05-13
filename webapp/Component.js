sap.ui.define(
  ["sap/ui/core/UIComponent", "sap/ui/model/json/JSONModel"],
  function (UIComponent, JSONModel) {
    "use strict";

    return UIComponent.extend("project1.Component", {
      metadata: {
        interfaces: ["sap.ui.core.IAsyncContentCreation"],
        manifest: "json",
      },
      init: function () {
        // call the base component's init function
        UIComponent.prototype.init.apply(this, arguments);

        const oData = {
          recipient: {
            name: "Jingwei",
          },
        };
        const oModel = new JSONModel(oData);
        this.setModel(oModel);
      },
    });
  }
);
