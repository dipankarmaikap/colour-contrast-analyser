export default function Hello(req, res) {
  let { body } = req;
  const ip = req.headers["x-real-ip"] || req.connection.remoteAddress;
  res.status(200).json({ body, ip });
}
