import { createStyles, Theme } from "@material-ui/core";

export type Styles = "uploadContainer" | "dragNdropArea";
const styles = (theme: Theme) => createStyles<Styles, {}>({
    uploadContainer: {
        background: "rgba(0,123,255,.5)",
        padding: "1em",
        height: "20em"
    },
    dragNdropArea: {
        height: "18em",
        border: "0.5em dashed #f8f9fa",
        borderRadius: "2em",
        textAlign: "center",
        color: "#ffffff"
    }
});

export default styles;