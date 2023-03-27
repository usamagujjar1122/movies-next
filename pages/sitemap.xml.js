import supabase from "./api/config/supabaseClient";

const EXTERNAL_DATA_URL = 'https://e4a.live';

function generateSiteMap(movies) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>https://jsonplaceholder.typicode.com</loc>
     </url>
     <url>
       <loc>https://jsonplaceholder.typicode.com/guide</loc>
     </url>
     ${movies && movies
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
  // We make an API call to gather the URLs for our site
  const{movies,setmovies} = useState()
  const { data, error } = await supabase
    .from('movies')
    .select()
    
    if(data){
        setmovies(data)
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