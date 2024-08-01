import React from 'react';
import { Box, Typography, IconButton, colors, Button  } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
  

interface Banner {
    title: string;
    description: string;
    cta: string;
    image: string;
    background: string;
    onEdit: () => void;
    showEditIcon: boolean;
}

const BannerImageComp: React.FC<Banner> = ({ title, description, cta, image, background, onEdit, showEditIcon }) => {
    
    const containerStyle = {
        position: 'relative',
        width: '500px',
        height: '600px',
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        borderRadius: '8px',
        padding: '20px',
        margin: '20px',
        left: '5%',
    };
     
    const editIconStyle = {
        position: 'absolute',
        top: '10px',
        right: '10px',
        color: 'white',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
        '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.7)', 
        },
    };
    const titleStyle = {
        position: 'absolute', 
        color: 'red',
        fontSize: '2rem',
        fontWeight: 'bold',
        background:'none',
    };
    const descStyle = {
        position: 'absolute',
        marginTop: '40%',
        color: 'black',
        fontSize: '1.2rem', 
        background:'none',
    };

    return (
        <>
            <Box sx={containerStyle}>

                <img src={image} alt={title} style={{
                    width: '300px',  
                    height: '300px',  
                    borderRadius: '8px',
                    objectFit: 'contain',  
                    position: 'absolute',  
                    top: '40%',  
                    right: '10%',  
                }} />
                <div style={{ width: '40%',  position: 'absolute', top: '10%', left: '10%' }}>
                    <Typography variant="h5" sx={titleStyle}>{title}</Typography>
                    <Typography variant="body2" sx={descStyle}>{description}</Typography>
                    <Button value={cta} variant="outlined" sx={{  marginTop: '220%', right: '15%', fontSize: '0.7em', borderColor: 'red', color:'green' }} onClick={() => alert('Button clicked!')}>
                        {cta}
                    </Button>
                </div>
                {showEditIcon && (
                 <IconButton onClick={onEdit} sx={editIconStyle}>
                    <EditIcon />
                </IconButton>
            )}
        </Box>
        </>
    )
}
export default BannerImageComp;

