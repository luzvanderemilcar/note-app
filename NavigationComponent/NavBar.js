function NavBar({showOptions, searchChange, showAccount}) {

    return (
        <div>
            <OptionButton showOptions={showOptions} />
            <SearchBar searchChange={searchChange} />
            <AccountProfile showAccount={showAccount} />
        </div>
    )
}