import { Grid, Box, Typography, Button, Card, CardActionArea, CardMedia, CardContent} from "@mui/material";
import Home1 from "../../images/home1.jpg";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import homedes1 from '../../images/homedes1.jpg'

const Home = () => {
  return (
    <>
      <Box>
        <Typography align="center" variant="h3" sx={{ fontWeight: 900 }}>
          Tank<b style={{ color: "red" }}>Automation</b>
        </Typography>
        <Typography align="center" variant="body2" sx={{ fontWeight: 100 }}>
          Tank Automation provides equitable water supply, reliability,
          completely visibility into your tanks, operate automatically,
          flexibility and it reduces the wastage of water
        </Typography>
      </Box>

      <Box
        sx={{
          backgroundImage: `url(${Home1})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: "black",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: 600,
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: { xs: "80%", sm: "50%", md: "60%" },
            padding: { xs: 3, sm: 2, md: 20 },
          }}
        >
          <Box sx={{ background: "white", opacity: "0.8" }}>
            <Typography variant={"h6"} color="tomato" align="center" pt={8}>
              Interested?
            </Typography>
            <Typography variant="h5" align="center">
              Contact us, we will gladly assist you
            </Typography>
            <Typography variant="body1" align="center" p={4}>
              <Button
                variant="contained"
                href="/contact"
                startIcon={<CallRoundedIcon />}
              >
                Contact Us
              </Button>
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* <Grid container justifyContent="center">
        <Grid item sm={10}>
          <h1 align="center">Advantages</h1>
          <hr /> */}
          {/* <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Item>xs=6 md=8</Item>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Item>xs=6 md=8</Item>
        </Grid>
      </Grid>
    </Box> */}
          {/* <p>Home Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio earum officiis debitis vel tenetur quos animi vero voluptates reiciendis, omnis sed in libero temporibus deleniti pariatur expedita corporis officia. Odit enim, quasi facere magnam earum officiis ipsa aliquid impedit velit quibusdam dolor ex esse ratione explicabo quod, culpa temporibus? Dolorem deleniti doloremque maxime quas deserunt. Ex aspernatur saepe illo eaque corrupti placeat, aperiam nulla adipisci itaque quos necessitatibus iure at minus non delectus ratione quod ad. Alias dolore perferendis est expedita iure! Nostrum laborum tempore amet commodi voluptas accusamus enim repudiandae, quia odio cumque, laboriosam architecto illo! Aliquid, fuga quis.</p> */}
        {/* </Grid>
      </Grid> */}

      <Grid container justifyContent="center">
        <Grid item sm={10}>
          <h1 align="center">Features</h1>
          <hr />
          <h4>Admin</h4>

          <Typography variant="h6">1. Flow and Water Level</Typography>
          <Typography variant="h7">
            <Typography paddingLeft="20px">
              {"1.1 Auto stop/start motor after reaching specific water level in upper tank (lower to upper tank)"}
            </Typography>
            <Typography paddingLeft="20px">
              {"1.1 Auto on/off based on water amount flowed at home (upper tank to home) "}
            </Typography>
          </Typography>

          <Typography variant="h6">2. Schedule Time</Typography>
          <Typography variant="h7">
            <Typography paddingLeft="20px">
              {"2.1 Schedule upper to home tank water supply so it will automatically supply water on that time."}
            </Typography>
            <Typography paddingLeft="20px">
              {"2.2 Schedule cleaning time on which it will automatically start cleaning at a particular date and time."}
            </Typography>
            <Typography paddingLeft="20px">
              {"2.3 Logs the clean details after cleaning the upper tank."}
            </Typography>
          </Typography>

          <Typography variant="h6">
            3. Manual signals
            <Typography variant="h7">
                <Typography paddingLeft="20px">
                  {"3.1 You can manually on/off the motor through software."}
                </Typography>
                <Typography paddingLeft="20px">
                  {"3.2 Logs the clean details after cleaning the upper tank."}
                </Typography>
            </Typography>
          </Typography>

          <Typography variant="h6">4. Users controls</Typography>
          <Typography variant="h7">
                <Typography paddingLeft="20px">
                  {"4.1 Add a new user to the system and add his details to the system."}
                </Typography>
                <Typography paddingLeft="20px">
                  {"4.2 On/off supply list of users to enable or disable his water supply."}
                </Typography>
          </Typography>
          
          <Typography variant="h6">5. Alerts and Notifications</Typography>
          <Typography variant="h7">
                <Typography paddingLeft="20px">
                  {"5.1 Send alerts to users."}
                </Typography>
                <Typography paddingLeft="20px">
                  {"5.2 Get message from user."}
                </Typography>
                <Typography paddingLeft="20px">
                  {"5.3 Get alert for incoming water in lower tank"}
                </Typography>
                <Typography paddingLeft="20px">
                  {"5.4 Get tank cleaning and supply of water status and alerts"}
                </Typography>
            </Typography>
        </Grid>
      </Grid>

      <Grid container justifyContent="center">
        <Grid item sm={10}>
          <h1 align="center">Working Design</h1>
          <hr />
          <div
            style={{
              backgroundImage: `url(${homedes1})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              height: "70vh",
              color: "#f5f5f5",
            }}
          ></div>
          <Typography variant="h6">
            Work flow of the Automatic water flow:
          </Typography>
          <Typography>
            <Typography paddingLeft="20px" paddingBottom={"5px"}>
                    {"Step 1: If the water tank is empty the motor will automatically TURN ON through the switch(relay)."}
            </Typography>
            <Typography paddingLeft="20px" paddingBottom={"5px"}>
                    {"Step 2: The motor is TURNED ON, this data is sent to the admin through a pop-up message."}
            </Typography>
            <Typography paddingLeft="20px" paddingBottom={"5px"}>
                    {"Step 3: As Step 2 all the levels of water in the tank will be sent to the owner."}
            </Typography>
            <Typography paddingLeft="20px" paddingBottom={"5px"}>
                    {"Step 4: WaterConservation()"}
                    <Typography>
                    {"{ if(level>=mid && level<=high) { printf(“the flow rate of water is controlled”); } else{ printf(“do not control”); }} "}
                    </Typography>
            </Typography>
            <Typography paddingLeft="20px" paddingBottom={"5px"}>
                    {"Step 5: Step 4 indicates the conservation of water level in the tank."}
            </Typography>
            <Typography paddingLeft="20px"paddingBottom={"5px"}>
                    {"Step 6: Else the water level reaches to level high the switch automatically TURNS OFF and sends the data to the owner."}
            </Typography>
          </Typography>
        </Grid>
      </Grid>

      <Grid container justifyContent="center">
        <Grid item sm={10}>
          <h1 align="center">Asset</h1>
          <hr />
          <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {MenuList.map((menu) => (
          <Card sx={{ maxWidth: "390px", display: "flex", m: 2 }}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "400px" }}
                component={"img"}
                src={menu.image}
                alt={menu.name}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom component={"div"}>
                  {menu.name}
                </Typography>
                <Typography variant="body2">{menu.description}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;

export const MenuList = [
  {
    name: "ESP32 Nodemcu",
    description:
      "ESP32 is a low-cost System on Chip (SoC) Microcontroller from Espressif Systems, the developers of the ESP8266 SoC. It is a successor to ESP8266 SoC and comes in both single-core and dual-core variations of Tensilica's 32-bit Xtensa LX6 Microprocessor with integrated Wi-Fi and Bluetooth.",
    image: "https://th.bing.com/th/id/OIP.7PMGELeSFmcYMy7ZHO3X3wHaFj?pid=ImgDet&rs=1",
  },
  {
    name: "DC Water Pump",
    description:
      "Micro dc 3-6v micro submersible pump mini water pump for fountain garden mini water circulation system diy project dc 3v to 6v submersible pump micro mini submersible water pump 3v to 6vdc water pump for diy dc pump for hobby kit mini submersible pump motor this is a low cost, small size submersible pump motor which can be operated from a 2.5 ~ 6V power supply.",
    image: "https://ae01.alicdn.com/kf/HTB1nWXDTCzqK1RjSZFLq6An2XXa5/Micro-Submersible-and-Amphibious-DC-Motor-Pump-Water-pump-3V-120L-H-Low-Noise-Hot.jpg",
  },
  {
    name: "YF-S401 - Flow sensor",
    description:
      "Micro dc 3-6v micro submersible pump mini water pump for fountain garden mini water circulation system diy project dc 3v to 6v submersible pump micro mini submersible water pump 3v to 6vdc water pump for diy dc pump for hobby kit mini submersible pump motor this is a low cost, small size submersible pump motor which can be operated from a 2.5 ~ 6V power supply.",
    image: "https://th.bing.com/th/id/OIP.fJpguE7TKM1xxbI07hWWSQHaHa?pid=ImgDet&rs=1",
  },
  {
    name: "HC-SR04 - Ultrasonic sensor",
    description:
      "Micro dc 3-6v micro submersible pump mini water pump for fountain garden mini water circulation system diy project dc 3v to 6v submersible pump micro mini submersible water pump 3v to 6vdc water pump for diy dc pump for hobby kit mini submersible pump motor this is a low cost, small size submersible pump motor which can be operated from a 2.5 ~ 6V power supply.",
    image: "https://cdn.shopify.com/s/files/1/1217/2104/products/ultrasonic_720_660_1024x1024.png?v=1528312556",
  },
  {
    name: "V Single-Channel Relay Module",
    description:
      "Relay is basically a switch which opens and closes the circuit either electronically or mechanically. In other words we can say that a relay is an electromechanical switch which uses electromagnetism from small current or voltage to switch higher current or voltage for different appliances. It has two basic contacts i.e. NO (Normally Open) and NC (Normally Closed).",
    image: "https://th.bing.com/th/id/OIP.HoLb9aOnAo_3W1V1mI1GNQHaHa?pid=ImgDet&rs=1",
  },
]