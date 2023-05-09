// supabase client needs to be defined and created in a seperate file
// right now I have it on utils/supabase.ts
// maybe we should put it in lib? and delete that supabaseClient file?


// we need to have a component for all of our challenges
// and a component for each challenge seperately
   // probably the same logic for categories and commitments? //

// server component that fetches all the challenges: realTimeServer.tsx
// server component that fetches a single challenge: realTimeServer-fetchById.tsx

// app directory structure:

     // realtime folder:
           // single challenge folder:
                        // <contains : realTimeServer-fetchById.tsx> as page.tsx
           // challenges file:
                        // <page.tsx> that has realTimeServer.tsx code

           // realtime client folder????
              //realTimeClient.tsx as <page.tsx> ?????
