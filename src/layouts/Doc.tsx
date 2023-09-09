import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  MenuItem,
  SxProps,
  TextField,
  Theme,
  Typography,
} from "@mui/material";
import { JsonView, darkStyles } from "react-json-view-lite";
import "react-json-view-lite/dist/index.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { getRoman, getLshk, getYale, pingyam } from "cantonese-romanisation";
import { useCallback, useState } from "react";

interface DocState {
  roman: string;
  yale: string;
  lshk: string;
  py: string;
  system: "roman" | "lshk" | "yale";
}

const Doc = () => {
  const [state, setState] = useState<DocState>(DEFAULT_STATE);

  const handleChange = useCallback((field: keyof DocState, v: string) => {
    setState((prev) => ({
      ...prev,
      [field]: v,
    }));
  }, []);

  const alwaysExpanded = true;

  return (
    <Box sx={rootSx}>
      <Accordion expanded={alwaysExpanded}>
        <AccordionSummary sx={accordionSummarySx}>
          <Typography variant="h6">Installation</Typography>
          <Typography variant="body1">
            <i>cantonese-romanisation</i>
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={detailSx}>
          <Box sx={{ flex: 1 }}>
            <SyntaxHighlighter
              language="bash"
              lineProps={{
                style: { wordBreak: "break-all", whiteSpace: "pre-wrap" },
              }}
              wrapLines={true}
            >
              {
                "npm install cantonese-romanisation\n\n# or\n\nyarn add cantonese-romanisation"
              }
            </SyntaxHighlighter>
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary sx={accordionSummarySx}>
          <Typography variant="h6">
            {"getRoman( input: string ): Array<string[]>"}
          </Typography>
          <Typography variant="body1">
            <i>
              returns possible Cantonese romanisation for each Chinese character
              in the input string
            </i>
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={detailSx}>
          <Box sx={{ flex: 1 }}>
            <TextField
              value={state.roman}
              onChange={(e) => handleChange("roman", e.target.value)}
              fullWidth
            />
            <SyntaxHighlighter
              language="tsx"
              lineProps={{
                style: { wordBreak: "break-all", whiteSpace: "pre-wrap" },
              }}
              wrapLines={true}
            >
              {getRomanCode(state.roman)}
            </SyntaxHighlighter>
          </Box>
          <Box sx={{ flex: 1, my: 1 }}>
            <JsonView
              data={getRoman(state.roman)}
              style={{
                ...darkStyles,
                container: `${darkStyles.container} json-container`,
              }}
            />
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary sx={accordionSummarySx}>
          <Typography variant="h6">
            {"getLshk( input: string ): Array<string[]>"}
          </Typography>
          <Typography variant="body1">
            <i>
              returns possible Cantonese LSHK Pinyin for each Chinese character
              in the input string
            </i>
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={detailSx}>
          <Box sx={{ flex: 1 }}>
            <TextField
              type="text"
              value={state.lshk}
              onChange={(e) => handleChange("lshk", e.target.value)}
              fullWidth
            />
            <SyntaxHighlighter
              language="tsx"
              lineProps={{
                style: { wordBreak: "break-all", whiteSpace: "pre-wrap" },
              }}
              wrapLines={true}
            >
              {getLshkCode(state.lshk)}
            </SyntaxHighlighter>
          </Box>
          <Box sx={{ flex: 1, my: 1 }}>
            <JsonView
              data={getLshk(state.lshk)}
              style={{
                ...darkStyles,
                container: `${darkStyles.container} json-container`,
              }}
            />
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary sx={accordionSummarySx}>
          <Typography variant="h6">
            {"getYale( input: string ): Array<string[]>"}
          </Typography>
          <Typography variant="body1">
            <i>
              returns possible Yale Pinyin for each Chinese character in the
              input string
            </i>
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={detailSx}>
          <Box sx={{ flex: 1 }}>
            <TextField
              type="text"
              value={state.yale}
              onChange={(e) => handleChange("yale", e.target.value)}
              fullWidth
            />
            <SyntaxHighlighter
              language="tsx"
              lineProps={{
                style: { wordBreak: "break-all", whiteSpace: "pre-wrap" },
              }}
              wrapLines={true}
            >
              {getYaleCode(state.yale)}
            </SyntaxHighlighter>
          </Box>
          <Box sx={{ flex: 1, my: 1 }}>
            <JsonView
              data={getYale(state.yale)}
              style={{
                ...darkStyles,
                container: `${darkStyles.container} json-container`,
              }}
            />
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary sx={accordionSummarySx}>
          <Typography variant="h6">
            {
              'pingyam( input: string, system: "roman" | "lshk" | "yale" ): Array<string[]>'
            }
          </Typography>
          <Typography variant="body1">
            <i>
              returns possible Chinese character for each pinyin in the input
              string
            </i>
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={detailSx}>
          <Box sx={{ flex: 1 }}>
            <TextField
              type="text"
              value={state.py}
              onChange={(e) => handleChange("py", e.target.value)}
              fullWidth
            />
            <TextField
              select
              value={state.system}
              onChange={(e) => handleChange("system", e.target.value)}
              fullWidth
            >
              <MenuItem value={"roman"}>Roman</MenuItem>
              <MenuItem value={"lshk"}>LSHK</MenuItem>
              <MenuItem value={"yale"}>Yale</MenuItem>
            </TextField>
            <SyntaxHighlighter
              language="tsx"
              lineProps={{
                style: { wordBreak: "break-all", whiteSpace: "pre-wrap" },
              }}
              wrapLines={true}
            >
              {getPyCode(state.py, state.system)}
            </SyntaxHighlighter>
          </Box>
          <Box sx={{ flex: 1, my: 1 }}>
            <JsonView
              data={pingyam(state.py, state.system)}
              style={{
                ...darkStyles,
                container: `${darkStyles.container} json-container`,
              }}
            />
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Doc;

const rootSx: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  flex: 1,
  width: "100%",
  overflow: "scroll",
};

const detailSx: SxProps<Theme> = {
  display: "flex",
  justifyContent: "space-between",
  gap: 2,
  alignItems: "flex-start",
};

const getRomanCode = (
  input: string,
) => `import { getRoman } from "cantonese-romanisation";

console.log( getRoman("${input}") );`;

const getLshkCode = (
  input: string,
) => `import { getLshk } from "cantonese-romanisation";

console.log( getLshk("${input}") );`;

const getYaleCode = (
  input: string,
) => `import { getYale } from "cantonese-romanisation";

console.log( getYale("${input}") );`;

const getPyCode = (
  input: string,
  system: "roman" | "lshk" | "yale",
) => `import { pingyam } from "cantonese-romanisation";

console.log( pingyam("${input}", "${system}") );`;

const accordionSummarySx: SxProps<Theme> = {
  "& .MuiAccordionSummary-content": {
    alignItems: "baseline",
    gap: 2,
    borderBottom: "#eee 1px solid",
  },
};

const DEFAULT_STATE: DocState = {
  roman: "梁國雄",
  lshk: "吳靄儀",
  yale: "黎智英",
  py: "Ho Kwai Lam",
  system: "roman",
};
