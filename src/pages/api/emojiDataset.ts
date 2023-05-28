import type { NextApiRequest, NextApiResponse } from 'next'
import emoji from "emojilib"

type Data = {
    name: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    console.log(Object.keys(emoji), Object.keys(emoji).length)
    res.status(200).json({ name: 'John Doe' })
}
