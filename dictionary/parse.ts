import csvtojson from "csvtojson"
import { writeFile }  from "fs"

csvtojson({
  delimiter: "\t",
  trim: true
})
  .fromFile("./dictionary/source.tsv")
  .then(data => {

    // charToRoman
    writeFile("./src/charToRoman.json", JSON.stringify(
      data.reduce((acc, cur) => {
        acc[cur.character] = cur.roman.split(" ")
        return acc
      }, {})
    ), () => {
      console.log("charToRoman done")
    })

    // charToLshk
    writeFile("./src/charToLshk.json", JSON.stringify(
      data.reduce((acc, cur) => {
        acc[cur.character] = cur.lshk.split(" ")
        return acc
      }, {})
    ), () => {
      console.log("charToLshk done")
    })

    // charToYale
    writeFile("./src/charToYale.json", JSON.stringify(
      data.reduce((acc, cur) => {
        acc[cur.character] = cur.yale.split(" ")
        return acc
      }, {})
    ), () => {
      console.log("charToYale done")
    })

    // romanToChar
    writeFile("./src/romanToChar.json", JSON.stringify(
      data.reduce((acc, cur) => {
        cur.roman.split(" ").forEach((py: string) => {
          if ( acc[py] === undefined ) acc[py] = [];
          acc[py].push(cur.character)
        })
        return acc
      }, {})
    ), () => {
      console.log("romanToChar done")
    })

    // lshkToChar
    writeFile("./src/lshkToChar.json", JSON.stringify(
      data.reduce((acc, cur) => {
        cur.lshk.split(" ").forEach((py: string) => {
          if ( acc[py] === undefined ) acc[py] = [];
          acc[py].push(cur.character)
        })
        return acc
      }, {})
    ), () => {
      console.log("lshkToChar done")
    })

    // yaleToChar
    writeFile("./src/yaleToChar.json", JSON.stringify(
      data.reduce((acc, cur) => {
        cur.yale.split(" ").forEach((py: string) => {
          if ( acc[py] === undefined ) acc[py] = [];
          acc[py].push(cur.character)
        })
        return acc
      }, {})
    ), () => {
      console.log("yaleToChar done")
    })
  })