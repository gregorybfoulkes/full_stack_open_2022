const Filter = ({newFilter,filterCountries}) => {
    return(
        <div>
        search countries: <input value={newFilter} onChange={filterCountries}/>
        </div>
    )
}

export default Filter