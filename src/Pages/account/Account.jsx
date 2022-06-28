import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@mui/icons-material";
import { Link, useParams } from "react-router-dom";
import "./user.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "@mui/system";
import { TextField } from "@mui/material";


export default function Account() {
  const token = localStorage.getItem('token')
  const user =localStorage.getItem('user')
  const { userId } = useParams()
  const [use, setUser] = useState(null)
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await axios.get("http://localhost:3001/user/getuser", {
  //       headers: {
  //         authorization: JSON.parse(token)
  //       }
  //     })
  //     console.log(res.data);
  //     setUser(res.data)
  //   }
  //   fetchData();
  // }, []);


  const handleChange = (e) => {
    const value = e.target.value;
    setUser({ ...user, [e.target.name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.put(`http://localhost:3001/user/${userId}`, user);
    console.log(res);

  };

  return (
    <Container maxWidth="md"

      sx={{
        backgroundColor:"#626262a8",
        "& .MuiFilledInput-root:active": {
          background: "red"
        }
        ,
        marginTop: "80px",
        color: "#FFFFFF",
        // backgroundImage:
          // "linear-gradient(to bottom, rgba(7, 9, 17, 0.9) 4.88%, rgba(7, 9, 17, 0.6) 34.09%, rgba(7, 9, 17, 0.5) 99.57%)",
        paddingBottom: '3rem',
        marginBottom: '2rem'
      }}>
      <div className="user">
        <div className="userTitleContainer">
          <h1 className="userTitle">Account</h1>
        </div>
        {user && <div className="userContainer">
          <div className="userShow">
            <div className="userShowTop">
              <div className="userShowTopTitle">
                <span className="userShowUsername">{user.userName}</span>
              </div>
            </div>
            <div className="userShowBottom">
              <span className="userShowTitle">Account Details</span>
              <div className="userShowInfo">
                <span className="userShowInfoTitle">Card Number :{user.cardNumber}</span>
              </div>
              <div className="userShowInfo">
                <span className="userShowInfoTitle">Plan : {user.plan}</span>
              </div>
              <span className="userShowTitle">Contact Details</span>
              <div className="userShowInfo">
                <PhoneAndroid className="userShowIcon" />
                <span className="userShowInfoTitle">+20{user.PhoneNumber}</span>
              </div>
              <div className="userShowInfo">
                <MailOutline className="userShowIcon" />
                <span className="userShowInfoTitle">{user.email}</span>
              </div>
            </div>
          </div>
          <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>
            <form className="userUpdateForm">
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>Username</label>
                  <input
                    type="text"
                    placeholder="annabeck99"
                    className="userUpdateInput"
                    onChange={handleChange}
                    name="userName"
                    value={user.userName}
                  />
                  <TextField
                    autoComplete="off"
                    id="text"
                    label="User Name"
                    color="primary"
                    type='password'
                    variant="filled"
                    placeholder="User Name"
                    InputLabelProps={{ style: { color: "white" } }}
                    sx={{
                      width: { lg: "350px", md: '300px', sm: 'auto', xs: 'auto' }, marginTop: "0.8rem",
                    }}
                    onChange={handleChange}
                    value={user.userName}
                    FormHelperTextProps={{ style: { backgroundColor: "white", color: 'red' } }}
                  />
                </div>

                <div className="userUpdateItem">
                  <label>Email</label>
                  <input
                    type="text"
                    placeholder="annabeck99@gmail.com"
                    className="userUpdateInput"
                    onChange={handleChange}
                    name="email"
                    value={user.email}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Phone</label>
                  <input
                    type="text"
                    placeholder="+1 123 456 67"
                    className="userUpdateInput"
                    onChange={handleChange}
                    name="PhoneNumber"
                    value={user.PhoneNumber}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Card Number</label>
                  <input
                    type="text"
                    placeholder="xxxx xxxx xxxx xxxx"
                    className="userUpdateInput"
                    onChange={handleChange}
                    name="cardNumber"
                    value={user.cardNumber}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Security Code</label>
                  <input
                    type="password"
                    placeholder="CNN"
                    className="userUpdateInput"
                    onChange={handleChange}
                    name="securityCode"
                    value={user.securityCode}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Plan</label>
                  <input
                    type="text"
                    placeholder="CNN"
                    className="userUpdateInput"
                    onChange={handleChange}
                    name="plan"
                    value={user.plan}
                  />
                </div>
              </div>
              <div className="userUpdateRight">
                <button className="userAddButton" onClick={handleSubmit}>Update</button>
              </div>
            </form>
          </div>
        </div>}
      </div>
    </ Container>
  );
}
