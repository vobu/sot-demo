/**
 * Initialization Code and shared classes of library sotlib.
 */
sap.ui.define(
    ["sap/ui/core/Core", "sap/ui/core/library", "./sotlib-bundle"], // library dependency
    () => {
        // delegate further initialization of this library to the Core
        sap.ui.getCore().initLibrary({
            name: "sotlib",
            dependencies: ["sap.ui.core"],
            types: ["sotlib.ListMode"],
            interfaces: [],
            controls: [
                "sotlib.List",
                "sotlib.StandardListItem",
            ],
            elements: [],
            noLibraryCSS: true
        })

        /**
         * UI5 Web Components controls.
         *
         * @namespace
         * @alias sotlib
         * @public
         */
        const oLib = sotlib

        oLib.ListMode = {
            None: "None",
            SingleSelect: "SingleSelect",
            MultiSelect: "MultiSelect",
            Delete: "Delete"
        }

        return oLib
    }
)
