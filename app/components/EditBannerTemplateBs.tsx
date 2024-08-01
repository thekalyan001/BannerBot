import React, { useState, useEffect } from 'react';
import { Dialog, Box, TextField, Button, Grid, IconButton } from '@mui/material';
import adBannersData from "../../data/addBanner.json"; 
import BannerImageComp from './BannerImageComp'; // Import the BannerImageComp
import CloseIcon from '@mui/icons-material/Close';


interface EditBannerTemplateProps {
    open: boolean;
    onClose: () => void;
    initialData: {
        title: string;
        description: string;
        cta: string;
        image: string; 
        background: string;  
    };
    onSave: (updatedData: { title: string; description: string; cta: string; image: string; background: string }) => void; 
}

const EditBannerTemplateBs: React.FC<EditBannerTemplateProps> = ({ open, onClose, initialData, onSave }) => {

    const [title, setTitle] = useState(initialData.title);
    const [description, setDescription] = useState(initialData.description);
    const [cta, setCta] = useState(initialData.cta);
    const [image, setImage] = useState(initialData.image); // selected image
    const [background, setBackground] = useState(initialData.background); // selected background
    const [banners, setBanners] = useState(adBannersData);

    useEffect(() => {
        setTitle(initialData.title);
        setDescription(initialData.description);
        setCta(initialData.cta);
        setImage(initialData.image); // Set initial image
        setBackground(initialData.background); // Set initial background
    }, [initialData]);

    const uniqueBanners = banners.filter((curr, index, selfArr) =>
        index === selfArr.findIndex((b) => b.image === curr.image)
    );

    const handleSave = () => {
        onSave({ title, description, cta, image, background }); 
        onClose();
    };

    return ( 
            <Dialog open={open} onClose={onClose}>
            <Box padding={2} style={{ minWidth: '350px', minHeight: '450px' }}>

                <IconButton
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                    }}
                >
                    <CloseIcon />
                </IconButton>
                
                {/* preview card below */}
                <Box style={{  width: '250px', height: '250px', margin: '10% 0 10% 25%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ transform: '  scale(0.5)',}}>
                        <BannerImageComp
                            title={title}
                            description={description}
                            cta={cta}
                            image={image}
                            showEditIcon={false}
                            background={background}  
                            onEdit={() => {}} // its's preview so No edit function needed here
                        />
                    </div>
                </Box>

                <TextField
                    label="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    fullWidth
                />
                <TextField
                    label="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Button text"
                    value={cta}
                    onChange={(e) => setCta(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                
                {/* Image selection section */}
                <Grid container spacing={1} style={{ marginTop: '16px' }}>
                    {uniqueBanners.map((img, index) => (
                        <Grid item xs={3} key={index}>
                            <IconButton onClick={() => {
                                setImage(img.image); 
                            }}>
                                <img
                                    src={img.image}
                                    alt={img.image}
                                    style={{
                                        width: '80%',
                                        height: '60%',
                                        borderRadius: '100%',
                                        border: '2px solid blue', 
                                    }}
                                />
                            </IconButton>
                        </Grid>
                    ))}
                </Grid>

                <Button 
                    variant="contained" 
                    onClick={handleSave} 
                    style={{ marginTop: '16px' }} 
                    fullWidth 
                    sx={{ backgroundColor: '#1A3636', borderRadius: '10px' }} 
                >
                    Done
                </Button>
            </Box>
        </Dialog>
    );
};

export default EditBannerTemplateBs;
