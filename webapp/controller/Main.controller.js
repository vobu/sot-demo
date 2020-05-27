sap.ui.define(["sap/ui/core/mvc/Controller"], (Controller) => {
    "use strict"

    return Controller.extend("demo.sot.sot.controller.Main", {
        onInit() {},

        onPeopleSelect(oEvent) {
            const oListItemSelected = oEvent.getParameters().listItem
            const sPersonDetail = oListItemSelected.getBindingContext("Backend").getPath()
            const sModelBasePath = oListItemSelected.getBindingContext("Backend").getModel().sServiceUrl // I know
            fetch(`${sModelBasePath}${sPersonDetail}?$format=json`)
                .then((response) => response.json())
                .then((oPersonDetailData) => {
                    this.getView().getModel("PeopleDetail").setData(oPersonDetailData)
                })
                .catch((err) => console.error(err))
        }
    })
})
