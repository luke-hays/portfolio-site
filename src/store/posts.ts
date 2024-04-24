import {atom} from 'nanostores';
import {getCollection} from 'astro:content';

const blogPosts = await getCollection('blog');

function getLatestPosts() {
  const sortedPosts: Array<Post> = [];

  blogPosts.forEach(post => {
    const postData = {
      slug: post.slug,
      title: post.data.title,
      publishDate: post.data.publishDate,
      publish: post.data.publish
    };

    sortedPosts.push(postData);
  });

  sortedPosts
    .sort((a, b) => {
      if (a.publishDate < b.publishDate) return 1;
      if (a.publishDate > b.publishDate) return -1;
      return 0;
    });

  return sortedPosts.filter(p => p.publish).slice(0, 5);
}

function getPostsByYear() {
  const postsByYear: PostsByYear = {};

  blogPosts.forEach(post => {
    if (!post.data.publish) return;

    const postYear = post.data.publishDate.getFullYear().toString();

    if (!Object.hasOwn(postsByYear, postYear)) {
      postsByYear[postYear] = [];
}

    postsByYear[postYear].push({
      title: post.data.title, 
      slug: post.slug, 
      publishDate: post.data.publishDate
    });
});

  return postsByYear;
}

export const latestPosts = atom(getLatestPosts());
export const posts = atom(getPostsByYear());
