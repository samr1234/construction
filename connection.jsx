const mongoose = require('mongoose');

const connection = mongoose.connect('mongodb+srv://harsh31:harsh31@cluster0.hsktdak.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    
}).then(() => {
    console.log('Database connected');
}
).catch((err) => {
    console.log(err);
}
);

module.exports = connection;