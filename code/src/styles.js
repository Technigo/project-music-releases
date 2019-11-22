const styles = {
    wrapper: {
        background: "#181818"
    },

flex: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    width: "100%"
},

albumCoverWrapper: {
  padding: "10px",
  width: "20%",
  overflow: "hidden",
},

imgWrapper: {
position: "relative"
 },

 hoverBackground: {
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  background: "#222",
  opacity: 0.5
 },
 
 hoverPlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
   },

iconImg: {
    width: "20px"
},

playImg: (scale) => {
    return {
    width: "40px",
    transform: scale && "scale(1.3)"
}},

img: {
    width: "100%"
},

h1: {
    fontSize: "1.2rem"
},

h2: {
    margin: 0,
    fontSize: "1rem"
},

h3: {
    margin: 0,
    fontSize: "0.8rem",
    color: "#a9a9a9"
}

}

export default styles