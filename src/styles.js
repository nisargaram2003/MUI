import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme?.palette?.background?.paper || "#fff",
    paddingTop: theme?.spacing ? theme.spacing(8) : "64px",
    paddingBottom: theme?.spacing ? theme.spacing(6) : "48px",
    textAlign: "center",
  },
  icon: {
    marginRight: "20px",
  },
  button: {
    marginTop: "40px",
  },
  cardGrid: {
    paddingTop: "40px",
    paddingBottom: "40px",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  cardMedia: {
    height: 200,
    objectFit: "cover",
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme?.palette?.background?.paper || "#eee",
    padding: theme?.spacing ? theme.spacing(6) : "48px",
    textAlign: "center",
  },
}));

export default useStyles;
