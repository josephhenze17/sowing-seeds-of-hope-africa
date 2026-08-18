import { useEffect } from 'react'
import { SITE } from './site'

type PageMeta = {
  title: string
  description: string
  path: string
}

export function usePageMeta({ title, description, path }: PageMeta) {
  useEffect(() => {
    document.title = title

    const canonicalHref = `${SITE.url}${path}`
    const pairs: Array<[string, string]> = [
      ['name', 'description'],
      ['property', 'og:title'],
      ['property', 'og:description'],
      ['property', 'og:url'],
      ['name', 'twitter:title'],
      ['name', 'twitter:description'],
    ]

    const values: Record<string, string> = {
      description,
      'og:title': title,
      'og:description': description,
      'og:url': canonicalHref,
      'twitter:title': title,
      'twitter:description': description,
    }

    for (const [attr, key] of pairs) {
      const selector = `meta[${attr}="${key}"]`
      const node = document.head.querySelector(selector) ?? document.createElement('meta')
      node.setAttribute(attr, key)
      node.setAttribute('content', values[key] ?? description)
      if (!node.parentElement) document.head.appendChild(node)
    }

    let link = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
    if (!link) {
      link = document.createElement('link')
      link.rel = 'canonical'
      document.head.appendChild(link)
    }
    link.href = canonicalHref
  }, [title, description, path])
}
