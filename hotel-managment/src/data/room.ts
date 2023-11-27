import { Room } from "../types/room";

export const roomData: Room[] = [
    {
        id: 1,
        name: "room 1",
        status: null,
        price: 2500.00,
        max_user: 3,
        description: "",
        hotel_id: 1,
        img: ""
    },
    {
        id: 2,
        name: "room 2",
        status: false,
        price: 2500.00,
        max_user: 2,
        description: "",
        hotel_id: 1,
        img: ""
    },
    {
        id: 3,
        name: "room 3",
        status: true,
        price: 2500.00,
        max_user: 4,
        description: "",
        hotel_id: 1,
        img: ""
    }
]

// {
//     name: string,
//     description: string,
//     discount: string,
//     received_date: string,
//     pay_day: string,
//     count_user: number,
//     status: boolean,
//     room_id: number,
//     hotel_id: number,
//     users: [
//         {
//             avatar: "",
//             first_name:"Nguyen Van",
//             last_name: "Admin",
//             mobile: "1234567890",
//             sex: "",
//             cmnd: "112233445566",
//             role: "adm",
//             address: "Thai Binh",
//             email: "phucchelsea01@gmail.com",
//             password: "user"
//         }
//     ]
// }