import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { useRecoilState } from "recoil";
import { QRCode } from 'react-qrcode-logo';
import qrLogoUrl from '../assets/qr-logo.png';

import qrColorState from "../state/atoms/qr-color";
import qrSizeState from "../state/atoms/qr-size";
import qrStyleState from "../state/atoms/qr-style";
import Button from "@mui/material/Button";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";

const Settings = () => {
    const [color, setColor] = useRecoilState(qrColorState)
    const [size, setSize] = useRecoilState(qrSizeState)
    const [style, setStyle] = useRecoilState(qrStyleState)

    const exampleSize = 100;

    const handleSizeChange = (event: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
        const newSize = parseInt(event.target.value, 10);
        if (!isNaN(newSize)) {
            setSize(newSize);
        }
      };
    const handleReset = () => {
        setColor('#60a72e');
        setSize(250);
        setStyle('dots');
    }

    const handleStyleChange = (event: SelectChangeEvent<string>) => {
        const newStyle = event.target.value;
        switch (newStyle) {
            case 'dots': setStyle('dots'); break;
            case 'squares': setStyle('squares'); break;
        }
      };

    const handleColorChange = (event: SelectChangeEvent<string>) => {
        const newColor = event.target.value;
        setColor(newColor);
      };

    return (
        <Grid container spacing={4}>
            <Grid item xs={12} sm={10}>
                <TextField
                    fullWidth
                    label="QR Grote (pixels)"
                    onChange={handleSizeChange}
                    required
                    value={size}
                    variant="filled"
                    />                
            </Grid>
            <Grid item xs={12} sm={2}>
                <Button onClick={handleReset} variant="outlined">Reset</Button>
            </Grid>

            <Grid item xs={12} sm={5}>
                <Select
                    fullWidth
                    value={style}
                    label="QR Stijl"
                    onChange={handleStyleChange}
                    variant="filled"
                    >
                        <MenuItem value={'dots'}>Rond</MenuItem>
                        <MenuItem value={'squares'}>Vierkant</MenuItem>
                </Select>  
                <FormHelperText>Kies de stijl van de QR blokjes</FormHelperText>      
            </Grid>
            <Grid item xs={12} sm={5}>
                <Select
                    fullWidth
                    value={color}
                    label="QR Kleur"
                    onChange={handleColorChange}
                    variant="filled"
                    >
                        <MenuItem value={'#60a72e'}>Groen</MenuItem>
                        <MenuItem value={'#000000'}>Zwart</MenuItem>
                </Select>  
                <FormHelperText>Kies de kleur van de QR code</FormHelperText>      
            </Grid>
            <Grid item xs={12}>
                <QRCode 
                    value="https://www.cossecamperadventure.com/" 
                    size={size} 
                    fgColor={color} 
                    logoImage={qrLogoUrl}
                    logoHeight={size *0.8}
                    logoWidth={size *0.8}
                    logoOpacity={0.1}
                    qrStyle={style}
                    eyeRadius={[
                        [10, 10, 0, 10], // top/left eye
                        [10, 10, 10, 0], // top/right eye
                        [10, 0, 10, 10], // bottom/left
                    ]}
                    />
                <div>Voorbeeld</div>
            </Grid>
        </Grid>        
    )
}

export default Settings;