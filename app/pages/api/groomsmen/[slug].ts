import path from 'path';
import { promises as fs } from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {    
    const { slug } = req.query
    //Find the absolute path of the json directory
    const jsonDirectory = path.join(process.cwd(), 'json')
    //Read the json data file data.json
    const fileContents = await fs.readFile(jsonDirectory + '/groomsmen.json', 'utf8')
    //Return the content of the data file in json format
    
    const groomsmen = JSON.parse(fileContents).groomsmen.filter((groom:any) => groom.slug === slug)
    
    res.status(200).json(groomsmen)
}