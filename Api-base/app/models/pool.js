var mysql = require('mysql2');

var poolPrueba2 = mysql.createPool({
    host: 'prueba2.cfyp63gbdono.us-west-1.rds.amazonaws.com',
    user: 'admin',
    password: 'Pruebabd++',
    database: 'prueba2'
});

let queryPrueba2 = function (sql, values) {
    // devolver una promesa
    return new Promise((resolve, reject) => {
        poolPrueba2.getConnection(function (err, connection) {
            if (err) {
                reject(err)
            } else {
                connection.query(sql, values, (err, rows) => {

                    if (err) {
                        reject(err)
                    } else {
                        resolve(rows)
                    }
                    // finaliza la sesión
                    connection.release()
                })
            }
        })
    })
}


module.exports = { queryPrueba2 }