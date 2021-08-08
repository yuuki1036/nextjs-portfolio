import {
  Box,
  Divider,
  Table,
  TableBody,
  TableContainer,
  TableRow,
  TableCell,
  Typography,
  TableHead,
  Paper,
} from "@material-ui/core";
import { FC } from "react";
import Spec from "types/spec";

type Props = {
  title: string;
  specs: Spec;
};

const createData = (name: string, value: string) => {
  return { name, value };
};

const PostItemSpecs: FC<Props> = ({ title, specs }) => {
  const rows = [
    ...Object.entries(specs).map(([name, value]) =>
      createData(name, value),
    ),
  ];
  return (
    <Box my={5}>
      <Box>
        <Typography variant="h5">{title}</Typography>
      </Box>
      <Box mt={1} p={1}>
        <TableContainer>
          <Table size="small">
            <TableBody>
              {rows.map((row, i) => {
                return (
                  <TableRow key={i}>
                    <TableCell>
                      <Typography variant="body1">
                        {row.name}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body1">
                        {row.value}
                      </Typography>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default PostItemSpecs;
