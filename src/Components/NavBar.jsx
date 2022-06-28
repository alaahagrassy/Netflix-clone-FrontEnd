import React from "react";
import { Box, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { useSelector , useDispatch } from 'react-redux';
import  AuthenticationSliceActions  from '../Redux/AuthenticationSlice';

const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const NavBar = () => {
  const IsloggedIn = useSelector((state) => state.IsloggedIn);
  const Dispatch = useDispatch();

  const logOutHandler = () => {
    Dispatch(AuthenticationSliceActions.logOut());
  };

  return (
    <Box
      variant="header"
      sx={{
        height: "5rem",
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: "transparent",
        paddingLeft: "1rem",
        paddingRight: "1rem",
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ height: "100%" }}
      >
        <Box variant="div" sx={{ width: "100%", height: "100%" }}>
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            sx={{
              width: "100%",
              fontWeight: "bold",
              height: "100%",
              paddingLeft: "3rem",
              color: "red",
            }}
          >

        <Box variant="div" sx={{ width: "100%", height: "100%" }}>
          <Stack
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            sx={{
              height: "100%",
              paddingRight: "3rem",
              textDecoration: "none !important",
            }}
          >

           { !IsloggedIn && <StyledLink to="/Login" style={{color:'#12C6B2' , fontSize:'1rem'}}>Login</StyledLink> }
           { IsloggedIn && <StyledLink to="/home" onClick={logOutHandler} style={{color:'#12C6B2' , fontSize:'1rem'}}>log out</StyledLink> }

          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default NavBar;
