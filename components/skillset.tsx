import {
  Box,
  Grid,
  List,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { VFC } from "react";
import { Skill } from "types/skills";

type Props = {
  skills: Skill[];
};

const SkillSet: VFC<Props> = ({ skills }) => (
  <Box my={5}>
    <Grid container justifyContent="flex-start">
      {skills.map((skill, i) => {
        const items = skill.items;
        return (
          <Grid item xs={3} key={i}>
            <Box mt={3}>
              <Typography variant="h5">
                {skill.title}
              </Typography>
              <List>
                {items.map((item, j) => {
                  return (
                    <Box key={j}>
                      <ListItemText primary={item} />
                    </Box>
                  );
                })}
              </List>
            </Box>
          </Grid>
        );
      })}
    </Grid>
  </Box>
);

export default SkillSet;
