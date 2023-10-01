import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ parent }) => {
  const { supabase } = await parent();

  let { data = [], error } = await supabase
    .from('Equipment')
    .select('make,model')

  if (error) {
    console.log(error);
  }

  data = data || [];

  let makes = new Set<string>();
  let models = new Set<string>();

  for (let i = 0; i < data.length; i++) {
    makes.add(data[i].make || '');
    models.add(data[i].model || '');
  }

  return {
    makes: Array.from(makes) as string[],
    models: Array.from(models) as string[]
  }
}
