declare interface Post {
  slug: string,
  title: string,
  publishDate: Date
}

declare interface PostsByYear {
  [index: string]: Array<Post>
}