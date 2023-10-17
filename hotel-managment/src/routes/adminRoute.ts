import { MenuItem } from "../types/MenuItem";

export const listSidebarAdmin: MenuItem[] = [
    {
        titleSidebar: "Thống kê",
        key: "statistical",
        url: "statistical",
    },
    {
        titleSidebar: "Lịch sử",
        key: "history",
        url: "history",
    },
    {
        titleSidebar: "Quản lý phòng khách sạn",
        key: "room-management",
        url: "room-management",
    },
    {
        titleSidebar: "Quản lý người dùng",
        key: "user-management",
        url: "user-management",
        children: [
            {
                titleSidebar: "Nhân viên",
                key: "user-management/staff",
                url: "user-management/staff",
            },
            {
                titleSidebar: "Khách hàng",
                key: "user-management/client",
                url: "user-management/client",
            },
        ]
    },
    {
        titleSidebar: "Logout",
        key: "logout",
        url: "logout",
    },
];