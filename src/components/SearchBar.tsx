

type SearchBarProps = {
    setSearchText: (searchText: string) => void
}

export default function SearchBar(props: SearchBarProps){
    return(
        <input type="text" onChange={event => props.setSearchText(event.target.value)}/>
    )
}