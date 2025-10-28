// ICONS
import { MdHome, MdPages } from "react-icons/md"

export default (S: any) =>
  S.list()
    .title("SYBIL.GG")
    .items([
        S.listItem()
        .title("Front page")
        .icon(MdHome)
        .child(S.editor().id("front-page").schemaType("frontPage").documentId("front-page")),
        S.divider(),
      S.listItem()
        .title("Pages")
        .icon(MdPages)
        .child(S.documentList().title("Pages").filter('_type == "page"').schemaType("page")),
    ])
