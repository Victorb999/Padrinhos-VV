import path from 'path'
import { promises as fs } from 'fs'
import { Groomsmen } from './types'

export async function getPadrinhos(): Promise<Groomsmen> {
  //Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), 'json')
  //Read the json data file data.json
  const fileContents = await fs.readFile(
    jsonDirectory + '/groomsmen.json',
    'utf8'
  )
  //Return the content of the data file in json format
  return JSON.parse(fileContents)
}
