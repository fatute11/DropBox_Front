import { createStyles, Theme } from "@material-ui/core";

export type Styles = "menuRoot"| "img";
const styles = (theme: Theme) => createStyles<Styles, {}>({
    menuRoot:{
        backgroundColor: "#dddddd",
        position: "fixed",
        height: "100vh",
        width: "16vw"
    },
    img:{
        width: "30%",
        margin: "5em"
    }
});

export default styles;