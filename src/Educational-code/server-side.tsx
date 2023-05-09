import 'server-only'
import { supabase } from "../../utils/supabase";


export const revalidate = 0;

async function FetchData() {
    const { data } = await supabase.from('categories').select('id, name')
    return { data }
}

export default async function SSR() {
    const { data } = await FetchData()
    return <pre>{JSON.stringify(data, null, 2)}</pre>
}
