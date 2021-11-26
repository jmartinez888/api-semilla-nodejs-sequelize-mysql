const express = require("express");
const cors = require("cors");
// const { joiRegister } = require("./src/middlewares/core/joiRegister");
// const fileUpload = require("express-fileupload");

const app = express();
const port = process.env.PORT || 3000;
const corsFront = "*"; //process.env.APP_FRONT || '*';

// Header
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", corsFront);
    res.header(
        "Access-Control-Allow-Headers",
        "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
    );
    res.header(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, DELETE"
    );
    res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

// Cors
console.info(`App front: ${corsFront}`);
app.use(
    cors({
        origin: corsFront,
        optionsSuccessStatus: 200,
    })
);

// Directorio Publico
app.use(express.static("public"));

// Lectura y parseo del body
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ limit: "5mb", extended: true }));
// app.use(fileUpload());

// Rutas
app.use("/api", require("./src/routes/index.routes"));
app.use("/api/core", require("./src/routes/core/index"));
// app.use('/api/academy', require('./src/routes/academy'));
// app.use('/api/auth', require('./src/routes/auth'));
// app.use('/api/learning', require('./src/routes/client/index'));
// app.use('/api/forum', require('./src/routes/forum/index'));

// Escuchar peticiones
app.listen(port, () => {
    // const { error, value } = joiRegister.validate({
    //     sName: "sd",
    // });
    // // console.log(error);
    // console.log(error.details[0].message);
    // console.log(value);
    // console.log(`Validar ${value.sName}`);
    console.log(`Servidor corriendo en puerto ${port}`);
});
