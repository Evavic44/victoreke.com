import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getProfile() {
  return client.fetch(
    groq`*[_type == "profile"]{
      _id,
      fullName,
      headline,
      profileImage {
        "image": asset->url,
        "lqip": asset->metadata.lqip,
        alt,
      },
      shortBio,
      location,
      fullBio,
      email,
      "resumeURL": resumeURL.asset->url,
      socialLinks,
      usage
    }`
  );
}

export async function getJob() {
  return client.fetch(
    groq`*[_type == "job"] | order(_createdAt desc){
      _id,
      name,
      jobTitle,
      "logo": logo.asset->url,
      url,
      description,
      startDate,
      endDate,
    }`
  );
}

export async function getProjects() {
  return client.fetch(
    groq`*[_type == "project"] | order(_createdAt desc){
      _id, 
      name,
      "slug": slug.current,
      tagline,
      "logo": logo.asset->url,
    }`
  );
}

export async function getSingleProject(slug: string) {
  return client.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      name,
      projectUrl,
      coverImage {
        "image": asset->url,
        "lqip": asset->metadata.lqip,
        alt,
      },
      tagline,
      description
    }`,
    { slug }
  );
}

// Reusable post fields
const postField = groq`
  _id,
  _createdAt,
  title,
  "slug": slug.current,
  description,
  coverImage {
    "image": asset->url,
    "lqip": asset->metadata.lqip,
    alt,
  },
  featured,
  isPublished
`;

export async function getPosts() {
  return client.fetch(
    groq`*[_type == "Post"] | order(_createdAt desc){
      ${postField},
      date,
      "author": author-> {
        name, 
        photo, 
        twitterUrl
      },
      body,
    }`
  );
}

export async function getFeaturedPosts() {
  return client.fetch(
    groq`*[_type == "Post" && featured == true] {
      ${postField}
    }`
  );
}

export async function getSinglePost(slug: string) {
  return client.fetch(
    groq`*[_type == "Post" && slug.current == $slug][0]{
      ${postField},
      _updatedAt,
      canonicalLink,
      date,
      tags,
      "author": author-> {
        name, 
        photo {
          "image": asset->url,
          alt
        }, 
        twitterUrl
      },
      body,
    }`,
    { slug }
  );
}

export async function getHeroes() {
  return client.fetch(
    groq`*[_type == "heroe"] | order(_createdAt asc) { _id, _createdAt, name, url, met }`
  );
}
