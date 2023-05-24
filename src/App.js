import AddInfo from "./AddInfo";
import Search from "./Search";
import './App.css';
import { useCallback, useEffect, useState } from "react";
// import Data from './data.json';


function App() {
  // state
  const [list,setList] = useState([]);
  const [sortTo,setSortTo] = useState('petName');
  const [query,setQuery] = useState('');

  // useCallback
  const Data = useCallback(()=>{
    fetch('./data.json')
    .then(response=>response.json())
    .then(data=>setList(data))
  },[]);

  // useEffect
  useEffect(Data,[Data]);

  // sort()
  const filterSort = list.filter((item)=>{
    return  (
      item.petName.toLowerCase().includes(query.toLowerCase()) || 
      item.ownerName.toLowerCase().includes(query.toLowerCase())
      )
  })
    .sort((a,b)=>{
    return (a[sortTo].toLowerCase() < b[sortTo].toLowerCase() ? -1 : 1)
  })
console.log(filterSort)

  return (
    <div id="box">
      <Search sortTo={sortTo} 
              onChangeSort={(myId)=>setSortTo(myId)}
              query={query}
              onQueryChange={(myQuery)=>setQuery(myQuery)}
              />

      <div id="list">
        <ul>
          {filterSort.map((listItem)=>(
          <AddInfo key={listItem.id} 
                   listItem={listItem}
                   onDelete={(myId)=>setList(list.filter((item)=>{return item.id !== myId}))}/>          
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;