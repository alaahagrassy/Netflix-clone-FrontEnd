import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { Stack } from "@mui/material";
import CreditForm from "../Components/CreditForm";



const CreditCard = () => {

 
    return (
        <Container
        maxWidth="sm"
        sx={{ height: "150vh", boxSizing: "border-box", paddingTop: "5rem" }}>
  
      <Stack justifyContent="space-around" alignItems="center" alignContent="center" gap={2}>
        <Box sx={{ width: "auto", height: "auto" }}>
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Lock.png"
            alt="checked"
            height="50px"
            width="50px"
          />
        </Box>

        <Typography Variant="p" sx={{ fontSize: "0.9rem" }}>STEP <strong>3</strong> OF <strong>3</strong></Typography>
        <Typography Variant="p" sx={{ fontSize: "2rem", fontWeight: "bolder" , textAlign:'center'}}>Set up your payment</Typography>
        <Typography variant="p" component='div' sx={{fontSize:'1rem' , color:'#333' , textAlign:'center'}}>Your membership starts<br/>as soon as you set up payment.</Typography>
        <Typography variant="p" component='div' sx={{fontSize:'1.2rem' , color:'#333' , textAlign:'center' , fontWeight:'bold'}}>No commitments.<br/>Cancel online anytime.</Typography>


            <Box sx={{marginTop:'1rem'}}>
            <CreditForm />
            </Box>
            
      </Stack>
    </Container>
 
    );
};

export default CreditCard;