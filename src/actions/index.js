export const selectLibrary = (LibraryId) => {
    console.log('HERE', LibraryId)
    return {
        type: 'select_library',
        payload: LibraryId
    };
};