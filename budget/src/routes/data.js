const {Router} = require("express");
const pool = require("../data/config")
const router = Router();

//inicio
router.get('/', (req, res) => {
    res.json({"tittle":"inicio"});
});


//add data
router.post('/data', (req, res) => {
    pool.query('INSERT INTO data SET ?', req.body, (error, result) => {

        //post petition
        /*curl -d "nombre=eric &apellido= esparza &email=eric@gmail.com &usuario=heregor &contraseña=x3cdgc6x &cStatus_idcStatus=1" http://localhost:3002/users*/
        
        if (error) throw error;
 
        
    });
});

// data income
router.get('/data/budget/:id', (req, res) => {
    const id = req.params.id;
    pool.query("SELECT * FROM data WHERE validation = ?",id, (error, result) => {
        if (error) throw error;
 
        res.send(result);
    });
});
// data income
router.get('/data/budget', (req, res) => {
    
    pool.query("SELECT * FROM data ", (error, result) => {
        if (error) throw error;
 
        res.send(result);
    });
});

// Update an existing user
router.put('/data/:id', (req, res) => {
    const id = request.params.id;
    
    //put petition
    /*curl -X PUT -d "nombre=eric &apellido=esponja &email=eric@gmail.com 
    &contraseña=x3cdgc6x &cStatus_idcStatus=1" http://localhost:3002/users/8*/

    pool.query('UPDATE data SET ? WHERE idData = ?', [req.body, id], (error, result) => {
        if (error) throw error;
 
        res.send('User updated successfully.');
    });
});


module.exports = router;