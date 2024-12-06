import React from 'react';
import { useParams } from 'react-router-dom';
import HearingContent from '../../Components/OnlineHearingPlatform/HearingContent';


const Hearing = () => {
    const { id } = useParams();  // This 'id' will act as case number

    // Mock case details object, make sure to include 'caseNumber'
    const caseDetails = {
        caseNumber: id,  // Using 'id' from the route params
        title: 'State vs John Doe',
        date: '2024-09-15',
        time: '10:00 AM',
        videoStreamURL: 'https://www.youtube.com/embed/live_stream?channel=XYZ',
        notes: 'This case involves charges of ...'
    };

    return (
        <div className="hearing">
            <HearingContent caseDetails={caseDetails} />
        </div>
    );
};

export default Hearing;