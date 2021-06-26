const { response } = require('express');
const {Pool} = require('pg')

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'Hernanhernan98',
    database: 'firstapi',
    port: '5432'
})

const getUsers = async (req,res)=>{
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM users')
    res.send(response.rows);
}

const getUsersById = async (req,res)=>{
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM users WHERE id = $1', [id])
    res.send(response.rows);
}

const createUsers = async (req,res)=>{
    const {name, email} = req.body;
    pool.query("INSERT INTO  users (name, email) VALUES ($1, $2)", [name, email])
    console.log(response);
    res.json({
        message: "Usser Added Succesfully",
        body: {
            user: {name, email}
        } 
    })
}

const deleteById = async (req,res)=>{
    const id = req.params.id;
    const response = await pool.query('DELETE FROM users WHERE id = $1', [id])
    res.send("Eliminado correctamente");
}

const updateById = async (req,res)=>{
    const id = req.params.id;
    const {name, email} = req.body;
    const response = await pool.query('UPDATE  users SET name = $1, email = $2 WHERE id = $3', [name, email, id])
    res.send("usuario actualizado correctamente");
}

module.exports ={
    getUsers,
    createUsers,
    getUsersById,
    deleteById,
    updateById
}