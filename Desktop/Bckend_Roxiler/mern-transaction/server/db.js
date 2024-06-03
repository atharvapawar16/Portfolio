const mongoose = required('mongoose');


const connectdb = async()=>{

    try {
        
        mongoose.connect('mongodb://127.0.0.1:27017/transactions', {
            useNewUrlParser: true ,

        })

        console.log('MongoDb Connected');
        
    } catch (error) {

        console.error(error.message);
        process.exit(1);
        
    }
 
};

export default connectdb;