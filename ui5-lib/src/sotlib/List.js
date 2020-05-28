sap.ui.define(["sap/ui/core/Control"], Control => {
    const List = Control.extend("sotlib.List", {
        metadata: {
            properties: {
                mode: {
                    type: "sotlib.ListMode"
                },
                width: { type: "string", defaultValue: "" }
            },
            defaultAggregation: "items",
            aggregations: {
                items: {
                    type: "sap.ui.core.Control",
                    multiple: true
                }
            },
            events: {}
        },

        renderer: {
            apiVersion: 2, // high-perf (re-)rendering
            render(oRM, oList) {
                oRM.openStart("ui5-list", oList)
                oRM.attr("mode", oList.getMode())
                oRM.openEnd()

                oList.getItems().forEach(item => {
                    oRM.renderControl(item)
                })

                oRM.close("ui5-list")
            }
        }
    })

    return List
})
