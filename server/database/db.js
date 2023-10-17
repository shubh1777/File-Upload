import mongoose from 'mongoose';

const DbConnection = async ()=> {
    const MONODB_URI=`mongodb://sr766368:Shubham@ac-xgnudp4-shard-00-00.zfhul2y.mongodb.net:27017,ac-xgnudp4-shard-00-01.zfhul2y.mongodb.net:27017,ac-xgnudp4-shard-00-02.zfhul2y.mongodb.net:27017/?ssl=true&replicaSet=atlas-yyfsln-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(MONODB_URI,{ useNewUrlParser: true});
        console.log('db connects successfully');
    }catch(error){
        console.error('error while connecting database',error.message);
    }
}

export default DbConnection;