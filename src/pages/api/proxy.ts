import type { NextApiRequest, NextApiResponse } from 'next';
import { createProxyMiddleware } from 'http-proxy-middleware';
import { NextApiHandler } from 'next';

// Create proxy middleware
const apiProxy = createProxyMiddleware({
  target: 'http://localhost:20002',
  changeOrigin: true,
  pathRewrite: {
    '^/api/proxy': '',
  },
  onProxyRes: function(proxyRes) {
    proxyRes.headers['Access-Control-Allow-Origin'] = '*';
    proxyRes.headers['Access-Control-Allow-Methods'] = 'GET,HEAD,PUT,PATCH,POST,DELETE';
    proxyRes.headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization';
  },
});

// Convert to NextJS API handler
const handler: NextApiHandler = (req, res) => {
  // Disable body parser
  if (!('skipBodyParser' in req)) {
    // @ts-ignore
    req.skipBodyParser = true;
  }
  
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).json({});
    return;
  }
  
  // @ts-ignore - the http-proxy-middleware types don't match NextJS types exactly
  return apiProxy(req, res);
};

export default handler;

// Disable body parsing, as it's handled by http-proxy-middleware
export const config = {
  api: {
    bodyParser: false,
  },
};