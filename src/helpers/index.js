export const sortString = (a, b) => a.name > b.name ? 1 : -1
export const onlyNumbers = s => s.replace( /^\D+/g, '')