export default async function handler(req: any, res: any) {
  if (req.method === "POST") {
    const data = req.body;
    // Perform server-side logic here (e.g., database operations, API calls)
    // Return the result or handle the response accordingly
    return res.status(200).json({ success: true, data });
  } else {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
}
