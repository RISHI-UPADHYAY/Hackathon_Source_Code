import React from 'react';
import legalAid from '../../Assets/legal_aid_form.webp'
import onlineHearing from '../../Assets/online_hearing.webp'
import experienceSharing from '../../Assets/experience_sharing.jpg'
import proBonoImg from '../../Assets/pro_bono_legal_assistance.jpg'
import { useNavigate } from 'react-router-dom';

function FeaturesSection() {

    const navigate = useNavigate();

    const goToLegalAidForm = () => {
        navigate('/legal-aid-form');
    }

    const goToOnlineHearingPlatform = () => {
        navigate('/online-hearing-platform');
    }

    const goToProBonoCaseFinder = () => {
        navigate('/pro-bono-case-finder');
    }

    const features = [
        {
            title: 'Legal Aid Request Form',
            description: 'Apply for government or non-government legal aid directly.',
            icon: legalAid,
        },
        {
            title: 'Pro Bono Case Finder',
            description: 'Find legal cases pending due to financial constraints and connect with pro bono legal aid.',
            icon: proBonoImg,
        },
        {
            title: 'Online Hearing Platform',
            description: 'Attend court sessions remotely for small cases.',
            icon: onlineHearing,
        },
        {
            title: 'Experience Sharing Platform',
            description: 'Share experiences related to specific crimes with others.',
            icon: experienceSharing,
        },
    ];

    return (
        <section className="features-section">
            <h2>Additional Features</h2>
            <div className="features-list">
                {features.map((feature, index) => (
                    <div key={index} className="feature-item">
                        <img src={feature.icon} alt={feature.title} />
                        <div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                            {/* <button>Explore</button> */}
                            <div>
                                {
                                    feature.title==='Legal Aid Request Form'?
                                    <button onClick={goToLegalAidForm}>Explore</button>:""
                                }
                                {
                                    feature.title==='Online Hearing Platform'?
                                    <button onClick={goToOnlineHearingPlatform}>Explore</button>:""
                                }
                                {
                                    feature.title==='Pro Bono Case Finder'?
                                    <button onClick={goToProBonoCaseFinder}>Explore</button>:""
                                }
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default FeaturesSection;