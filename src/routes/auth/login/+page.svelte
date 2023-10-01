<script lang="ts">
  import type { PageData } from "../../$types";
  import { goto } from "$app/navigation";

  export let data: PageData;

  let { supabase } = data;
  $: ({ supabase } = data);

  let email = '';
  let password = '';

  const handleSignin = async () => {
    const {data, error} = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) {
      console.log(error);
    } else if (data) {
      goto('/');
    }
  }
</script>

<style>
    .content {
        padding-bottom: 80px; /* Adjust based on your layout */
    }
</style>

<div class="p-4 bg-gray-100 h-full min-h-screen content">
    <div class="mx-auto max-w-screen-sm lg:max-w-screen-md">
        <!-- Login Card -->
        <div class="bg-white rounded-lg shadow-lg p-5">
            <h2 class="text-2xl font-semibold mb-4">Log in to Agrepair</h2>
            <div class="mb-4">
                <label for="email" class="block mb-2 text-sm font-semibold">Email:</label>
                <input type="email" id="email" autocomplete="off" bind:value={email} class="w-full p-2 rounded border shadow-sm" placeholder="Email" />
            </div>
            <div class="mb-4">
                <label for="password" class="block mb-2 text-sm font-semibold">Password:</label>
                <input type="password" id="password" bind:value={password} class="w-full p-2 rounded border shadow-sm" placeholder="Password" />
            </div>
            <button class="w-full py-2 bg-green-500 text-white rounded-md hover:bg-green-600" on:click={handleSignin}>Log In</button>
            <p class="text-center mt-4 text-sm">
                Don't have an account? <a href="/auth/register" class="text-green-600">Sign up</a>.
            </p>
        </div>
    </div>
</div>
