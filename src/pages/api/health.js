export default function health(req, res) {
    res.status(200).json({ "healthy": true })
  }