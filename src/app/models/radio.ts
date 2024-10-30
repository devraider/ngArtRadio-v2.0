import { RadioType } from "./radio-type";

export interface Radio {
    name: string,
    slug: string,
    type: string[],
    description?: string,
    contact?: string,
    img: string,
    radioTypes: RadioType[]
}
