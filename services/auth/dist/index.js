import app from "./app.js";
import dontenv from "dotenv";
dontenv.config();
app.listen(process.env.PORT, () => {
    console.log(`Auth service is running on http://localhost:${process.env.PORT}`);
});
