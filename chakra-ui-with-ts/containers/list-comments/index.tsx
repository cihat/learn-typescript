import React from 'react'
import { Box, ListItem, OrderedList } from "@chakra-ui/react";

const ListComments = (props) => {
  const {comments} = props
  return (
    <Box>
        <OrderedList>
          {comments.map((comment) => {
            return <ListItem>{comment.name}</ListItem>;
          })}
        </OrderedList>
      </Box>
  )
}

export default ListComments