const { default: mongoose } = require("mongoose")

const dbConnect = () => {
    try {
        const conn = mongoose.connect(process.env.MONGODB_URL)
        console.log('Database connected succesfully');
    } catch(e) {
        console.log('Database error');
        throw new Error(e);
        
    }
}

module.exports = dbConnect;