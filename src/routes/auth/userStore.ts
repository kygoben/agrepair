import { writable } from "svelte/store";
import type { Writable } from "svelte/store";
import type { User } from "@supabase/supabase-js"; // Import the User type from supabase

// Initialize the currentUser store with an initial value of null
export const currentUser: Writable<User | null> = writable(null);
