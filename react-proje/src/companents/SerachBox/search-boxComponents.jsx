import "./search-boxStyle.css"



 function SearchBox({className,placeholder,onChangeHandler}) {
  return (
    <div>
        <input type={"search"} placeholder={placeholder} className={`search-box ${className}`} onChange={onChangeHandler}></input>
      
    </div>
  )
}

export default SearchBox;