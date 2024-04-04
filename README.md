[pondy.life](https://pondy.life) — find everything about pondicherry in one place, without getting lost on google.

Built using — NextJS + TailwindCSS and Supabase

How the code is structured:
1. ContentGrid.js — this file is how the card where the recommendations are displayed
2. Hero.js — here the banner, headline and sharing buttons live
3. Header.js & Footer.js — self explanatory top and bottom most sections of the site
4. Index.js — where everything is put together, here there is a function called as loadData that connects with the Supabase client to populate the data.


How to make your own recommendations page by forking this/cloning this in your page editor
create a .env.local file and add these variables

 
    NEXT_PUBLIC_SUPABASE_URL=YourURLHere 
    NEXT_PUBLIC_SUPABASE_ANON_KEY=YourKeyHere   
     NEXT_PUBLIC_MIXPANEL_TOKEN=Your_Token

You can get the first two from your free [Supabase](https://supabase.com/) account and creating your table. There are two tables
1. categories: id | category_name | emoji
2. items: item_id | name | url | relation
3. the relation colummn should be a foriegn key relation which is basically connecting a category to each item.
4. Don't forget to set policies to "SELECT" for both the tables in supabase.

For [Mixpanel](https://mixpanel.com) you can create a free account and get your token from there.

How to deploy. I used vercel for this
1. You'll need to add your enviroment variables in the settings page on your app to make sure everything works and isn't leaked


Package shoutouts: [react-share-kit](https://github.com/ayda-tech/react-share-kit) 

Please reachout to me via twitter [ybhrdwj](https://x.com/ybhrdwj) or email me at yb@yashbhardwaj.com

Don't forget to have fun!

