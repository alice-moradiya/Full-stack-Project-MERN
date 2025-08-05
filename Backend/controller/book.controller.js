import Book from '../model/book.model.js'

export const getBook = async (req, res) => {
    try {
        let book = await Book.find()
        
        // If no books exist, add sample data. extra
        if (book.length === 0) {
            const sampleBooks = [
                {
                    name: "JavaScript Fundamentals",
                    price: 29.99,
                    category: "Programming",
                    image: "https://picsum.photos/300/200?random=1",
                    title: "Learn JavaScript from scratch"
                },
                {
                    name: "React Development",
                    price: 39.99,
                    category: "Programming",
                    image: "https://picsum.photos/300/200?random=2",
                    title: "Master React framework"
                },
                {
                    name: "Node.js Backend",
                    price: 0,
                    category: "Free",
                    image: "https://picsum.photos/300/200?random=3",
                    title: "Build backend with Node.js"
                },
                {
                    name: "MongoDB Database",
                    price: 24.99,
                    category: "Database",
                    image: "https://picsum.photos/300/200?random=4",
                    title: "Learn MongoDB fundamentals"
                },
                {
                    name: "Web Development",
                    price: 0,
                    category: "Free",
                    image: "https://picsum.photos/300/200?random=5",
                    title: "Complete web development course"
                }
            ];
            
            await Book.insertMany(sampleBooks);
            book = await Book.find();
        }
        // extra til here
        
        res.status(200).json(book)
    } catch (error) {
        console.log("error ", error)
        res.status(500).json({ message: "Server Error" })
    }

}