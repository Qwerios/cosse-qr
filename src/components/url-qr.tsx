import Box from "@mui/system/Box";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import TextField from "@mui/material/TextField";
import { useRecoilState, useRecoilValue } from "recoil";
import { QRCode } from 'react-qrcode-logo';

import qrColorState from "../state/atoms/qr-color";
import qrDataUrlState from "../state/atoms/qr-data-url";
import qrSizeState from "../state/atoms/qr-size";
import qrStyleState from "../state/atoms/qr-style";

const UrlQr = () => {
    const qrColor = useRecoilValue(qrColorState);
    const qrSize = useRecoilValue(qrSizeState);
    const qrStyle = useRecoilValue(qrStyleState);

    const [url, setUrl] = useRecoilState(qrDataUrlState)

    const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
        const newUrl = event.target.value;
        setUrl(newUrl);
      };

    return (
        <Grid container spacing={4}>
            <Grid item xs={12} sm={8}>
                <TextField
                    fullWidth
                    label="URL"
                    onChange={handleUrlChange}
                    required
                    value={url}
                    variant="filled"
                    />                
            </Grid>
            <Grid item xs={12} sm={4}>
                {url ?
                    <Box>
                        <QRCode 
                          value={url} 
                          size={qrSize} 
                          fgColor={qrColor} 
                          logoImage="src/assets/qr-logo.png"
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
                        <div><a href={url} target="_blank">{url}</a></div>
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

export default UrlQr;