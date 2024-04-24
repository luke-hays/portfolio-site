declare interface Post {
  slug: string,
  title: string,
  publishDate: Date,
  publish?: Boolean
}

declare interface PostsByYear {
  [index: string]: Array<Post>
}