const jwt = require ('jsonwebtoken');

module.exports={
    createToken:(payload, exp = '24h') =>  jwt.sign(payload, 'EdoTensei', { 
        //untuk mendapatkand data dari luar pake parameter , parameternya dibuat payload  //sign param 
        expiresIn: exp
        }),

readToken: (req,res,next) => {
        jwt.verify(req.token, 'EdoTensei', (error,decript) => {
            if(error){
            return res.status(401).send({
                success:false,
                message:'Authenticate failed'
            })
        }
   
        req.decript = decript;
        next();
        
        });
    }
}
   