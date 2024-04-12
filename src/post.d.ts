declare interface Post {
  slug: string,
  title: string,
  publishDate: Date
}

declare interface PostsByYear extends Object {
  [index: string]: Array<Post>
}