import * as React from "react";
import Paper from "@mui/material/Paper";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import GoogleMapsLocationQr from "./google-maps-location-qr";
import UrlQr from "./url-qr";
import Settings from "./settings";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`main-tabpanel-${index}`}
      aria-labelledby={`main-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Paper sx={{ p: 3 }} component="div">
          <Typography component="div">{children}</Typography>
        </Paper>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `main-tab-${index}`,
    "aria-controls": `main-tabpanel-${index}`,
  };
}
const MainTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Paper sx={{ width: "100%" }} component="div">
      <Paper sx={{ borderBottom: 1, borderColor: "divider" }} component="div">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="keuze tabs voor soort QR of instellingen"
        >
          <Tab label="Google Maps (lat/lon)" {...a11yProps(0)} />
          <Tab label="URL" {...a11yProps(1)} />
          <Tab label="Instellingen" {...a11yProps(2)} />
        </Tabs>
      </Paper>
      <TabPanel value={value} index={0}>
        <GoogleMapsLocationQr />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <UrlQr />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Settings />
      </TabPanel>
    </Paper>
  );
};

export default MainTabs;
