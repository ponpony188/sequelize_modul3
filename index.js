const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 2000;
const express = require('express');
const app = express();
const cors = require('cors');
const bearerToken = require('express-bearer-token');
//mengambil token dari header. panggil request token 
app.use(cors());
//yang mengelola akses database admin. akses buat Front End
//tingkat lanjut membatasi domain mana yang mengakses tersebut. waitlist (boleh mengakses API itu) dan blacklist (gaboleh mengakses domain API)
app.use(express.json());
app.use(bearerToken());

// ROUTING
const userRouter = require("./src/routers/userRouter");

app.use("/user", userRouter);

// ERROR-HANDLING
app.use((error, request, response, next) => {
    if(error){
        return response.status(500).send(error)
    }
}); 

app.get('/',(req,res)=>{
    res.status(200).send('<h1>WELCOME TO API</h1>')
});

app.listen(PORT, () => console.log(`Running API ${PORT}`));