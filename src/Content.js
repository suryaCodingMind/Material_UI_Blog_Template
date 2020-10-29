import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Divider, Typography, Grid } from "@material-ui/core";
import {FormatBold, GitHub} from "@material-ui/icons";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import {
    Paper,
    Link,
} from "@material-ui/core";

const useStyles = makeStyles({
    pap:{
        marginLeft: 10,
    },
    grid: {
        width: "100%",
    },
    heading: {
        fontSize: 25,
    },
    main: {
        fontSize: 21,
    },
    height: {
        lineHeight: 1.5,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    root:{
        backgroundColor:'#eeeeee',
    },
    links:{
        marginLeft:12,
    }
});
const Content = () => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    return (
        <Grid container spacing={2} className={classes.grid}>
            <Grid item xs={8} md={8} className={classes.item}>
                <Paper elevation={0} className={classes.pap}>
                <br /> <br />
                <Typography variant="h6" className={classes.main}>
                    From the firehose
                </Typography>
                <br />
                <Divider />
                <br /> <br />
                <div className={classes.height}>
                    <Typography variant="h4" className={classes.heading}>
                        Sample blog post
                        <Typography variant="subtitle2" color="textSecondary">
                            April 1, 2020 by Olivier
                        </Typography>
                    </Typography>
                </div>
                <br /> <br />
                <Typography variant="body1">
                    This blog post shows a few different types of content that are
                    supported and styled with Material styles. Basic typography, images,
                    and code are all supported. You can extend these by modifying
                    Markdown.js.
                    <br /> <br />
                    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia
                    quam venenatis vestibulum. Sed posuere consectetur est at lobortis.
                    Cras mattis consectetur purus sit amet fermentum.
                    <br /> <br />
                    Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis
                    ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id
                    elit. Etiam porta sem malesuada magna mollis euismod. Cras mattis
                    consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla
                    sed consectetur.
                </Typography>
                <br />
                <br />
                <Typography variant="h4" className={classes.heading}>
                    Heading
                </Typography>
                <br />
                <Typography variant="body1">
                    Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
                    lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac,
                    vestibulum at eros.
                    <br /> <br />
                    Sub-heading
                    <br />
                    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus.
                    <br /> <br />
                    Sub-heading
                    <br />
                    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam
                    porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac
                    cursus commodo, tortor mauris condimentum nibh, ut fermentum massa
                    justo sit amet risus.
                    <ul>
                        <li>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur
                            et.
                        </li>
                        <li>Donec id elit non mi porta gravida at eget metus.</li>
                        <li>Nulla vitae elit libero, a pharetra augue.</li>
                    </ul>
                </Typography>
                <br />
                <Typography variant="body1">
                    Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit
                    libero, a pharetra augue.
                </Typography>
                <ol>
                    <li> Vestibulum id ligula porta felis euismod semper.</li>
                    <li>
                        Cum sociis natoque penatibus et magnis dis parturient montes,
                        nascetur ridiculus mus.
                    </li>
                    <li>
                        Maecenas sed diam eget risus varius blandit sit amet non magna.
                    </li>
                </ol>
                <br />
                <Typography variant="body1">
                    Cras mattis consectetur purus sit amet fermentum. Sed posuere
                    consectetur est at lobortis.
                </Typography>
                <br /> <br />
                <Typography variant="h4" className={classes.heading}>
                    Another blog post
                </Typography>
                <Typography variant="subtitle2" color="textSecondary">
                    March 23, 2020 by Matt
                </Typography>{" "}
                <br /> <br />
                <Typography variant="body1">
                    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia
                    quam venenatis vestibulum. Sed posuere consectetur est at lobortis.
                    Cras mattis consectetur purus sit amet fermentum.
                    <br /> <br />
                    Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis
                    ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id
                    elit.
                    <br /> <br />
                    Etiam porta sem malesuada magna mollis euismod. Cras mattis
                    consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla
                    sed consectetur.
                    <br /> <br />
                    Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
                    lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac,
                    vestibulum at eros.
                </Typography>{" "}
                <br /> <br /> <br />
                <Typography variant="h4" className={classes.heading}>
                    New feature
                </Typography>
                <Typography variant="subtitle2" color="textSecondary">
                    March 14, 2020 by Tom
                </Typography>
                <br /> <br />
                <Typography variant="body1">
                    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam
                    porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac
                    cursus commodo, tortor mauris condimentum nibh, ut fermentum massa
                    justo sit amet risus.
                    <ul>
                        <li>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur
                            et.
                        </li>
                        <li>Donec id elit non mi porta gravida at eget metus.</li>
                        <li>Nulla vitae elit libero, a pharetra augue.</li>
                    </ul>
                    <br />
                    Etiam porta sem malesuada magna mollis euismod. Cras mattis
                    consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla
                    sed consectetur.
                    <br /> <br />
                    Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit
                    libero, a pharetra augue.
                </Typography>
                </Paper>
            </Grid>
            <Grid item xs={4} md={4}>
                <Paper>
                <Card className={classes.root} variant="outlined">
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            About
                            <br/>
                        </Typography>
                        <Typography variant="body2" component="p">
                            Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur
                            purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
                        </Typography>
                    </CardContent>
                </Card>
                    </Paper>
                <Typography variant="h6" component="h2" className={classes.links}>
                    <br/>
                    Archives
                    <br/>
                </Typography>
                <Link className={classes.links} >
                    March 2020
                </Link><br/>
                <Link className={classes.links} >
                    February 2020
                </Link><br/>
                <Link className={classes.links} >
                    January 2020
                </Link><br/>
                <Link className={classes.links} >
                    November 1999
                </Link><br/>
                <Link className={classes.links} >
                    October 1999
                </Link><br/>
                <Link className={classes.links} >
                    September 1999
                </Link><br/>
                <Link className={classes.links} >
                    August 1999
                </Link><br/>
                <Link className={classes.links} >
                    July 1999
                </Link><br/>
                <Link className={classes.links} >
                    June 1999
                </Link><br/>
                <Link className={classes.links} >
                    May 1999
                </Link><br/>
                <Link className={classes.links} >
                    April 1999
                </Link>
                <Typography variant="h6" component="h2" className={classes.links}>
                    <br/>
                    Social
                    <br/>
                </Typography>
                <GitHubIcon/>
                <Link className={classes.links} >
                    GitHub
                </Link><br/>
                <TwitterIcon/>
                <Link className={classes.links} >
                    Twitter
                </Link><br/>
                <FacebookIcon/>
                <Link className={classes.links} >
                    Facebook
                </Link><br/>
            </Grid>
        </Grid>
    );
};

export default Content;
