import React, { useState } from 'react';
import SearchBar from './SearchBar';

function Sidebar({ navLinks, onSelect }) {
    const [searchInput, setSearchInput] = useState('');
    const [filteredLinks, setFilteredLinks] = useState(navLinks);
    const [showResults, setShowResults] = useState(false);

    const handleSearchInputChange = (value) => {
        setSearchInput(value);
        setShowResults(true);

        if (value.trim() === '') {
            setFilteredLinks(navLinks);
        }   else {
                const filtered = navLinks.filter((link) =>
                    link.name.toLowerCase().includes(value.toLowerCase())
                );
                setFilteredLinks(filtered);
            }
    };

    const handleFocus = () => {
        setShowResults(true);
        setFilteredLinks(navLinks); 
    };

    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <h1>Giulia's Profile</h1>
                <SearchBar
                    searchInput={searchInput}
                    setSearchInput={handleSearchInputChange}
                    showResults={showResults}
                    filteredLinks={filteredLinks}
                    onSelect={onSelect}
                    onFocus={handleFocus}
                    navLinks={navLinks} 
                />
            </div>
        </aside>
    );
}

export default Sidebar;
