const { response } = require('express');
const { Pool } = require('pg');

const pool = new Pool({
    host: 'ec2-35-170-85-206.compute-1.amazonaws.com',
    user: 'ezbtdllfoqqkzj',
    password: 'f71917cae0d1776912f9a393e6af18d276a7d14a38d75a8e6f82ad89a1110d4e',
    database: 'd4rmgb5lg3lms3',
    port: '5432'
});

const getUsers = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM users');
    res.send(response.rows);
};

const getUsersById = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    res.send(response.rows);
};

const createUsers = async (req, res) => {
    const { name, email } = req.body;
    pool.query("INSERT INTO  users (name, email) VALUES ($1, $2)", [name, email]);
    console.log(response);
    res.json({
        message: "Usser Added Succesfully",
        body: {
            user: { name, email }
        }
    });
};

const deleteById = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('DELETE FROM users WHERE id = $1', [id]);
    res.send("Eliminado correctamente");
};

const updateById = async (req, res) => {
    const id = req.params.id;
    const { name, email } = req.body;
    const response = await pool.query('UPDATE  users SET name = $1, email = $2 WHERE id = $3', [name, email, id]);
    res.send("usuario actualizado correctamente");
};

module.exports = {
    getUsers,
    createUsers,
    getUsersById,
    deleteById,
    updateById
};