const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MTUwOTI2NiwiZXhwIjoxOTU3MDg1MjY2fQ.airoE5CDoDD1puSdESDXj_axMhagx2FucPk2BIShuFc'
const SUPABASE_URL = "https://gqpoedayztfotgcdrhua.supabase.co"

const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

async function leerRecursos() {

    let { data: recursos, error } = await _supabase
    .from('recursos')
    .select()

    console.log(recursos);
    recursos.forEach((recurso) => {
        console.log(recurso.name);
        let elements = "";
        elements += createReosourceItem(
          recurso.name,
          recurso.description,
          recurso.category,
          recurso.website);
      });
      /*console.log(elements);
      const app = document.getElementById("elements");
      app.innerHTML = elements;*/
}

function createReosourceItem(name, description, category, website){
    return `
    <div class="p-4 md:w-full">
        <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left border border-gray-200 p-6 rounded-lg">
          <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/500x500">
          <div class="flex-grow sm:pl-8">
            <h2 class="title-font font-medium text-lg text-gray-900">${titulo}</h2>
            <h3 class="text-gray-500 mb-3">${categoria}</h3>
            <p class="mb-4">${descripcion}</p>
            
            <a href="${url}" class="text-indigo-500 inline-flex items-center mt-3">Visitar enlace
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
          </div>
        </div>
      </div>
    `;
}

}

leerRecursos();

