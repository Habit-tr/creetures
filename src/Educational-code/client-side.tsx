'use client'
import { useEffect, useState } from "react"
import { supabase } from "../../utils/supabase"

export default function DataFetching() {

    const [data, setData] = useState<any>(null)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(()=> {
        const getData = async ()=> {
            const {data: supabaseData , error} = await supabase.from('categories').select('id, name')
            setLoading(false)
            setData(supabaseData)
        }
        getData();
    },[])
  return loading ? (
    <p>Loading...</p>
  ) : <pre>{JSON.stringify(data, null, 2)}</pre>
}



/////////// Making the same data fetching, but with the use hook //////////////////

// import { use } from "react"

// const getData = async ()=> {
//     const data = await fetch('https://xrinzjsqsfarjyupbckx.supabase.co', { cache: 'no-store' })
//     return { data }
// }

// export default function DataFetching(){
//     const  data  = use(getData())
//     return <pre>{JSON.stringify(data, null, 2)}</pre>
// }
