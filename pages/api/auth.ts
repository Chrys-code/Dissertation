
import { NextApiRequest, NextApiResponse } from "next"
import axios from "axios"

export default async (req: NextApiRequest, res: NextApiResponse) => {

  if (req.method === "POST") {

    const { user } = req.body;
    const { firstname, lastname, email, password } = user;
    console.log(firstname, lastname, email, password)

    try {
      axios.post('/api/signup', {
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          firstname: firstname,
          lastname: lastname,
          email: email,
          password: password,
        }
      })
        .then((res) => {
          console.log(res.data)
        })
        .catch((error) => {
          console.error(error)
        })

      res.status(200).json({ user })
    } catch (error) {
      res.status(400).json({ message: error })
    }
  }
}


