import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"

export const HeroCard = ({
    name,
    thumbnail,
    comics
}) => {

  return (
    <Card sx={{ maxWidth: 200}}>
        <CardActionArea >
            <CardMedia 
                component="img"
                image={ `${thumbnail.path}.${thumbnail.extension}` }
                height="250"
            />
            <CardContent >
                <Typography
                    variant="h6"
                    component="div"
                >
                   {name} 
                </Typography>
                <Typography variant="subtitle2">
                   N° de comics: { `${comics.returned}` }
                </Typography>
                <Typography variant="body">
                    Marvel Comics
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
  )
}
