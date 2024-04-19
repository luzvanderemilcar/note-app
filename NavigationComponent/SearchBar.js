function SearchBar({ placeHolder, searchChange }) {

    return (
        <input type="text"
         onChange={searchChange}
         placeholder={placeHolder} />
    )
}