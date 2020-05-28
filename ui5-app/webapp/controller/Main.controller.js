sap.ui.define(
    ["sap/ui/core/mvc/Controller"]
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @yields {typeof sap.ui.core.mvc.Controller}
     */,
    (Controller) => {
        "use strict"

        return Controller.extend("demo.sot.sot.controller.Main", {
            onInit() {},

            /**
             * @param {typeof sap.ui.base.Event} oEvent 
             */
            onPeopleSelect(oEvent) {
                const oListItemSelected = oEvent.getParameters().listItem
                this._onPeopleSelect(oListItemSelected)
            },

            onPeopleSelectInWebcomponent(oEvent) {
                const oListItemSelected = oEvent.getSource() // different from retrieving selected XML control!
                this._onPeopleSelect(oListItemSelected)
            },

            _onPeopleSelect(oListItemSelected) {
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
    }
)
