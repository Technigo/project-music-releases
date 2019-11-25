const styles = {
    wrapper: {
        background: "#181818",
        padding: "2rem",
    },

    flex: (justify) => ({
        display: "flex",
        flexWrap: "wrap",
        justifyContent: justify,
        width: "100%",
    }),

    albumCoverWrapper: {
        width: "23%",
        overflow: "hidden",
        marginBottom: "1rem",
        '@media screen and (max-width: 886px)': {
            width: "45%"
        },
        '@media screen and (max-width: 390px)': {
            width: "100%"
        }

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
        }
    },

    img: {
        width: "100%"
    },

    h1: {
        fontSize: "1.2rem",
        marginBottom: "1.5rem"
    },

    h2: {
        margin: 0,
        fontSize: "1rem",
        ':hover': {
            textDecoration: "underline"
        }
    },

    h3: {
        margin: 0,
        fontSize: "0.8rem",
        color: "#a9a9a9",
        ':hover': {
            textDecoration: "underline"
        }
    },


    linkText: {
        color: "inherit",
        textDecoration: "unset"
    }

}

export default styles