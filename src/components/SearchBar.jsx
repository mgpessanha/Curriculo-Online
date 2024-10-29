import React from 'react';

function SearchBar({ searchInput, setSearchInput, showResults, filteredLinks, onSelect, navLinks, onFocus }) {
    return (
        <div className="search-container">
            <input
                type="text"
                className="search-bar"
                placeholder="Search..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onFocus={onFocus} 
            />

            {showResults && (
                <div className="search-results">
                    {(filteredLinks.length > 0 ? filteredLinks : navLinks).map((link, index) => (
                        <div
                        key={index}
                        className="search-result-item"
                        onClick={() => onSelect(link.path)}
                        >
                        {link.name}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default SearchBar;
