import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import ImgBCL from '../assests/img_bcs.png'
import ImgBB from '../assests/img_bb.png'
import { Button } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'


import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        position: "absolute",
        top: '50%',
        left: '50%',
        padding: '10%',
        textAlign: 'center',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'rgb(242, 240, 240)',
        opacity: '85%',
        boxShadow: 'black',

    },
    media: {
        height: 'auto',
        paddingTop: '100%',

    },

});

function Directory() {
    const classes = useStyles();

    return (

        <div>
            <div className="parent">
                <div className="split left">
                    <Card className={classes.root}>
                        <CardMedia
                            classname={classes.media}
                            component="img"
                            image={ImgBCL}
                            style={{ paddingTop: 'auto', }}
                            title="Better Call Saul" />
                        <CardContent className="heading" >
                            <Typography variant="h5" color="inherit" className='heading'>Better Call Saul</Typography>
                        </CardContent>
                        <Button
                            type="submit"
                            className="button_link"
                            size="medium"
                            variant="contained"
                            color="secondary"
                            component={Link}
                            to={`/info?page=Better+Call+Saul`}>
                            Know More
                        </Button>
                    </Card>
                </div>
            </div>
            <div className="parent">
                <div className="split right">
                    <Card className={classes.root}>
                        <CardMedia
                            classname={classes.media}
                            component="img"
                            image={ImgBB}
                            style={{ paddingTop: 'auto',}}
                            title="Breadking Bad" />
                        <CardContent className="heading" >
                            <Typography variant="h5" color="inherit" className='heading'>Breaking Bad</Typography>
                        </CardContent>
                        <Button
                            type="submit"
                            className="button_link"
                            size="medium"
                            variant="contained"
                            color="secondary"
                            component={Link}
                            to={`/info?page=Breaking+Bad`}>
                            Know More
                        </Button>
                    </Card>
                </div>
            </div>
        </div>

    )
}

export default Directory;