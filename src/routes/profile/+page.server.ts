import type { PageServerLoad } from "./$types";
import { redirect } from "@sveltejs/kit";

export const load: PageServerLoad = async ({ locals: { supabase } }) => {
  let session = await supabase.auth.getSession();

  if (!session) {
    throw redirect(303, "/auth/login");
  }

  const uid = session.data.session!.user.id;

  let { data: Users } = await supabase
    .from("Users")
    .select("*")
    .eq("id", uid);

	let user = Users![0];

  let { data: User_owns_equipment } = await supabase
    .from("User_owns_equipment")
    .select("equipment_id(*)")
    .eq("user_id", uid);

  let { data: User_repair_contracts } = await supabase
    .from("User_repair_contracts")
    .select("*, repair_id(*, equipment_id(*)), contractor_id(*)")
    .eq("user_id", uid);

  const url = await supabase.storage.from("pics").getPublicUrl(uid + ".jpg").data.publicUrl;

  return {
    props: {
      uid,
      user,
      User_owns_equipment,
      User_repair_contracts,
	  url
    },
  };
};
