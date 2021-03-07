export const getSearchText = state => state.libraryRegionsStore.searchText;
export const getItems = state => state.libraryRegionsStore.list;
export const getLibraryRegion = state => state.libraryRegionsStore.libraryRegion;

export const getFilteredItems = state => {
    const searchText = getSearchText(state);
    const items = getItems(state);

    return items.filter((library) => {
        return library.territory.toLowerCase().includes(searchText.toLowerCase())
    })
}