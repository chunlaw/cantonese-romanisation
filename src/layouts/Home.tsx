import {
  Box,
  Grid,
  SxProps,
  TextField,
  Theme,
  Typography,
} from "@mui/material";
import { getRoman } from "cantonese-romanisation";
import { useEffect, useState } from "react";

const Doc = () => {
  const [query, setQuery] = useState<string>("");
  const [randomIdx, setRandomIdx] = useState<number>(getRandomIdx());

  useEffect(() => {
    const interval = setInterval(() => {
      setRandomIdx(getRandomIdx());
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [query]);

  return (
    <Box sx={rootSx}>
      <TextField
        label="Try it... 試試"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Grid container sx={gridContainerSx} rowGap={3}>
        {(query || sampleNames[randomIdx]).split("").map((c, idx) => {
          const romans = getRoman(c);
          if (romans.length === 0) return null;
          return (
            <Grid
              item
              lg={2}
              md={3}
              sm={4}
              xs={6}
              key={`char-${idx}`}
              sx={{ ...itemSx, color: query === "" ? "#888" : "inherit" }}
            >
              <Typography variant="h6">{c}</Typography>
              <Box sx={{ display: "flex", gap: 1, justifyContent: "center" }}>
                {romans[0].map((roman, _idx) => (
                  <Typography key={`char-${idx}-${_idx}`} variant="body1">
                    {roman}
                  </Typography>
                ))}
              </Box>
            </Grid>
          );
        })}
      </Grid>
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
  py: 1,
};

const gridContainerSx: SxProps<Theme> = {
  overflow: "scroll",
  justifyContent: "center",
};

const itemSx: SxProps<Theme> = {
  textAlign: "center",
  "& *::first-letter": {
    textTransform: "uppercase",
  },
};

const getRandomIdx = (): number => {
  // @ts-ignore
  const cryp = window.crypto || window.msCrypto;
  let tab = new Uint32Array(1);
  return cryp.getRandomValues(tab)[0] % sampleNames.length;
};

const sampleNames = [
  "戴耀廷",
  "區諾軒",
  "鍾錦麟",
  "趙家賢",
  "吳政亨",
  "袁嘉蔚",
  "梁晃維",
  "鄭達鴻",
  "徐子見",
  "楊雪盈",
  "彭卓棋",
  "岑子杰",
  "毛孟靜",
  "何啟明",
  "馮達浚",
  "劉偉聰",
  "黃碧雲",
  "劉澤鋒",
  "黃之鋒",
  "譚文豪",
  "李嘉達",
  "譚得志",
  "胡志偉",
  "施德來",
  "朱凱迪",
  "張可森",
  "黃子悅",
  "伍健偉",
  "尹兆堅",
  "郭家麒",
  "吳敏兒",
  "譚凱邦",
  "何桂藍",
  "劉頴匡",
  "楊岳橋",
  "陳志全",
  "鄒家成",
  "林卓廷",
  "范國威",
  "呂智恆",
  "梁國雄",
  "林景楠",
  "柯耀林",
  "岑敖暉",
  "王百羽",
  "李予信",
  "余慧明",
];
