import express, {Express,Request, Response} from 'express'
import "reflect-metadata"
import path from 'path'
import  cors from 'cors'
import * as bodyParser from 'body-parser'
import * as helmet from 'helmet'
import  multer , {} from 'multer'
import { Routes } from "./routes"
import { AppDataSource } from "./data-source"
import { Utilisateur } from './entity/Utilisateur'

type destinationCallback = (error:Error | null, destination:string)=>void
type filenameCallback = (error:Error | null, filename:string)=> void
type filenameback = (error:Error | null, filename:boolean | Error)=> void
AppDataSource.initialize().then(async ()=> {
    const app = express()
    app.use(cors())
    
    const port = 8000
    const storage = multer.diskStorage({
        destination: (req:Request,file:Express.Multer.File,cb:destinationCallback)=>  {
            cb(null,"./uploads");},
        filename: (req:Request,file:Express.Multer.File,cb:filenameCallback)=> {
            console.log(file)
            cb(null, file.originalname)
        }
        
    });
    const isImg = (req:Request,file:Express.Multer.File,cb:filenameback)=> {
      if(file.mimetype.startsWith('image')) {
        cb(null,true)
      }
      else {
        cb(null,Error('Only image required'))
      }
    }
    const upload = multer({storage:storage,fileFilter:isImg})
  app.post('/profil',upload.single('data'), async (req:Request,res:Response)=> {
   

  const {fullname} = req.body  
  const {filename} = req.file
     const fileRepository = AppDataSource.getRepository(Utilisateur)
    
     
     await fileRepository.save({fullname:fullname,data:filename})
    console.log(req.file)

    res.send({message: 'Your profil is updated'})
  }) 
  app.use('/profil', express.static(path.join(__dirname, '../uploads')));  
  
  app.get('/profil',async (req:Request,res:Response)=> {
    const fileRepository = AppDataSource.getRepository(Utilisateur)
     const allProfil = await fileRepository.find()
    res.send(allProfil)
  })
  app.listen(port,()=> console.log('Your server is running'))
  console.log(path.join(__dirname, '../uploads'))
  
})
