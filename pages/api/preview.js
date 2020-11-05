export default function preview(req, res) {
  res.setPreviewData({
    post: {
      id: '123132',
    },
  })
  res.end()
}