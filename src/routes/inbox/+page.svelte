<script lang="ts">
    import Navbar from "$lib/components/Navbar.svelte";
    import type { PageData } from "../../../.svelte-kit/types/src/routes/$types";
    import { currentUser } from "../auth/userStore";
    export let data: PageData;

    let { supabase } = data;
    $: ({ supabase } = data);

    type Message = {
        sender: string;
        content: string;
    };

    type Conversation = {
        id: number;
        name: string;
        avatar: string;
        latestMessage: string;
        messages: Message[];
        user: User;
    };

    type User = {
        name: string;
        address: string;
        id: string;
        created_at: string;
    }
    const currUser: User = $currentUser as unknown as User;

    let selectedConversation: Conversation | null = null;

    // Sample data
    let conversations: Conversation[] = [
        {
            id: 1,
            name: "John Doe",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDwmG52pVI5JZfn04j9gdtsd8pAGbqjjLswg&usqp=CAU",
            latestMessage: "I'll be there around 3pm, hope that's fine?",
            messages: [
                { sender: "user", content: "Hello John! We were discussing a repair for my tractor." },
                { sender: "John Doe", content: "Ah, yes! I remember. Would tomorrow work for you?" },
                { sender: "user", content: "Tomorrow sounds perfect. Let me know your preferred time." },
                { sender: "John Doe", content: "I'll be there around 3pm, hope that's fine?" }
            ],
            user: {
                name: "lol",
                address: "lol@email.com",
                id: "4",
                created_at: "x"
            }
        },
        {
            id: 2,
            name: "Anna Smith",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDwmG52pVI5JZfn04j9gdtsd8pAGbqjjLswg&usqp=CAU",
            latestMessage: "Sure, I'll send the invoice tonight.",
            messages: [
                { sender: "user", content: "Hey Anna, great job on the combine harvester!" },
                { sender: "Anna Smith", content: "Thank you! I'm glad you're satisfied with the repair." },
                { sender: "user", content: "Could you please send the invoice for the repair?" },
                { sender: "Anna Smith", content: "Sure, I'll send the invoice tonight." }
            ],
            user: {
                name: "lol",
                address: "lol@email.com",
                id: "4",
                created_at: "x"
            }
        },
        {
            id: 3,
            name: "Mike Harrison",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDwmG52pVI5JZfn04j9gdtsd8pAGbqjjLswg&usqp=CAU",
            latestMessage: "Yes, that's included in our services.",
            messages: [
                { sender: "user", content: "Mike, does your repair service cover hydraulic issues?" },
                { sender: "Mike Harrison", content: "Absolutely. Are you facing an issue with a specific equipment?" },
                { sender: "user", content: "Yes, my backhoe loader has been acting up. Do you do on-site inspections?" },
                { sender: "Mike Harrison", content: "Yes, that's included in our services." }
            ],
            user: {
                name: "lol",
                address: "lol@email.com",
                id: "4",
                created_at: "x"
            }
        },
        {
            id: 4,
            name: "Sophie Turner",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDwmG52pVI5JZfn04j9gdtsd8pAGbqjjLswg&usqp=CAU",
            latestMessage: "I've booked you for Thursday.",
            messages: [
                { sender: "user", content: "Sophie, I heard you're the best in town for combine repairs." },
                { sender: "Sophie Turner", content: "Thank you for the compliment! How can I assist you?" },
                { sender: "user", content: "My combine has been producing a weird noise. Can you take a look?" },
                { sender: "Sophie Turner", content: "Definitely! I have an opening on Thursday, does that work for you?" },
                { sender: "user", content: "Perfect, see you then!" },
                { sender: "Sophie Turner", content: "I've booked you for Thursday." }
            ],
            user: {
                name: "lol",
                address: "lol@email.com",
                id: "4",
                created_at: "x"
            }
        }
    ];


    let showMessages: boolean = false;
    let showAddChatPage: boolean = false;
    let searchUser = '';
    let searchResults: User[] = [];

    function selectConversation(convo: Conversation) {
        selectedConversation = convo;
        showMessages = true;
    }

    function backToList() {
        showMessages = false;
    }

    function openAddChatPage() {
        showAddChatPage = true;
    }

    function backToConversations() {
        showAddChatPage = false;
    }

    async function searchUsersByText() {
        // Perform a Supabase query to search for users by text
        const { data, error } = await supabase
            .from('Users')
            .select('*')
            .ilike('name', `%${searchUser}%`);

        if (error) {
            console.error('Error searching for users:', error);
        } else {
            // Update the searchResults variable with the search results
            searchResults = data;
        }
    }


    function startChatWithUser(user: User) {
        // Implement the logic to start a chat with the selected user here.
        // You can add the selected user to your list of conversations or perform any other necessary actions.
        searchUser = '';
        conversations.push({
            id: conversations[conversations.length - 1].id + 1,
            name: user.name,
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDwmG52pVI5JZfn04j9gdtsd8pAGbqjjLswg&usqp=CAU",
            latestMessage: "",
            messages: [],
            user: user
        })
    }

    let newMessage: string = '';  // <-- For tracking the new message input

    function sendMessage() {
        if (newMessage.trim() && selectedConversation) {
            if (currUser) {
                selectedConversation.messages.push({
                    sender: currUser.name,
                    content: newMessage.trim()
                });
                selectedConversation.latestMessage = newMessage.trim();
                newMessage = '';
            }
        }
    }
</script>

<style>
    .content {
        padding-bottom: 80px; /* Adjust based on the height of the navbar */
    }

    /* Style for the "Back to Conversations" button */
    .back-button {
        display: inline-block;
        padding: 0.5rem 1rem;
        color: white;
        border: none;
        cursor: pointer;
    }

    .back-button:hover {
        background-color: #449e67; /* Darker green on hover */
    }

    .message-avatar {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        object-fit: cover;
    }
</style>

<div class="p-4 bg-gray-100 h-full min-h-screen content">
    <div class="mx-auto max-w-screen-sm lg:max-w-screen-lg">
        {#if showMessages}
            <button class="mb-4 back-button rounded-full bg-green-500" on:click={backToList}>Back to Conversations</button>
            <!-- Message Details in a Card Style -->
            <div class="bg-white rounded-lg shadow-lg p-5 mb-5">
                
                <h2 class="text-xl font-bold mb-4">{selectedConversation.name}</h2>
                {#each selectedConversation.messages as message}
                    <div class={`mb-3 ${message.sender === currUser.name ? 'text-right flex flex-row-reverse items-start' : 'text-left flex flex-row items-start'}`}>
                        <img class="message-avatar ml-3 mr-3 m-2" src={selectedConversation.avatar} alt="{message.sender} avatar" />
                        <p class={`inline-block p-2 mb-6 rounded-lg shadow-md ${message.sender === currUser.name ? 'bg-green-500 text-white' : 'bg-white'}`}>
                            {message.content}
                        </p>
                    </div>
                {/each}
            </div>
            <!-- New Message Input UI -->
            <div class="bg-white rounded-lg shadow-lg p-5 mt-5">
                <div class="mb-2 flex items-center">
                    <input bind:value={newMessage} class="flex-grow p-2 rounded-md border" placeholder="Type a message..." />
                    <button on:click={sendMessage} class="ml-2 px-2 py-1 bg-green-500 text-white rounded-md flex items-center">
                        <i class="fas fa-paper-plane mr-1 text-sm"></i>  <!-- Font Awesome send icon with smaller font size -->
                        Send
                    </button>
                </div>
            </div>
        <!-- Add Chat Page -->
        {:else if showAddChatPage}
            <div class="p-4 bg-gray-100 h-full min-h-screen content">
                <div class="mx-auto max-w-screen-sm lg:max-w-screen-lg">
                    <!-- Back to Conversations Button -->
                    <button class="mb-4 back-button rounded-full bg-green-500" on:click={backToConversations}>Back</button>
                    <!-- Search Bar -->
                    <div class="bg-white rounded-lg shadow-lg p-5 mb-5">
                        <input bind:value={searchUser} class="w-full p-2 rounded-md border" placeholder="Search for a user by name..." />
                        <button class="bg-green-500 text-white rounded-md py-2 px-4 mt-2" on:click={searchUsersByText}>Search</button>
                    </div>
                    <!-- User Search Results -->
                    <div class="bg-white rounded-lg shadow-lg p-5">
                        {#each searchResults as user}
                            <div class="cursor-pointer px-4 py-3 hover:bg-gray-200 border-b last:border-0" on:click={() => startChatWithUser(user)}>
                                <strong>{user.name}</strong>
                            </div>
                        {/each}
                    </div>
                </div>
            </div>
        {:else}
            <!-- Conversations List in a Card Style -->
            <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                {#each conversations as convo}
                    <div class="cursor-pointer px-4 py-3 hover:bg-gray-200 border-b last:border-0" on:click={() => selectConversation(convo)}>
                        <strong>{convo.name}</strong>
                        <p class="text-sm text-gray-500">{convo.latestMessage}</p>
                    </div>
                {/each}
                <!-- Add Chat Card -->
                <div class="cursor-pointer px-4 py-3 hover:bg-gray-200 border-b last:border-0" on:click={openAddChatPage}>
                    <strong>Add Chat</strong>
                    <p class="text-sm text-gray-500">Start a new conversation</p>
                </div>
            </div>
        {/if}
    </div>
</div>

<Navbar />