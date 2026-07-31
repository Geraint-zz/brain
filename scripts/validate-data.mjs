import fs from 'node:fs';
const read = (path) => JSON.parse(fs.readFileSync(path, 'utf8').replace(/^\uFEFF/, ''));
const sections = read('src/data/sections.json'); const categories = read('src/data/categories.json'); const posts = read('src/data/posts.json');
const sectionSlugs = new Set(sections.map((x) => x.slug)); const categorySlugs = new Set(categories.map((x) => x.slug));
if (sections.length !== sectionSlugs.size || categories.length !== categorySlugs.size) throw new Error('Duplicate section/category slug');
for (const category of categories) if (!sectionSlugs.has(category.section_slug)) throw new Error(`Orphan category ${category.slug}`);
for (const post of posts) if (!categorySlugs.has(post.category_slug) || !sectionSlugs.has(post.section_slug)) throw new Error(`Orphan post ${post.slug}`);
console.log(`DATA_VALIDATION_PASS sections=${sections.length} categories=${categories.length} posts=${posts.length}`);


