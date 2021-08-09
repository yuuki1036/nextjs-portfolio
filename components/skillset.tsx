import {
  Box,
  Divider,
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
  <Box mt={1}>
    <Grid container spacing={2} alignItems="baseline">
      {skills.map((skill, i) => {
        const items = skill.items;
        return (
          <Grid item xs={6} md={3} key={i}>
            <Box mt={1}>
              <Typography variant="body1">
                <p className="font-bold">{skill.title}</p>
              </Typography>
              <Divider />
              <List>
                {items.map((item, j) => {
                  return (
                    <ListItemText primary={item} key={j} />
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
