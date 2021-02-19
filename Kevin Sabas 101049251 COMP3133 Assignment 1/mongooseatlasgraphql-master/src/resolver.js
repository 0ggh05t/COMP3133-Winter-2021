import { Dog } from "./models/hotel";

export const resolvers = {
    Query: {
        helloWorld:() => 'hello world',
        hotels: () => hotel.find()

    },
    Mutation: {
        createHotel: async(_, { name }) => {
            const hotel = new Hotel({ name });
            await hotel.save();
            return hotel;
        }
    }
}