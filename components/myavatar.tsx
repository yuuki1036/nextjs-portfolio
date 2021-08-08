import {
  Avatar,
  Box,
  makeStyles,
  Theme,
} from "@material-ui/core";
import { VFC } from "react";
import theme from "pages/theme";

type Props = {
  size: "small" | "large";
};

const useStyles = makeStyles((theme: Theme) => ({
  small: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
  large: {
    width: theme.spacing(28),
    height: theme.spacing(28),
  },
}));

const MyAvatar: VFC<Props> = ({ size }) => {
  const classes = useStyles(theme);
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
