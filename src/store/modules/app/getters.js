// Get app status
export const appStatus = ({ loading, errors }) => {
    return {
        errors,
        loading,
        hasErrors: errors.length ? true : false
    }
}
