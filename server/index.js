import express from 'express';
import router from './routes/routes.js';
import cors from 'cors';
import DbConnection from './database/db.js';

const app=express();

app.use(cors(
  {
        origin:["https://file-upload-v.vercel.app"],
        methods:["POST","GET"],
        credentials:true
    }
));
app.use('/',router);

const PORT=8000;

DbConnection();
app.listen(PORT, ()=> console.log(`server is running on PORT ${PORT}`));
