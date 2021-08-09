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
      <Box mb={8}>
        <MyHeader
          isIndex={false}
          pageTitle={"experience"}
        />
        <Box className="rounded-md bg-gray-50">
          <Box mt={4} pt={2} pb={2} px={2}>
            <Typography variant="h5" component="h3">
              Basic
            </Typography>
            <SkillSet skills={baseSkills} />
          </Box>
        </Box>
        <Box className="rounded-md bg-gray-50">
          <Box mt={4} pt={2} pb={3} px={2}>
            <Typography variant="h5" component="h3">
              Framework
            </Typography>
            <SkillSet skills={FrameworkSkills} />
          </Box>
        </Box>
        <Box className="rounded-md bg-gray-50">
          <Box mt={4} pt={2} pb={3} px={2}>
            <Typography variant="h5" component="h3">
              Others
            </Typography>
            <OtherSkillSet skills={others} />
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default Experience;
