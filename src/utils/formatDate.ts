export const formatDate = (dateString: string) => {
    const date = new Date(dateString).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
    return date
}