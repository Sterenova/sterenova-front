import { PhotoType } from "./PhotoType";

export type EquipmentType = {
    id: number;
    name: string;
    type: string;
    description: string;
    price: number;
    photos: PhotoType[];
};