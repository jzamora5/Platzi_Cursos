import { NextApiRequest, NextApiResponse } from 'next'
import DB from '@database'

const allAvos = async (request: NextApiRequest, response: NextApiResponse) => {
  const db = new DB()

  const id = request.query.id

  const avo = await db.getById(id as string)

  // response.statusCode = 200
  // response.setHeader('ContentType', 'application/json')
  // response.end(JSON.stringify({ data: entry }))

  response.status(200).json(avo)
}

export default allAvos
