export interface Room {
    id: number;
    name: string;
    status: boolean | null;
    price: Number;
    max_user?: Number
    description?: string
    hotel_id?: Number
    img?: string
}