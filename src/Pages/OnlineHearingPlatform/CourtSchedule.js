import React from 'react';
import { Link } from 'react-router-dom';

const CourtSchedule = () => {
    const hearings = [
        { id: 1, case: 'Case #123', date: '2024-09-15', time: '10:00 AM' },
        { id: 2, case: 'Case #456', date: '2024-09-16', time: '11:00 AM' },
    ];

    return (
        <div className="court-schedule">
            <h2>Court Schedule</h2>
            <ul>
                {hearings.map((hearing) => (
                    <li key={hearing.id}>
                        <Link to={`/hearing/${hearing.id}`}>
                            {hearing.case} - {hearing.date} at {hearing.time}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CourtSchedule;