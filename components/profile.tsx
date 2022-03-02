import {
  Box,
  Button,
  Grid,
  Typography,
} from "@material-ui/core";
import { PlayCircleOutline } from "@material-ui/icons";
import Link from "next/link";
import { FC } from "react";

const Profile: FC = () => {
  return (
    <section>
      <Box mt={5}>
        <Grid container>
          <Typography>
            WEB系フルスタックエンジニアです。主にECサイトの開発・保守を経験してきました。最近はReactやTypeScriptを勉強しています。クラウドの学習を兼ねてAWS認定ソリューションアーキテクトアソシエイトを取得しました。
            <br />
            現在はフリーランスエンジニアとして案件をこなしながら、転職活動を行っています。
          </Typography>
          <Box mt={3}>
            <Link href="/experience" passHref>
              <a>
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<PlayCircleOutline />}
                >
                  経験・スキル一覧
                </Button>
              </a>
            </Link>
          </Box>
        </Grid>
      </Box>
    </section>
  );
};

export default Profile;
