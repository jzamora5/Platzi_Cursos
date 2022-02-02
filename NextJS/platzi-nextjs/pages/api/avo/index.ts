import { IncomingMessage, ServerResponse } from 'http'
import DB from '@database'

const allAvos = async (request: IncomingMessage, response: ServerResponse) => {
  const db = new DB()
  const allEntries = await db.getAll()
  const length = allEntries.length

  response.statusCode = 200
  response.setHeader('ContentType', 'application/json')
  response.end(JSON.stringify({ length, data: allEntries }))
}

export default allAvos
