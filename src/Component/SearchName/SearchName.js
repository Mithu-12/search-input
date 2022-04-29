import React, { useState } from 'react';
import genarated from '../generated.json'
import './SearchName.css'

const SearchName = () => {
    const [search, setSearch] = useState('')
    return (
        <div>
            <div className="searchText">
                <input type="text"
                className='searchValue'
                onChange={(event)=>{
                    setSearch(event.target.value)
                }}
                placeholder='Search by Name'
                />
            </div>
            {genarated.filter(value=>{
                if(search == ''){
                    return value;
                } else if(value.firstName.toLowerCase().includes(search.toLocaleLowerCase())){
                    return value;
                }
            }).map(value=>{
                return(
                    <p className='BrandValue'>{value.firstName}</p>
                )
            })}
        </div>
    );
};

export default SearchName;