import { Button, Grid, TextField } from '@mui/material';
import { useForm } from '../hooks/useForm';

export const GitHubInput = ({ onUser }) => {
  const { formState, onInputChange, onResetForm, cualquier } = useForm("");

  const onFormSubmit = (event) => {
    event.preventDefault();

    if( formState.length >= 1 ){

    onUser(formState);

    onResetForm();
    }
    else{
      return;
    }
  };
  return (
    <Grid
      item
      sx={{
        display: "flex",
        textAlign: "center",
        color: "white",
        pt: 4,
        mb: 3,
        justifyContent: "center",
      }}
    >
      <form onSubmit={onFormSubmit}>
        <TextField
          type="text"
          label="Search"
          placeholder="Search user"
          name="user"
          onChange={onInputChange}
          value={formState}
          fullWidth
          sx={{
            backgroundColor: "rgb(53, 53, 104)",
            borderRadius: 2,
            width: 300,
            mr: 3,
          }}
        />
      </form>
      <Button
        onClick={ onFormSubmit }
        sx={{
          backgroundColor: "rgb(51, 108, 155)",
          width: 100,
          borderRadius: 2,
          color: "white",
          ":hover": { backgroundColor: "rgb(30, 53, 71)", color: "gray" },
        }}
      >
        Search
      </Button>
    </Grid>
  );
};
