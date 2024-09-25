export interface Address {
    street: string;
    number: string;
    neighborhood: string;
    city: string;
    state: string;
}

export interface Event {
    id: number;
    title: string;
    date: string;
    location: string;
    description: string;
    imageUrl: string;
    eventUrl: string;
    address: Address;
}

export const events: Event[] = [
    {
        id: 1,
        title: "Annual Legal Conference",
        date: "2023-10-15",
        location: "São Paulo, Brazil",
        description: "Join us for our annual legal conference featuring top speakers and workshops.",
        imageUrl: "https://via.placeholder.com/300x200",
        eventUrl: "/events/1",
        address: {
            street: "Rua ABC",
            number: "123",
            neighborhood: "Centro",
            city: "São Paulo",
            state: "SP",
        }
    },
    {
        id: 2,
        title: "Workshop on Corporate Law",
        date: "2024-11-05",
        location: "Rio de Janeiro, Brazil",
        description: "A detailed workshop exploring the latest trends and changes in corporate law.",
        imageUrl: "https://via.placeholder.com/300x200",
        eventUrl: "/events/2",
        address: {
            street: "Rua XYZ",
            number: "456",
            neighborhood: "Copacabana",
            city: "Rio de Janeiro",
            state: "RJ",
        }
    },
    {
        id: 3,
        title: "Networking Event",
        date: "2024-11-20",
        location: "Brasília, Brazil",
        description: "An opportunity to network with other legal professionals from around the country.",
        imageUrl: "https://via.placeholder.com/300x200",
        eventUrl: "/events/3",
        address: {
            street: "Avenida Central",
            number: "789",
            neighborhood: "Asa Sul",
            city: "Brasília",
            state: "DF",
        }
    },
    {
        id: 4,
        title: "Legal Tech Symposium",
        date: "2024-12-05",
        location: "Curitiba, Brazil",
        description: "Explore the latest in legal technology at this comprehensive symposium.",
        imageUrl: "https://via.placeholder.com/300x200",
        eventUrl: "/events/4",
        address: {
            street: "Rua das Flores",
            number: "101",
            neighborhood: "Centro",
            city: "Curitiba",
            state: "PR",
        }
    }
];
