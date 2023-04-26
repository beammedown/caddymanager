import type { NextApiRequest, NextApiResponse } from 'next'
import { MeiliSearch } from 'meilisearch'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    try {
        const client = new MeiliSearch({
            host: 'http://localhost:7700',
            apiKey: 'voQN70FeOEsIgBfwU46rT4CEMZNgbX5mNiZ7HT1j8Ts',
        })
        const index = client.index('rv')
        const params = String(req.query.queries)
        const healt = await client.health()
        res.send(healt)
        const search = (await index.search("")).hits
        res.send("sucess")
        //const earch = search.hits
        //res.status(200).json(earch)
    }

    catch (error) {
        res.status(500).json(error)
    }

}
