const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MTUwOTI2NiwiZXhwIjoxOTU3MDg1MjY2fQ.airoE5CDoDD1puSdESDXj_axMhagx2FucPk2BIShuFc'
const SUPABASE_URL = "https://gqpoedayztfotgcdrhua.supabase.co"

const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

async function leerRecursos() {

    let { data: recursos, error } = await _supabase
    .from('recursos')
    .select()

    console.log(recursos);

}

leerRecursos();

