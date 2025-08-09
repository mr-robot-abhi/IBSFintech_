// Simple in-memory rate limiter for chatbot API
interface RateLimitEntry {
  count: number;
  resetTime: number;
}

const rateLimitMap = new Map<string, RateLimitEntry>();

// Rate limit configuration
const RATE_LIMIT_CONFIG = {
  windowMs: 60 * 1000, // 1 minute
  maxRequests: 10, // max 10 requests per minute per IP
  message: 'Too many chat requests. Please wait a moment before sending another message.'
};

export function checkRateLimit(identifier: string): { allowed: boolean; message?: string } {
  const now = Date.now();
  const entry = rateLimitMap.get(identifier);

  if (!entry) {
    // First request from this identifier
    rateLimitMap.set(identifier, {
      count: 1,
      resetTime: now + RATE_LIMIT_CONFIG.windowMs
    });
    return { allowed: true };
  }

  if (now > entry.resetTime) {
    // Reset window
    rateLimitMap.set(identifier, {
      count: 1,
      resetTime: now + RATE_LIMIT_CONFIG.windowMs
    });
    return { allowed: true };
  }

  if (entry.count >= RATE_LIMIT_CONFIG.maxRequests) {
    return { 
      allowed: false, 
      message: RATE_LIMIT_CONFIG.message 
    };
  }

  // Increment counter
  entry.count++;
  rateLimitMap.set(identifier, entry);
  return { allowed: true };
}

// Cleanup old entries periodically - using Array.from to avoid Map iteration issues
setInterval(() => {
  const now = Date.now();
  const entries = Array.from(rateLimitMap.entries());
  
  entries.forEach(([key, entry]) => {
    if (now > entry.resetTime) {
      rateLimitMap.delete(key);
    }
  });
}, 5 * 60 * 1000); // Cleanup every 5 minutes
