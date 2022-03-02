import { Box, Typography } from "@material-ui/core";
import Head from "next/head";
import Layout from "components/layout";
import MyHeader from "components/myheader";
import OtherSkillSet from "components/other-skillset";
import SkillSet from "components/skillset";
import { SITE_NAME } from "lib/constants";
import {
  baseSkills,
  certification,
  FrameworkSkills,
  others,
} from "lib/skill_data";

const Experience = () => {
  return (
    <>
      <Head>
        <title>experience | {SITE_NAME}</title>
        <meta
          name="description"
          content="webエンジニア・webプログラマyuuki1036の業務経験・スキル一覧です。"
        />
      </Head>
      <Layout isBack={true}>
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
            <Box mt={4} pt={2} pb={2} px={2}>
              <Typography variant="h5" component="h3">
                Framework
              </Typography>
              <SkillSet skills={FrameworkSkills} />
            </Box>
          </Box>
          <Box className="rounded-md bg-gray-50">
            <Box mt={4} pt={2} pb={2} px={2}>
              <Typography variant="h5" component="h3">
                Others
              </Typography>
              <OtherSkillSet skills={others} />
            </Box>
          </Box>
          <Box className="rounded-md bg-gray-50">
            <Box mt={4} pt={2} pb={1} px={2}>
              <Typography variant="h5" component="h3">
                certification
              </Typography>
              <OtherSkillSet skills={certification} />
            </Box>
          </Box>
        </Box>
      </Layout>
    </>
  );
};

export default Experience;
