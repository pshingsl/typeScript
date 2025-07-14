//서버 엔트리포인트
import express, { Request, Response } from 'express'
import cors from 'cors';

import userRouter from './routes/user.route'

const app = express();
const PORT : number = 4000;

app.use(express.json())
app.use(cors())
app.use('/users', userRouter)

app.get('/', (req : Request, res: Response) => {
  res.send("Hello TypeScript + Express")
})

app.listen(PORT, ()=> {
  console.log(`Server running ${PORT} port`)
})