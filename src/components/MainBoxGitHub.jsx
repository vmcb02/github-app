import { BusinessCenter, Link, LocationOn, Twitter } from '@mui/icons-material';
import { Grid, Icon, Typography } from '@mui/material';

export const MainBoxGitHub = ({
  name,
  login,
  avatar_url,
  created_at,
  bio,
  public_repos,
  followers,
  following,
  location,
  blog,
  twitter_username,
  company,
}) => {
  return (
    <Grid
      container
      sx={{
        display: "block",
        width: 630,
        height: 450,
        backgroundColor: "rgb(53, 53, 104)",
        margin: "auto",
        borderRadius: 2,
      }}
    >
      <Grid container>
        {!login ? (
          <Grid item sx={{ margin: "auto", pt: 10 }}>
            <Typography
              component="img"
              variant="img"
              src="/src/assets/bb.png"
              sx={{ width: 250, height: 250, borderRadius: 50 }}
            ></Typography>
          </Grid>
        ) : (
          <Grid container>
            <Grid
              container
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Grid item sx={{ display: "flex" }}>
                <Grid item sx={{ ml: 3, mt: 4 }}>
                  <Typography
                    component="img"
                    variant="img"
                    src={avatar_url}
                    sx={{ width: 90, height: 90, borderRadius: 50 }}
                  ></Typography>
                </Grid>

                <Grid item sx={{ mt: 4, ml: 2, mb: 1 }}>
                  <Typography
                    component="h4"
                    variant="h4"
                    sx={{
                      fontSize: 28,
                      mb: 1,
                      color: "white",
                      fontWeight: "bold",
                      textShadow: "2px 2px 2px black",
                    }}
                  >
                    {login}
                  </Typography>
                  <Typography
                    component="p"
                    variant="p"
                    sx={{
                      color: "rgb(13, 18, 87)",
                      fontWeight: "bold",
                      fontSize: 17,
                      textShadow: "0 1px 0 black",
                      mb: 1,
                    }}
                  >
                    {name}
                  </Typography>
                  <Grid item sx={{ width: 250, height: 80 }}>
                    <Typography
                      component="p"
                      variant="p"
                      sx={{ color: "white" }}
                    >
                      {bio}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item sx={{ mt: 1, mr: 2 }}>
                <Typography component="p" variant="p" sx={{ color: "white" }}>
                  {created_at}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              sx={{
                width: 450,
                height: 120,
                backgroundColor: "rgb(39, 18, 73)",
                border: "1px solid black",
                borderRadius: 3,
                margin: "auto",
              }}
            >
              <Grid
                container
                sx={{ display: "flex", justifyContent: "center", pt: 2 }}
              >
                <Grid item sx={{ mt: 1 }}>
                  <Typography
                    component="p"
                    variant="p"
                    sx={{ color: "white", opacity: 0.5, mb: 1 }}
                  >
                    Repos
                  </Typography>
                  <Typography
                    component="p"
                    variant="p"
                    sx={{ color: "white", fontSize: 28, fontWeight: "bold" }}
                  >
                    {public_repos}
                  </Typography>
                </Grid>

                <Grid item sx={{ ml: 8, mr: 8, mt: 1 }}>
                  <Typography
                    component="p"
                    variant="p"
                    sx={{ color: "white", opacity: 0.5, mb: 1 }}
                  >
                    Followers
                  </Typography>
                  <Typography
                    component="p"
                    variant="p"
                    sx={{ color: "white", fontSize: 28, fontWeight: "bold" }}
                  >
                    {followers}
                  </Typography>
                </Grid>

                <Grid item sx={{ mt: 1 }}>
                  <Typography
                    component="p"
                    variant="p"
                    sx={{ color: "white", opacity: 0.5, mb: 1 }}
                  >
                    Following
                  </Typography>
                  <Typography
                    component="p"
                    variant="p"
                    sx={{ color: "white", fontSize: 28, fontWeight: "bold" }}
                  >
                    {following}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid
              container
              sx={{ display: "flex", justifyContent: "space-evenly" }}
            >
              <Grid item sx={{ pt: 3 }}>
                <Grid item sx={{ display: "flex", mb: 2 }}>
                  <Icon sx={{ mr: 1 }}>
                    <LocationOn />
                  </Icon>
                  <Typography component="p" variant="p">
                    {location ? location : "Not Available"}
                  </Typography>
                </Grid>

                <Grid item sx={{ display: "flex" }}>
                  <Icon sx={{ mr: 1 }}>
                    <Link />
                  </Icon>
                  <Typography component="p" variant="p">
                    {blog ? blog : "Not Available"}
                  </Typography>
                </Grid>
              </Grid>

              <Grid item sx={{ pt: 3, pr: 1 }}>
                <Grid item sx={{ display: "flex", mb: 2 }}>
                  <Icon sx={{ mr: 1 }}>
                    <Twitter />
                  </Icon>
                  <Typography component="p" variant="p">
                    {twitter_username ? twitter_username : "Not Available"}
                  </Typography>
                </Grid>

                <Grid item sx={{ display: "flex" }}>
                  <Icon sx={{ mr: 1 }}>
                    <BusinessCenter />
                  </Icon>
                  <Typography component="p" variant="p">
                    {company ? company : "Not Available"}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};
