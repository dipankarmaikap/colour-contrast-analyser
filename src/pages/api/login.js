export default function Login(req, res) {
  //console.log(req.headers);
  const ip = req.headers["x-real-ip"] || req.connection.remoteAddress;
  res.status(200).json({ name: "John Doe", headers: req.headers, ip });
}
