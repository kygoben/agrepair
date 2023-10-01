import type { PageServerLoad } from "./$types";
import { redirect } from "@sveltejs/kit";

export const load: PageServerLoad = async ({ locals: { supabase } }) => {
  let session = await supabase.auth.getSession();

  if (!session) {
    throw redirect(303, "/auth/login");
  }

  console.log(session.data.session?.user.id);
  const uid = session.data.session!.user.id;

  let { data: Users, error } = await supabase
    .from("Users")
    .select("*")
    .eq("id", uid);

	let user = Users![0];

  console.log(Users);

  let { data: User_owns_equipment, error: ownerEquip } = await supabase
    .from("User_repair_contracts")
    .select("*")
    .eq("user_id", uid);

  console.log(User_owns_equipment);

  let { data: User_repair_contracts, error: repairContracts } = await supabase
    .from("User_repair_contracts")
    .select("*")
    .eq("user_id", uid);

  console.log(User_repair_contracts);

  return {
    props: {
      user,
      User_owns_equipment,
      User_repair_contracts,
    },
  };
};
