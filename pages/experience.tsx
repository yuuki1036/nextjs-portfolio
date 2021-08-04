import {
  Box,
  Container,
  Divider,
  Typography,
} from "@material-ui/core";
import Layout from "components/layout";
import MyAvatar from "components/myavatar";
import MyHeader from "components/myheader";
import OtherSkillSet from "components/other-skillset";
import SkillSet from "components/skillset";
import {
  baseSkills,
  FrameworkSkills,
  others,
} from "lib/skill_data";

const Experience = () => {
  return (
    <Layout>
      <Container>
        <MyHeader
          isIndex={false}
          pageTitle={"experience"}
        />
        <Container className="rounded-md bg-gray-50">
          <Box mt={4} pt={2} pb={3} px={1}>
            <Typography variant="h5">Basic</Typography>
            <SkillSet skills={baseSkills} />
          </Box>
        </Container>
        <Container className="rounded-md bg-gray-50">
          <Box mt={4} pt={2} pb={3} px={1}>
            <Typography variant="h5">Framework</Typography>
            <SkillSet skills={FrameworkSkills} />
          </Box>
        </Container>
        <Container className="rounded-md bg-gray-50">
          <Box mt={4} pt={2} pb={3} px={1}>
            <Typography variant="h5">Others</Typography>
            <OtherSkillSet skills={others} />
          </Box>
        </Container>
      </Container>
    </Layout>
  );
};

export default Experience;
