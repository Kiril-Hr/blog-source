
export const cutText = (descr:string, qty:number) => descr.length > qty ? descr.slice(0, qty).concat(' ...') : descr

export const removeSymbols = (text: string) => {
    return text.replace(/[#*\\]/g, '');
}

export const dateUTC = (date: string) => {
    const utc = new Date(date);
    const year = utc.getUTCFullYear();
    const month = (utc.getUTCMonth() + 1).toString().padStart(2, '0');
    const day = utc.getUTCDate().toString().padStart(2, '0');

    const dateNew = `${year}/${month}/${day}`;
    return dateNew;
}

export const cutSlash = (str: string) => str.replace('/', '')
