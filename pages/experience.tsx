import { Container, Typography } from "@material-ui/core";
import Layout from "components/layout";
import MyAvatar from "components/myavatar";
import MyHeader from "components/myheader";
import SkillSet from "components/skillset";
import {
  baseSkills,
  FrameworkSkills,
} from "lib/skill_data";

const Experience = () => {
  return (
    <Layout>
      <Container>
        <MyHeader isIndex={false} />
        <Typography variant="h4">Basic</Typography>
        <SkillSet skills={baseSkills} />
        <Typography variant="h4">Frame Work</Typography>
        <SkillSet skills={FrameworkSkills} />
      </Container>
    </Layout>
  );
};

export default Experience;
