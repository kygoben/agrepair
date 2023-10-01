<script lang="ts">
  import type { PageData } from "../../$types";
  export let data: PageData;

  let { supabase } = data;
  $: ({ supabase } = data);
  let name = '';
  let email = '';
  let address = '';
  let password = '';
  let confirmPassword = '';

  const handleRegister = async () => {
    const {data, error} = await supabase.auth.signUp({
      email,
      password
    });

    if (error) {
      console.log(error);
    } else if (data) {
      await supabase
        .from('Users')
        .insert([{
          address,
          name,
          id: data!.user!.id
        }]);
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
        <!-- Register Card -->
        <div class="bg-white rounded-lg shadow-lg p-5">
            <h2 class="text-2xl font-semibold mb-4">Register</h2>
            <div class="mb-4">
                <label for="name" class="block mb-2 text-sm font-semibold">Name:</label>
                <input type="text" id="name" bind:value={name} class="w-full p-2 rounded border shadow-sm" placeholder="Name" />
            </div>
            <div class="mb-4">
                <label for="email" class="block mb-2 text-sm font-semibold">Email:</label>
                <input type="email" id="email" bind:value={email} class="w-full p-2 rounded border shadow-sm" placeholder="Email" />
            </div>
            <div class="mb-4">
                <label for="address" class="block mb-2 text-sm font-semibold">Address:</label>
                <input type="text" id="address" bind:value={address} class="w-full p-2 rounded border shadow-sm" placeholder="Address" />
            </div>
            <div class="mb-4">
                <label for="password" class="block mb-2 text-sm font-semibold">Password:</label>
                <input type="password" id="password" bind:value={password} class="w-full p-2 rounded border shadow-sm" placeholder="Password" />
            </div>
            <div class="mb-4">
                <label for="confirmPassword" class="block mb-2 text-sm font-semibold">Confirm Password:</label>
                <input type="password" id="confirmPassword" bind:value={confirmPassword} class="w-full p-2 rounded border shadow-sm" placeholder="Confirm Password" />
            </div>
            <button class="w-full py-2 bg-green-500 text-white rounded-md hover:bg-green-600" on:click={handleRegister}>Sign Up</button>
            <p class="text-center mt-4 text-sm">
                Already have an account? <a href="/auth/login" class="text-green-600">Log In</a>.
            </p>
        </div>
    </div>
</div>
