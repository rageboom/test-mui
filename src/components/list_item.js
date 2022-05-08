import React from 'react';
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { Link } from 'react-router-dom';

function component({ name, url, isSelected, handleClick, icon }) {
  const iconProps = {
    sx: {
      // color: 'white',
    },
  };
  return (
    <ListItem>
      <ListItemButton
        ListItemButton
        component={Link}
        to={url}
        selected={isSelected}
        onClick={handleClick}
      >
        <ListItemIcon>{React.createElement(icon, iconProps)}</ListItemIcon>
        <ListItemText primary={name} />
      </ListItemButton>
    </ListItem>
  );
}

export { component as MenuItem };
