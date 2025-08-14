// Simple in-memory rate limiter for Netlify Functions
// Note: In production, you might want to use Redis or another persistent store

const rateLimitStore = new Map();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 10; // 10 requests per minute

function checkRateLimit(clientIP) {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW;
  
  // Get existing requests for this IP
  const requests = rateLimitStore.get(clientIP) || [];
  
  // Filter out old requests outside the current window
  const recentRequests = requests.filter(timestamp => timestamp > windowStart);
  
  // Check if limit exceeded
  if (recentRequests.length >= MAX_REQUESTS_PER_WINDOW) {
    const oldestRequest = Math.min(...recentRequests);
    const timeUntilReset = RATE_LIMIT_WINDOW - (now - oldestRequest);
    
    return {
      allowed: false,
      message: `Rate limit exceeded. Please try again in ${Math.ceil(timeUntilReset / 1000)} seconds.`,
      timeUntilReset
    };
  }
  
  // Add current request
  recentRequests.push(now);
  rateLimitStore.set(clientIP, recentRequests);
  
  // Clean up old entries to prevent memory leaks
  if (rateLimitStore.size > 1000) {
    const oldestIP = Array.from(rateLimitStore.entries())
      .sort(([, a], [, b]) => Math.min(...a) - Math.min(...b))[0];
    if (oldestIP) {
      rateLimitStore.delete(oldestIP[0]);
    }
  }
  
  return {
    allowed: true,
    remaining: MAX_REQUESTS_PER_WINDOW - recentRequests.length
  };
}

module.exports = {
  checkRateLimit
};
