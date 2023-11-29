const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-us', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })
}

export default formatDate