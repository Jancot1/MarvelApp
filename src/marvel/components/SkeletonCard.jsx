import { Box, Card, CardContent, CardMedia, Skeleton, Typography } from '@mui/material';

export const SkeletonCard = () => {
    return (
        <Box>
            <Card sx={{ maxWidth: 200 }}>
                <CardMedia
                    height="250"
                >
                    <Skeleton animation="wave" variant='rectangular' width={200} height={250}/>
                </CardMedia>
                <CardContent >
                    <Typography
                        variant="h6"
                        component="div"
                    >
                        <Skeleton animation="wave" />
                    </Typography>
                    <Typography variant="subtitle2">
                        <Skeleton animation="wave" />
                    </Typography>
                    <Typography variant="body" >
                        <Skeleton animation="wave" />
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    )
}
