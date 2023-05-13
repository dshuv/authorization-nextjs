import {users} from "@/pages/api/data/users";

export default function handler(req: any, res: any) {
  if (req.method === 'GET') {
    res.status(200).json(users)
  };
}