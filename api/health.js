// api/health.js
module.exports = (req, res) => {
  res.status(200).json({
    status: 'ok',
    service: 'OpenAI to NVIDIA NIM Proxy (Vercel)',
    reasoning_display: false,
    thinking_mode: false
  });
};
