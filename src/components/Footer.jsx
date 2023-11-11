import {
  Grid,
  Stack,
  Typography,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import PrivacyTipOutlinedIcon from "@mui/icons-material/PrivacyTipOutlined";
import KeyboardReturnOutlinedIcon from "@mui/icons-material/KeyboardReturnOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import useResponsive from "./useResponsive";
const Footer = () => {
  const { mobile, tablet, desktop } = useResponsive();

  return (
    <>
      <Grid container spacing={2} my={3} px={mobile ? 2 : 3}>
        <Grid item lg={3} xs={12}>
          <Typography variant="subtitle1" mb={1}>
            Customer Service
          </Typography>
          <Stack direction={"row"} alignItems={"center"} gap={1}>
            <PrivacyTipOutlinedIcon fontSize="small" />
            <Typography variant="body2">Terms & Privacy Policy</Typography>
          </Stack>
          <Stack direction={"row"} alignItems={"center"} gap={1}>
            <KeyboardReturnOutlinedIcon fontSize="small" />
            <Typography variant="body2">Return Policy</Typography>
          </Stack>
        </Grid>
        <Grid item lg={3} xs={12}>
          <Typography variant="subtitle1">Language</Typography>
          <FormControl>
            <RadioGroup name="language" defaultValue={"english"}>
              <FormControlLabel
                value={"unicode"}
                control={<Radio size="small" />}
                label={
                  <Typography variant="body2">Myanmar (Unicode)</Typography>
                }
              ></FormControlLabel>
              <FormControlLabel
                value={"zawgyi"}
                control={<Radio size="small" />}
                label={
                  <Typography variant="body2">Myanmar (Zawgyi)</Typography>
                }
              ></FormControlLabel>
              <FormControlLabel
                value={"english"}
                control={<Radio size="small" />}
                label={<Typography variant="body2">English</Typography>}
              ></FormControlLabel>
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item lg={3} xs={12}>
          <Typography variant="subtitle1" mb={1}>
            Contact Us
          </Typography>
          <Stack direction={"row"} alignItems={"flex-start"} gap={1}>
            <LocationOnOutlinedIcon fontSize="small" />
            <Typography variant="body2">
              Lay Daunt Kan Main Road, Cashmere Stop, Near Zawana, Thingangyun
              Tsp, Yangon
            </Typography>
          </Stack>
          <Stack direction={"row"} alignItems={"center"} gap={1}>
            <PhoneOutlinedIcon fontSize="small" />
            <Typography variant="body2">09458489458</Typography>
          </Stack>
        </Grid>
        <Grid item lg={3} xs={12}>
          <Typography variant="subtitle1">Download Our App</Typography>
          <img
            src="/images/qrcode.svg"
            alt=""
            width={"100px"}
            height={"100px"}
          />
        </Grid>
        <Grid item lg={3} xs={12}>
          <Typography variant="subtitle1">Payment</Typography>
          <Stack direction={"row"} gap={1} mt={1}>
            <img
              className=" w-[60px] h-[40px] object-cover rounded-md "
              src="/images/kpay.png"
              alt="kpay"
            />
            <img
              src="/images/wavemoney.jpg"
              alt="wavemoney"
              className=" w-[60px] h-[40px] object-cover rounded-md "
            />
          </Stack>
        </Grid>
        <Grid item lg={3} xs={12}>
          <Typography variant="subtitle1">Follow Us On</Typography>
          <Stack direction={"row"} gap={1} mt={1}>
            <img src="/images/facebook.svg" alt="facebook" className="svg" />
            <img src="/images/instagram.svg" alt="instagram" className="svg" />
            <img src="/images/viber.svg" alt="viber" className="svg" />
            <img src="/images/twitter.svg" alt="twitter" className="svg" />
            <img src="/images/telegram.svg" alt="telegram" className="svg" />
          </Stack>
        </Grid>
      </Grid>
      <Typography variant="body2" fontSize={"10px"} align="center" mb={1}>
        &copy; CopyRight 2023 C by D Co.,Ltd. All Rights reserved.
      </Typography>
    </>
  );
};

export default Footer;
