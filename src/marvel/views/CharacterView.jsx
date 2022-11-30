import { Box, Button, Card, CardMedia, Divider, Grid, IconButton, styled, Typography } from "@mui/material";
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getCharacterByName } from "../helpers/getCharacterByName";

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const CharacterView = () => {

    const { id } = useParams();

    const character = getCharacterByName(id);

    console.log({character});

    const navigate = useNavigate();

    const onClickBack = () => {
        navigate (-1);
    }

    if (!character) {
        return <Navigate to="/characters" />
    }

    return (
        <>
            <Grid container spacing={2}>
                <Grid item>
                    <IconButton 
                        color='secondary'
                        onClick={onClickBack}
                        style={{marginTop: 25}}
                    >
                        <ArrowBackIcon />
                    </IconButton>
                </Grid>
                <Grid item >
                    <h1 className="animate__animated animate__fadeIn">{character.name}</h1>
                </Grid>
            </Grid>

            <Grid container direction="row" spacing={2}>
                <Grid item md={3}>
                    <Card>
                        <StyledBox className="animate__animated animate__fadeIn">
                            <CardMedia
                                component="img"
                                image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                            />
                        </StyledBox>
                    </Card>
                </Grid>
                <Grid item md={8}>
                    <Typography variant="h4">
                        Description
                    </Typography>
                    <Divider />
                    <Typography style={{marginTop: 15}}>
                        {character.description}
                    </Typography>
                    <Typography variant="h4" style={{marginTop: 20}}>
                        Appearances
                    </Typography>
                    <Divider />
                    {/* <Typography style={{marginTop: 15}}>
                        {`${character.comics.items}`}
                    </Typography> */}
                </Grid>
            </Grid>
        </>
    )
}

const StyledBox = styled(Box)(()=> ({
    padding: "5px",
    border: "1px solid #ccd1d1",
    borderRadius: "5px"
}))