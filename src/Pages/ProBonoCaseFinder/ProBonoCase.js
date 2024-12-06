import React,{useState} from 'react'
import CaseSearchBar from './CaseSearchBar';
import CaseFilter from './CaseFilter';
import CaseList from './CaseList';

const ProBonoCase = () => {

    const [cases, setCases] = useState([
        // Example case data (you can replace this with real data)
        {
            id: 1,
            title: 'Pro Bono Family Law Case',
            location: 'Delhi',
            caseType: 'Family',
            urgency: 'High',
            description: 'A family law case requiring immediate assistance.'
        },
        {
            id: 2,
            title: 'Civil Rights Case',
            location: 'Mumbai',
            caseType: 'Civil',
            urgency: 'Medium',
            description: 'A civil rights case that needs pro bono legal assistance.'
        },
        {
            id: 3,
            title: 'Immigration Case',
            location: 'Bangalore',
            caseType: 'Immigration',
            urgency: 'Low',
            description: 'An immigration case for legal advice.'
        },
    ]);

    const [filteredCases, setFilteredCases] = useState(cases);

    // Search handler
    const handleSearch = (searchTerm) => {
        const filtered = cases.filter((caseItem) =>
            caseItem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            caseItem.caseType.toLowerCase().includes(searchTerm.toLowerCase()) ||
            caseItem.location.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredCases(filtered);
    };

    // Filter handler
    const handleFilter = (filterData) => {
        const { caseType, location, urgency } = filterData;
        const filtered = cases.filter((caseItem) => {
            return (
                (caseType ? caseItem.caseType === caseType : true) &&
                (location ? caseItem.location.toLowerCase().includes(location.toLowerCase()) : true) &&
                (urgency ? caseItem.urgency === urgency : true)
            );
        });
        setFilteredCases(filtered);
    };

    return (
        <div>
            <CaseSearchBar onSearch={handleSearch} />
            <CaseFilter onSearch={handleFilter} />
            <CaseList cases={filteredCases} />
        </div>
    )
}

export default ProBonoCase
