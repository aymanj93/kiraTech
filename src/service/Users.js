export class UsersService {
    static async getUsers() {
        try {
            const response = await fetch('https://randomuser.me/api/?results=50');
            const data = await response.json();
            
            return data.results.map((user, index) => {
                const dateObj = new Date(user.registered.date);
                const day = dateObj.getDate();
                const month = dateObj.toLocaleString('en-US', { month: 'short' });
                const year = dateObj.getFullYear();
                const formattedDate = `${day} ${month} ${year}`;
                
                return {
                    id: 1000 + index,
                    name: `${user.name.first} ${user.name.last}`,
                    gender: user.gender,
                    country: { 
                        name: user.location.country,
                    },
                    thumbnail: user.picture.large,
                    date: formattedDate,
                    email: user.email,
                    verified: Math.random() > 0.5
                };
            });
        } catch (error) {
            console.error('Error fetching customers:', error);
            return [];
        }
    }
} 