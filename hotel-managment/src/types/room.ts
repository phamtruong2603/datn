export interface Room {
    key?: Number;
    id: Number;
    name: string;
    status: boolean | null;
    price: Number;
    max_user: Number
    description?: string
    hotel_id?: Number
    img?: string
}