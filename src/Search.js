import { useState } from 'react';
import {BiDownArrow,BiSearchAlt,BiCheckSquare} from 'react-icons/bi';


function DropDown({toggle,onChangeSort,sortTo}){
    // console.log(sortName)
    if(!toggle){
        return null;
    }
    return(
        <ul>
            <li onClick={()=>{onChangeSort('petName')}}>
                애기이름
                {sortTo === 'petName' && <BiCheckSquare />}
            </li>
            <li onClick={()=>{onChangeSort('ownerName')}}>
                예약자명 
                {sortTo === 'ownerName' && <BiCheckSquare />}
            </li>
            <li onClick={()=>{onChangeSort('aptDate')}}>
                날짜 
                {sortTo === 'aptDate' && <BiCheckSquare />}
            </li>
        </ul>
    )
}



export default function Search({onChangeSort,sortTo,query,onQueryChange}){
    // console.log(sortTo)
    const [toggle,setToggle] = useState(false);

    return(
        <div id="search">
            <div>
                <BiSearchAlt />
                <input type="text" 
                       value={query}
                       onChange={(e)=>{onQueryChange(e.target.value)}}/>
                <button type="button" 
                        onClick={()=>setToggle(!toggle)}>
                    <BiDownArrow />
                </button>
                <DropDown toggle={toggle} onChangeSort={onChangeSort} sortTo={sortTo}/>
            </div>
        </div>
    )
}