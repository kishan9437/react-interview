import React,{useState,onSearch} from "react";

function SearchBar()
{
    const [query, setQuery] = useState('');

    const handleChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(query);
    };
    return(
        <div>
            <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Search for a movie..."
                value={query}
                onChange={handleChange}
            />
            <button type="submit">Search</button>
        </form>

        </div>
    )
}
export default SearchBar