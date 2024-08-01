"use client";
import React, { useState } from 'react';
import BannerImageComp from './components/BannerImageComp';
import EditBannerTemplateBs from './components/EditBannerTemplateBs';
import adBannersData from '../data/addBanner.json'; 

interface Banner {
    title: string;
    description: string;
    cta: string;
    image: string;
    background: string;
}

const HomePage = () => {
    const [banners, setBanners] = useState(adBannersData); // State for banners
    const [editOpen, setEditOpen] = useState(false); // State for edit modal
    const [currentBanner, setCurrentBanner] = useState<Banner | null>(null); // Current banner to edit

    // Function to open the edit modal
    const handleEditClick = (banner: any) => {
        setCurrentBanner(banner);
        setEditOpen(true);
    };

    //   save edited banner
    const handleSave = (updatedData: any) => {
        if (currentBanner) {
            const updatedBanners = banners.map((banner: { title: any; }) =>
                banner.title === currentBanner.title ? { ...banner, ...updatedData } : banner
            );
            setBanners(updatedBanners);
        }
    };

    return (
        <div>
            <img src={"https://www.bannerbot.xyz/_next/image?url=%2Fimages%2Fbannerbot-logo.png&w=96&q=75"}
                style={{
                    position: 'absolute',
                    left: '50%',
                    top: '5%',
                    transform: 'translate(-50%, -50%) scale(0.6)',
                }} />
            <h1 style={{ textAlign: 'center', marginTop: '5%', }}>Ad Banners</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>

                {banners.map((banner: any, index: number) => (
                    <BannerImageComp
                        key={index}
                        title={banner.title}
                        description={banner.description}
                        cta={banner.cta}
                        image={banner.image}
                        background={banner.background}
                        showEditIcon={true}
                        onEdit={() => handleEditClick(banner)} 
                    />
                ))}

            </div>

            {currentBanner && (
                <EditBannerTemplateBs
                    open={editOpen}
                    onClose={() => setEditOpen(false)}
                    initialData={currentBanner}
                    onSave={handleSave} 
                />
            )}
        </div>
    );
};

export default HomePage;
