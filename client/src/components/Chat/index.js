import React from 'react';
import { Fragment } from "react";
import {
  Container,
  TextField,
  Button,
  Grid,
  Divider
} from "@mui/material";
import { Box } from "@mui/system";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import SendIcon from '@mui/icons-material/Send';

const users = [
  { username: "WelcomBot", _id: 0 },
  { username: "HelperBot", _id: 1 }
];

const channelNav = styled(List)({
  "& .MuiListItemButton-root": {
    paddingLeft: 24,
    paddingRight: 24
  },
  "& .MuiListItemIcon-root": {
    minWidth: 0,
    marginRight: 20
  },
  "& .MuiSvgIcon-root": {
    fontSize: 20
  }
});

const dirMessageNav = styled(List)({
  "& .MuiListItemButton-root": {
    paddingLeft: 4,
    paddingRight: 4
  }
});

const Chat = () => {
  let users = [];
  return (
    <Fragment>
      <Container>
        <Box>
          <Grid>
            <Grid item xs={4} className="chat-container">
              <Box sx={{ display: "flex" }}>
                <ThemeProvider
                  theme={createTheme({
                    components: {
                      MuiListItemButton: {
                        defaultProps: {
                          disableTouchRipple: true
                        }
                      }
                    },
                    palette: {
                      mode: "dark",
                      primary: { main: "rgb(15, 50, 69)" },
                      background: { paper: "rgb(5, 30, 52)" }
                    }
                  })}
                >
                  <Paper elevation={0} sx={{ maxWidth: 320 }}>
                    <channelNav component="nav" disablePadding>
                      <ListItemButton
                        component="a"
                        href="#customized-list"
                        alignItems="flex-start"
                        onClick={() => setOpen(!open)}
                        sx={{
                          px: 3,
                          py: 2.5,
                          pb: open ? 0 : 0.5,
                          "&:hover, &:focus": { "& svg": { opacity: open ? 1 : 0 } }
                        }}
                      >
                        <ListItemText
                          primary="Channels"
                          primaryTypographyProps={{
                            fontSize: 18,
                            fontWeight: "medium",
                            lineHeight: "20px",
                            mb: "8px"
                          }}
                        />
                        <KeyboardArrowDown
                          sx={{
                            ml: 3,
                            opacity: 0,
                            transform: open ? "rotate(-180deg)" : "rotate(0)",
                            transition: "0.3s"
                          }}
                        />
                      </ListItemButton>


                      <Divider />


                      <Box className="channelList"
                        sx={{
                          bgcolor: open ? "rgba(71, 98, 130, 0.2)" : null,
                          pt: open ? 1 : 0,
                          pb: open ? 2 : 0
                        }}
                      >
                        {open &&
                          channels.map((channel) => (
                            <ListItemButton
                              key={channel.icon}
                              sx={{ py: 0, minHeight: 32, color: "rgba(255,255,255,.8)" }}
                            >
                              <ListItemIcon sx={{ color: "inherit" }}>
                                {channel.icon}
                              </ListItemIcon>
                              <ListItemText
                                primary={channel.label}
                                primaryTypographyProps={{
                                  fontSize: 14,
                                  fontWeight: "medium"
                                }}
                              />
                            </ListItemButton>
                          ))}
                      </Box>
                    </channelNav>


                    <dirMessageNav component="nav" disablePadding>
                      <ListItemButton
                        component="a"
                        href="#customized-list"
                        alignItems="flex-start"
                        // onClick={() => setOpen(!open)}
                        sx={{
                          px: 3,
                          py: 2.5,
                          pb: open ? 0 : 0.5,
                          "&:hover, &:focus": { "& svg": { opacity: open ? 1 : 0 } }
                        }}
                      >
                        <ListItemText
                          primary="Direct Messages"
                          primaryTypographyProps={{
                            fontSize: 18,
                            fontWeight: "medium",
                            lineHeight: "20px",
                            mb: "8px"
                          }}
                        />
                        {/* <KeyboardArrowDown
                          sx={{
                            ml: 3,
                            opacity: 0,
                            transform: open ? "rotate(-180deg)" : "rotate(0)",
                            transition: "0.3s"
                          }}
                        /> */}
                      </ListItemButton>


                      <Divider />


                      <Box className="DMList"
                        sx={{
                          bgcolor: open ? "rgba(71, 98, 130, 0.2)" : null,
                          pt: open ? 1 : 0,
                          pb: open ? 2 : 0
                        }}
                      >
                        {open &&
                          users.map((user) => (
                            <ListItemButton
                              key={user.username}
                              sx={{ py: 0, minHeight: 32, color: "rgba(255,255,255,.8)" }}
                            >
                              <ListItemText
                                primary={user.username}
                                primaryTypographyProps={{
                                  fontSize: 14,
                                  fontWeight: "normal"
                                }}
                              />
                            </ListItemButton>
                          ))}
                      </Box>
                    </dirMessageNav>
                  </Paper>
                </ThemeProvider>
              </Box>
            </Grid>


            <Grid item xs={8} className="message-container">
              <List className="messaging-display">
              </List>
              <Divider />
              <Grid container className="text-box" style={{ padding: "20px" }}>
                <Grid item xs={10}>
                  <TextField
                    id="outlined-textarea"
                    label="Type something..."
                    placeholder="Placeholder"
                    multiline fullWidth
                  />
                <Grid item xs={2}></Grid>
                  <Button variant="contained" type="submit" onClick={send} endIcon={<SendIcon />}>Send</Button>
                  <IconButton variant="contained" ></IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Fragment>
  );
};

export default Chat;