
export const cutText = (descr:string, qty:number) => descr.length > qty ? descr.slice(0, qty).concat(' ...') : descr