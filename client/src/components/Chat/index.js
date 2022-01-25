import "firebase/firestore";
import { Fragment } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  List,
  ListItem,
} from "@mui/material";
import { Box } from "@mui/system";
import List from "@mui/material/List";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import logo from "../../assets/images/quack-logo.png";

const Chat = () => {
  return (
    <Fragment>
      <Container>
        <Box>
          <AppBar positionStatic>
            <Toolbar display="flex" justify-content="space-between">
              <IconButton size="medium" color="inherit" aria-label="menu" />
              <Typography noWrap>QuackChat </Typography>
              <Button
                variant="contained"
                color="secondary"
                onClick={this.props.handleLogout}
              >
                Logout
              </Button>
            </Toolbar>
          </AppBar>
          <Grid>
            <Grid item xs={3} className="chatMenu">
              <List>
                <ListItemButton component="a" href="#customized-list">
                  <ListItemIcon sx={{ fontSize: 25 }}>{logo}</ListItemIcon>
                  <ListItemText
                    sx={{ my: 0 }}
                    primary="QuackChat"
                    primaryTypographyProps={{
                      fontSize: 20,
                      fontWeight: "medium",
                    }}
                  />
                </ListItemButton>
                <Divider />
                <Box
                  sx={{
                    bgcolor: open ? "rgba(71, 98, 130, 0.2)" : null,
                    pb: open ? 2 : 0,
                  }}
                >
                  <ListItemButton
                    alignItems="flex-start"
                    onClick={() => setOpen(!open)}
                    sx={{
                      px: 3,
                      pt: 2.5,
                      pb: open ? 0 : 2.5,
                      "&:hover, &:focus": {
                        "& svg": { opacity: open ? 1 : 0 },
                      },
                    }}
                  >
                    <ListItemText
                      primary="Channels"
                      primaryTypographyProps={{
                        fontSize: 15,
                        fontWeight: "medium",
                        lineHeight: "20px",
                        mb: "2px",
                      }}
                    />
                    <KeyboardArrowDown
                      sx={{
                        mr: -1,
                        opacity: 0,
                        transform: open ? "rotate(-180deg)" : "rotate(0)",
                        transition: "0.3s",
                      }}
                    />
                  </ListItemButton>
                  {open &&
                    data.map((item) => (
                      <ListItemButton
                        key={item.label}
                        sx={{
                          py: 0,
                          minHeight: 32,
                          color: "rgba(255,255,255,.8)",
                        }}
                      >
                        <ListItemIcon sx={{ color: "inherit" }}>
                          {item.icon}
                        </ListItemIcon>
                        <ListItemText
                          primary={item.label}
                          primaryTypographyProps={{
                            fontSize: 14,
                            fontWeight: "medium",
                          }}
                        />
                      </ListItemButton>
                    ))}
                </Box>
              </List>
            </Grid>
            <Grid item xs={9} className="chatbox">
              <List className={classes.messageArea}>
                <ListItem key="1">
                  <Grid container>
                    <Grid item xs={12}>
                      <ListItemText
                        align="right"
                        primary="Hey man, What's up ?"
                      ></ListItemText>
                    </Grid>
                    <Grid item xs={12}>
                      <ListItemText
                        align="right"
                        secondary="09:30"
                      ></ListItemText>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem key="2">
                  <Grid container>
                    <Grid item xs={12}>
                      <ListItemText
                        align="left"
                        primary="Hey, Iam Good! What about you ?"
                      ></ListItemText>
                    </Grid>
                    <Grid item xs={12}>
                      <ListItemText
                        align="left"
                        secondary="09:31"
                      ></ListItemText>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem key="3">
                  <Grid container>
                    <Grid item xs={12}>
                      <ListItemText
                        align="right"
                        primary="Cool. i am good, let's catch up!"
                      ></ListItemText>
                    </Grid>
                    <Grid item xs={12}>
                      <ListItemText
                        align="right"
                        secondary="10:30"
                      ></ListItemText>
                    </Grid>
                  </Grid>
                </ListItem>
              </List>
              <Divider />
              <Grid container style={{ padding: "20px" }}>
                <Grid item xs={11}>
                  <TextField
                    id="outlined-basic-email"
                    label="Type Something"
                    fullWidth
                  />
                </Grid>
                <Grid xs={1} align="right">
                  <Fab color="primary" aria-label="add">
                    <SendIcon />
                  </Fab>
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
