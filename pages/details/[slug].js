import React from "react";
import {
  Button,
  CardActionArea,
  CardMedia,
  CardActions,
  CardContent,
  Card,
  Typography,
  Link,
  makeStyles,
} from "@material-ui/core";

import Layout from "../../src/layout";
import { fetchOne } from "../../src/sdk";

const useStyles = makeStyles({
  media: {
    height: 360,
  },
});

export default function Index({ article }) {
  const classes = useStyles();
  return (
    <Layout>
      <Card>
        <CardActionArea>
          <CardMedia
            image={article.urlToImage}
            className={classes.media}
            title="Article Image"
          ></CardMedia>

          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {article.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {article.description}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {article.author}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            component={Link}
            href={article.url}
            target="_blank"
          >
            Learn More
          </Button>
          <Button size="small" color="primary" component={Link} href="/">
            Go back
          </Button>
        </CardActions>
      </Card>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const slug = context.query.slug;
  const article = await fetchOne(slug);

  if (!article) {
    return {
      notFound: true,
    };
  }

  return {
    props: { article }, // will be passed to the page component as props
  };
}
