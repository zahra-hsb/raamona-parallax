import { useState } from "react";
import shareIcon from '../../../../public/icons/group_share_light.svg'
import Button from "../Button";
import Image from "next/image";

const ShareButton = ({ url, title }) => {

    const [isOpen, setIsOpen] = useState(false);

    const shareData = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
        twitter: `https://twitter.com/share?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
        whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(title)}%20${encodeURIComponent(url)}`,
        messenger: `fb-messenger://share/?link=${encodeURIComponent(url)}`,
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
        email: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`,
    };
    function handleOpenShare () {
        setIsOpen(!isOpen)
    }
    const handleShareClick = (platform) => {
        window.open(shareData[platform], '_blank');
        setIsOpen(false);
    };
    return (
        <div className="">
            <Button style={'bg-blue !p-3 rounded-lg'} onClick={handleOpenShare}
                text={
                    <>
                        <Image src={shareIcon} alt="" />
                    </>
                }
            />
            {isOpen && (
                <div style={{ position: 'absolute', background: '#fff', border: '1px solid #ccc', borderRadius: '5px', marginTop: '5px', padding: '10px' }}>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {Object.keys(shareData).map((platform) => (
                            <li key={platform} style={{ margin: '5px 0' }}>
                                <button onClick={() => handleShareClick(platform)} style={{ border: 'none', background: 'none', color: 'blue', cursor: 'pointer' }}>
                                    Share on {platform.charAt(0).toUpperCase() + platform.slice(1)}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default ShareButton