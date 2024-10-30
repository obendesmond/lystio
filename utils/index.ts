// mm-dd-yy
export function formatDateMMDDYYYY(isoDateString: string): string {
    const date = new Date(isoDateString);

    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-indexed
    const day = date.getDate().toString().padStart(2, '0');
    const year = date.getFullYear();

    return `${month}-${day}-${year}`;
}
