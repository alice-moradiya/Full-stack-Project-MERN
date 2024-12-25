import mongoose from "mongoose";

const bookSchema =mongoose.model({
    name: String,
    price: Number,
    category: String,
    image: String,
    titile: String,
})

const Book = mongoose.model("Book", bookSchema);

export default Book;