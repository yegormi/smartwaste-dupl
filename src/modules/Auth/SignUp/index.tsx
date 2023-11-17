import { useDispatch } from "react-redux";
import { styled, Box, TextField, Button, Stack, Typography } from "@mui/material";
import { AuthLayout } from "../layouts/AuthLayout";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { createUserServer } from "redux/actions/authActions";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getLoaders } from "redux/reducers/appReducer";
import { Routes, pages } from "routes/types";

const SignUp = () => {
  const dispatch = useDispatch();
  const loaders = useSelector(getLoaders);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = (setter: Dispatch<SetStateAction<string>>) => (e: ChangeEvent<HTMLInputElement>) => {
    setter(e.target.value);
  };

  const handleSignUp = () => {
    dispatch(createUserServer({ username, email, password }));
  };

  return (
    <Page>
      <Wrapper>
        <AuthLayout title="Sign up">
          <Stack spacing={6}>
            <Stack spacing={2}>
              <TextField fullWidth placeholder="Username" value={username} onChange={handleInputChange(setUsername)} />
              <TextField fullWidth placeholder="Email" value={email} onChange={handleInputChange(setEmail)} />
              <TextField fullWidth placeholder="Password" onChange={handleInputChange(setPassword)} />
            </Stack>
            <Button sx={{ height: "50px", borderRadius: "10px" }} fullWidth variant="contained" onClick={handleSignUp}>
              Sign up
            </Button>
          </Stack>
          <Typography mt={"20px"} textAlign="center" variant="body1">
            Already have an account? <Link to={pages[Routes.login]()}>Sign in</Link>
          </Typography>
        </AuthLayout>
      </Wrapper>
    </Page>
  );
};

const Page = styled("div")`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled(Box)`
  max-width: 400px;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 10px;
`;

export default SignUp;
