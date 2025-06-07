import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
  Component.Comments({
    provider: 'giscus',
    options: {
      // from data-repo
      repo: 'RAhmadi89/Site',
      // from data-repo-id
      repoId: 'R_kgDOOgdC6Q',
      // from data-category
      category: 'Announcements',
      // from data-category-id
      categoryId: 'DIC_kwDOOgdC6c4Cpg69',
    }
  }),
],
  footer: Component.Footer({
    //links: {
    GitHub: "https://github.com/rahmadi89",
    //  "Discord Community": "https://discord.gg/cRFFHYye7t",
    //},
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
  Component.Breadcrumbs(),
  Component.ArticleTitle(),
  Component.ContentMeta(),
  Component.TagList(),
  ],
  right: [
  Component.Graph(),
  Component.Backlinks(),
  Component.PageTitle(),
  Component.Darkmode(),
  ],
  left: [
  Component.PageTitle(),
  Component.Search(),
  Component.Darkmode(),
  Component.Explorer(),
  Component.TableOfContents(),
  ],
}
 
// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
 beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
  Component.PageTitle(),
  Component.Darkmode(),
  ],
  right: [
  Component.PageTitle(),
  Component.Search(),
  Component.Darkmode(),
  Component.Explorer(),
  ],
}