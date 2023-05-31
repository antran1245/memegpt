import type { NextApiRequest, NextApiResponse } from 'next'
import emoji from "emojilib"

type Data = {
    dataset: any
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json({ dataset: Object.keys(emoji) })
}
