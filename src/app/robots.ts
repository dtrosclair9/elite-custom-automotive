import type { MetadataRoute } from 'next'

// Explicitly allowlist AI crawlers/agents alongside the blanket rule so we're
// eligible to be cited inside AI answers (ChatGPT, Perplexity, Gemini, Claude,
// Applebot/Apple Intelligence, etc.), not just ranked beneath them.
const aiBots = [
  'GPTBot',
  'ChatGPT-User',
  'OAI-SearchBot',
  'Google-Extended',
  'GoogleOther',
  'PerplexityBot',
  'Perplexity-User',
  'ClaudeBot',
  'Claude-Web',
  'anthropic-ai',
  'CCBot',
  'Applebot',
  'Applebot-Extended',
  'Bytespider',
  'Amazonbot',
  'cohere-ai',
  'Meta-ExternalAgent',
  'Meta-ExternalFetcher',
  'YouBot',
  'Diffbot',
  'DuckAssistBot',
  'MistralAI-User',
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      ...aiBots.map((userAgent) => ({ userAgent, allow: '/' })),
    ],
    sitemap: 'https://elitecustomauto.co/sitemap.xml',
  }
}
