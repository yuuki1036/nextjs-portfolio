import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { ArrowRight } from "@material-ui/icons";
import { FC } from "react";

type Props = {
  skills: string[];
};

const OtherSkillSet: FC<Props> = ({ skills }) => (
  <Box my={1}>
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
