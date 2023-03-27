import supabase from "./api/config/supabaseClient";
import { useState } from "react";
const EXTERNAL_DATA_URL = 'https://e4a.live';

function generateSiteMap(movies) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${movies.length >0 && movies
       .map(({ name }) => {
         return `
       <url>
           <loc>${`${EXTERNAL_DATA_URL}/${name.replaceAll(' ','-')}`}</loc>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
    console.log('sitemap')
  // We make an API call to gather the URLs for our site
  let movies = []
  const { data, error } = await supabase
    .from('movies')
    .select()
    
    if(data){
        movies = data
    }
  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(movies);

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;


  