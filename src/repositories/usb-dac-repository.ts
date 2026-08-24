import dacData from"../../public/data/usb_dac_status.json";

export interface UsbDac {
 brand: string;
 type: string;
 status:"working"|"not working";
}

export const UsbDacRepository = {
 getAll: (): UsbDac[] => {
 return dacData as UsbDac[];
 },
 search: (query: string): UsbDac[] => {
 const lowerQuery = query.toLowerCase();
 return (dacData as UsbDac[]).filter(
 (dac) =>
 dac.brand.toLowerCase().includes(lowerQuery) ||
 dac.type.toLowerCase().includes(lowerQuery),
 );
 },
};
