import { NextApiRequest, NextApiResponse } from 'next';
import connection from '../../conectDataBase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const [rows] = await connection.execute('SELECT 1 + 1 AS solution');
    res.status(200).json({ message: 'Kết nối thành công!', result: rows });
  } catch (error) {
    console.error('Lỗi kết nối:', error);
    res.status(500).json({ message: 'Lỗi kết nối với cơ sở dữ liệu.', error });
  }
}
