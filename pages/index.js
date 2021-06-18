import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Link from "next/link";
import slugify from "slugify";
import Layout from "../src/layout";
import { fetchAll } from "../src/sdk";

function ListItemLink(props) {
  return (
    <ListItem button>
      <Link {...props}></Link>
    </ListItem>
  );
}

export default function Index({ articles }) {
  return (
    <Layout>
      <Card>
        <CardContent>
          <List>
            {articles.map((article) => (
              <ListItemLink
                key={article.title}
                href={`details/${slugify(article.title, {
                  lower: true,
                  strict: true,
                })}`}
              >
                <ListItemText primary={article.title}></ListItemText>
              </ListItemLink>
            ))}
          </List>
        </CardContent>
      </Card>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const data = await fetchAll();
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { articles: data.articles }, // will be passed to the page component as props
  };
}
