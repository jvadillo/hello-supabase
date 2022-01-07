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
      console.log(elements);
      const app = document.getElementById("card-grid");
      app.innerHTML = elements;
}

function createReosourceItem(name, description, category, website){
    return `
    <div class="card lg:w-1/3 p-2">
                        <div
                            class="rounded overflow-hidden shadow-lg bg-white transform hover:-translate-y-4 duration-300">
                            <img class="lg:h-48 md:h-36 w-full object-cover object-center"
                                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.turbologo.com%2Fblog%2Fen%2F2019%2F11%2F19084854%2FMercedes-Benz-logo-today.png&f=1&nofb=1"
                                alt="Sunset in the mountains">
                            <div class="px-6 py-4">
                                <div class="pt-2 pb-1">
                                    <span
                                        class="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mr-2 mb-2">#
                                        ${category}</span>
                                </div>
                                <div class="card-title font-bold text-xl mb-2">${name}</div>
                                <p class="text-gray-700 text-base">
                                ${description}
                                </p>
                            </div>
                            <div class="px-6 pt-1 pb-2">
                                <span
                                    class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">#desarrollo-de-software</span>
                                <span
                                    class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">#industrial</span>
                                <span
                                    class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">#electrónica</span>
                            </div>

                            <div class="flex items-center flex-wrap px-6 pt-4 pb-2 mb-4 ">
                                <a href="http://formaciondual.herokuapp.com/companies/2"
                                    class="py-2 px-3 text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline inline-block">Más
                                    Información
                                    <svg class="-mr-1 mb-1 h-4 w-4 inline" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                </a>

                                <a href="${website}"
                                    class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 lg:ml-auto md:ml-0 ml-auto">Visitar
                                    sitio
                                    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                                        fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>

                            </div>
                        </div>
                    </div><!-- FIN CARD -->

    `;
}


leerRecursos();

