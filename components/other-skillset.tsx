import {
  Box,
  Fab,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
} from "@material-ui/core";
import { ArrowRight, Launch } from "@material-ui/icons";
import { FC } from "react";
import { OtherSkill } from "types/other-skills";

type Props = {
  skills: OtherSkill[];
};

const OtherSkillSet: FC<Props> = ({ skills }) => (
  <Box my={1}>
    <List>
      {skills.map((data, i) => {
        return (
          <ListItem key={i}>
            <ListItemIcon>
              <ArrowRight />
            </ListItemIcon>
            <ListItemText primary={data.txt} />
            {data.href && (
              <ListItemSecondaryAction>
                <a
                  href={data.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton>
                    <Launch />
                  </IconButton>
                </a>
              </ListItemSecondaryAction>
            )}
          </ListItem>
        );
      })}
    </List>
  </Box>
);

export default OtherSkillSet;
