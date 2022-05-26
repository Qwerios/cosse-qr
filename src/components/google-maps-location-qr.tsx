import Box from "@mui/system/Box";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import TextField from "@mui/material/TextField";
import { useRecoilState, useRecoilValue } from "recoil";
import { QRCode } from 'react-qrcode-logo';
import qrLogoUrl from '../assets/qr-logo.png';

import qrColorState from "../state/atoms/qr-color";
import qrDataLocationState from "../state/selectors/qr-data-location";
import qrLocationLatState from "../state/atoms/qr-location-lat";
import qrLocationLonState from "../state/atoms/qr-location-lon";
import qrSizeState from "../state/atoms/qr-size";
import qrStyleState from "../state/atoms/qr-style";

const GoogleMapsLocationQr = () => {
    const qrColor = useRecoilValue(qrColorState);
    const qrSize = useRecoilValue(qrSizeState);
    const qrStyle = useRecoilValue(qrStyleState);
    const qrDataLocation = useRecoilValue(qrDataLocationState)

    const [lat, setLat] = useRecoilState(qrLocationLatState)
    const [lon, setLon] = useRecoilState(qrLocationLonState)

    const handleLatChange = (event: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
        const newLat = event.target.value;
        setLat(newLat);
      };
    
    const handleLonChange = (event: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
        const newLon = event.target.value;
        setLon(newLon);
      };

    return (
        <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
                <TextField
                    fullWidth
                    label="Latitude"
                    onChange={handleLatChange}
                    required
                    value={lat}
                    variant="filled"
                    />                
            </Grid>
            <Grid item xs={12} sm={4}>
                <TextField
                    fullWidth
                    label="Longitude"
                    onChange={handleLonChange}
                    required
                    value={lon}
                    variant="filled"
                    />                
            </Grid>
            <Grid item xs={12} sm={4}>
                {qrDataLocation ?
                    <Box>
                        <QRCode 
                          value={qrDataLocation} 
                          size={qrSize} 
                          fgColor={qrColor} 
                          logoImage={qrLogoUrl}
                          logoHeight={qrSize *0.8}
                          logoWidth={qrSize *0.8}
                          logoOpacity={0.1}
                          qrStyle={qrStyle}
                          eyeRadius={[
                              [10, 10, 0, 10], // top/left eye
                              [10, 10, 10, 0], // top/right eye
                              [10, 0, 10, 10], // bottom/left
                          ]}
                          />
                        <div><a href={qrDataLocation} target="_blank">{qrDataLocation}</a></div>
                    </Box>
                : <Skeleton 
                    variant="rectangular" 
                    width={qrSize} 
                    height={qrSize} 
                    animation={false}
                    />
                }
            </Grid>
        </Grid>        
    )
}

export default GoogleMapsLocationQr;