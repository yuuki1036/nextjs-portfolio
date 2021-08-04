import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { ArrowRight } from "@material-ui/icons";
import { VFC } from "react";

type Props = {
  skills: string[];
};

const OtherSkillSet: VFC<Props> = ({ skills }) => (
  <Box my={2}>
    <List>
      {skills.map((skill, i) => {
        return (
          <ListItem disableGutters key={i}>
            <ListItemIcon>
              <ArrowRight />
            </ListItemIcon>
            <ListItemText primary={skill} />
          </ListItem>
        );
      })}
    </List>
  </Box>
);

export default OtherSkillSet;
