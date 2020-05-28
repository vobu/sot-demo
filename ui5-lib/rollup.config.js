import resolve from "rollup-plugin-node-resolve"

module.exports = {
    input: "rollup-bundle.js",
    output: {
        file: "dist/resources/sotlib/sotlib-bundle.js",
        format: "amd",
        amd: {
            define: "sap.ui.define"
        }
    },
    plugins: [resolve()]
}
