import app from "./src/app.js";
import dotenv from 'dotenv';
import CarRouter from "./src/routers/CarRouter.js";
import UserRouter from "./src/routers/UserRouter.js";
import AuthRouter from "./src/routers/AuthRouter.js";

dotenv.config();

app.use('/carros', CarRouter);
app.use('/usuarios', UserRouter);
app.use('/auth', AuthRouter);

app.listen(process.env.PORT || 5000, () => {
    console.log('Servidor conectado com sucesso')
});
