import express, {Request, Response} from 'express'
import cors from 'cors'

const app = express();

app.use(cors());

app.use("/", (req: Request, res:Response )=>{
	res.send("Hello It's my first api deploy");
})

app.listen(3000, ()=>{
	console.log("Server runing....");
})