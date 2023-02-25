import React from "react";
import {Card, Grid} from '@aws-amplify/ui-react';

export const Layout = ({ children }) =>{
    return(
        <Grid
  columnGap="0.5rem"
  rowGap="0.5rem"
  templateColumns="1fr 1fr 1fr"
  templateRows="1fr 3fr 1fr"
>
  <Card
    columnStart="1"
    columnEnd="-1"
  >
    Header
  </Card>
  <Card
    columnStart="1"
    columnEnd="2"
  >
    Nav
  </Card>
  <Card
    columnStart="2"
    columnEnd="-1"
  >
    {children}
  </Card>
  <Card
    columnStart="2"
    columnEnd="-1"
  >
    Footer
  </Card>
</Grid>
    )
    
}