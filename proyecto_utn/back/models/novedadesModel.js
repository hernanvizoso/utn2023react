var pool = require('./bd');
// var mysql = require('mysql');

async function getNovedades() {
    try {
        var query = 'select * from novedades order by id asc';
        var rows = await pool.query(query);
        return rows;
    } catch (error) {
        console.log(error);
    }
}

async function insertNovedades(obj) {
    try {
        var query = 'insert into novedades set ?';
        var rows = await pool.query(query, [obj])
        return rows;
    } catch (error) {
        console.log(error);
        throw (error);

    }
}

async function deleteNovedadesById(id){
    var query = 'delete from novedades where id = ?';
    var rows = await pool.query(query, [id]);
    return rows;
}

async function getNovedadesById(id) {
    try {
        var query = 'select * from novedades where id = ?';
        var rows = await pool.query(query, [id]);
        console.log(rows);
        return rows[0];
    } catch (error) {
        console.log(error);
    }
}

async function modificarNovedadesById(obj, id){
    try {
        var query = 'update novedades set ? where id= ?';
        var rows = await pool.query(query,[obj,id]);
        return rows;
    } catch (error) {
        console.log(error);
        throw(error);
    }
}

module.exports = { getNovedades, insertNovedades, deleteNovedadesById, getNovedadesById, modificarNovedadesById };