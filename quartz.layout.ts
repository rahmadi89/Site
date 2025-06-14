import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
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
  Component.DesktopOnly(Component.Graph()),
  Component.DesktopOnly(Component.Backlinks()),
  Component.MobileOnly(Component.PageTitle()),
  Component.MobileOnly(Component.Darkmode()),
  ],
  left: [
  Component.DesktopOnly(Component.PageTitle()),
  Component.Search(),
  Component.DesktopOnly(Component.Darkmode()),
  Component.DesktopOnly(Component.Explorer()),
  Component.DesktopOnly(Component.TableOfContents()),
  Component.MobileOnly(Component.Backlinks()),
  ],
}
 
// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
 beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
  Component.MobileOnly(Component.PageTitle()),
  Component.MobileOnly(Component.Darkmode()),
  ],
  right: [
  Component.DesktopOnly(Component.PageTitle()),
  Component.Search(),
  Component.DesktopOnly(Component.Darkmode()),
  Component.DesktopOnly(Component.Explorer()),
  ],
}