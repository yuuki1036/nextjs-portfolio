import {
  Avatar,
  makeStyles,
  Theme,
} from "@material-ui/core";
import { VFC } from "react";
import theme from "../styles/theme";

type Props = {
  size: "small" | "large";
};

const useStyles = makeStyles((theme: Theme) => ({
  small: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    [theme.breakpoints.down("sm")]: {
      width: theme.spacing(4),
      height: theme.spacing(4),
    },
  },
  large: {
    width: theme.spacing(28),
    height: theme.spacing(28),
    [theme.breakpoints.down("sm")]: {
      width: theme.spacing(20),
      height: theme.spacing(20),
    },
  },
}));

const MyAvatar: VFC<Props> = ({ size }) => {
  const classes = useStyles();
  return (
    <Avatar
      alt="yuuki1036"
      src="/images/profile.jpg"
      className={
        size === "small" ? classes.small : classes.large
      }
    />
  );
};

export default MyAvatar;
