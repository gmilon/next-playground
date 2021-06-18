import React from "react";

import { Toolbar, AppBar, Box, Typography, Container } from "@material-ui/core";

export default function Layout({ children }) {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Top news in France</Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm">
        <Box my={4}>{children}</Box>
      </Container>
    </div>
  );
}
