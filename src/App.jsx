import React from "react";
import {
  Typography,
  AppBar,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Button,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Box,
} from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import useStyles from "./styles";

const cards = [1, 2, 3, 4, 5, 6];
const imageUrl =
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80";

const App = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />

      {/* AppBar */}
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera className={classes.icon} />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box className={classes.container}>
        <Container maxWidth="sm">
          <Typography variant="h2" color="text.primary" gutterBottom>
            Photo Album
          </Typography>
          <Typography variant="h5" color="text.secondary" paragraph>
            Hello Everyone! This is a Photo album built with MUI v5.
          </Typography>
          <div className={classes.button}>
            <Grid container spacing={2} justifyContent="center">
              <Grid item>
                <Button variant="contained" color="primary">
                  See My Photos
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" color="primary">
                  Secondary Action
                </Button>
              </Grid>
            </Grid>
          </div>
        </Container>
      </Box>

      {/* Cards Section */}
      <Container className={classes.cardGrid} maxWidth="lg">
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid key={card} item xs={12} sm={4} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  component="img"
                  className={classes.cardMedia}
                  image={imageUrl}
                  alt={`Card ${card}`}
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5">
                    Heading {card}
                  </Typography>
                  <Typography>
                    This is a media card. You can use this section to describe
                    the content.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    View
                  </Button>
                  <Button size="small" color="primary">
                    Edit
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Footer */}
      <Box className={classes.footer}>
        <Typography variant="h6" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          © 2025 Your Photo Album. All rights reserved.
        </Typography>
      </Box>
    </>
  );
};

export default App;
