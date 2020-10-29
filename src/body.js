import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Footer from "./Footer";
import FeaturedPost from "./bodyPart";
import Content from "./Content";
import {
    Grid,
    Paper,
    Link,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    title: {
        //color: "white",
        display: "inline-block",
    },
    img: {
        height: 350,
    },
    sizer: {
        fontSize: 30,
    },
    read: {
        color: "lightblue",
        fontWeight: "bold"
    },
    grid: {
        width: "100%",
        margin: "10",
    },
    paper: {
        padding: theme.spacing(2),
    },
}));

export default function MediaCard() {
    const classes = useStyles();
    let title1 = "Featured Post";
    let title2 = "Post title";
    return (
        <>
        <Card>
            <div>
                <CardContent>
                    <div style={{ position: "relative" }}>
                        <CardMedia
                            className={classes.img}
                            component="img"
                            image="https://source.unsplash.com/random"
                        />
                        <div
                            style={{
                                position: "absolute",
                                color: "white",
                                top: 8,
                                left: "5%",
                            }}
                        >
                            <h1>
                                {" "}
                                Title of a longer featured
                                <br />
                                blog post <br />
                            </h1>
                            <div className={classes.sizer}>
                                Multiple lines of text that form the lede, informing new{" "}
                                <br />
                                readers quickly and efficiently about what's <br />
                                most interesting in this post's contents.
                            </div>
                            <br />
                            <Link className={classes.read}> Continue reading...</Link>
                        </div>
                    </div>
                </CardContent>
            </div>
        </Card>
            <Grid container className={classes.grid}>
                <Grid item xs={12} md={6}>
                    <Paper className={classes.paper}>
                        {" "}
                        <FeaturedPost title={title1} date={12} />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper className={classes.paper}>
                        {" "}
                        <FeaturedPost title={title2} date={11} />
                    </Paper>
                </Grid>
            </Grid>
            <br />
            <Content />
            <Footer
                title="Footer"
                description="Something here to give the footer a purpose!"
            />
        </>
    );
}
