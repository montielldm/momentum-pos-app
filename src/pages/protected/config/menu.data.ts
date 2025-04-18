export interface MenuItem {
    title: string
    url: string
}

export const menu: MenuItem[] = [
    {
        title: "Home",
        url: "/app",
    },
    {
        title: "Tickets",
        url: "/app/tickets",
    },
    {
        title: "Create Ticket",
        url: "/app/tickets/create",
    },
    {
        title: "Restaurant",
        url: "/app/restaurant",
    },
    {
        title: "Products",
        url: "/app/products",

    },
    {
        title: "Customers",
        url: "/app/customers",

    },
    {
        title: "Providers",
        url: "/app/providers",

    },
    {
        title: "Settings",
        url: "/app/settings",

    },
]