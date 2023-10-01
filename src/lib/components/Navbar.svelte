<script>
    let isMenuOpen = false;

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }

    function closeMenu() {
        isMenuOpen = false;
    }

    let isContractorMode = true; // default mode

    function toggleMode() {
        isContractorMode = !isContractorMode;
    }

</script>

<style>
    /* Styling for the navbar */
    .navbar {
        background-color: #fff;
        box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
    }
    .nav-icon {
        font-size: 1.5rem;
    }
    .menu {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #fff;
        border-top-left-radius: 16px;
        border-top-right-radius: 16px;
        box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
        display: none;
    }
    .menu.open {
        display: block;
    }
    .menu-option {
        padding: 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        border-top: 1px solid #ccc;
        transition: background-color 0.3s ease;
    }
    .menu-option:last-child {
        border-top: none;
    }
    .menu-option:hover {
        background-color: #f5f5f5;
    }
    .button-icon {
        margin-left: 1rem;
        font-size: 1.25rem;
    }
    .button-text {
        flex-grow: 1;
        font-weight: bold;
    }

    /* Additional styles to make menu options look more like buttons */
    .menu-option.button-style {
        color: white; /* Text color */
        border-radius: 8px; /* Rounded corners */
        margin: 8px; /* Spacing around each button */
    }
    .menu-option.button-style:hover {
        background-color: #4caf50; /* A slightly darker green for hover effect */
    }
    .menu-option.button-style .button-icon {
        color: white;
    }

    .switch {
    position: relative;
    display: inline-block;
    width: 80px;
    height: 30px;
}

.switch input {
    display: none;
}

.switch-slider {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    border-radius: 15px;
    transition: 0.4s;
}

.switch-slider:before {
    position: absolute;
    content: "\f7d9";  /* This is the Unicode value for the Font Awesome wrench icon */
    font-family: "Font Awesome 5 Free";  /* Specify the Font Awesome font family */
    font-weight: 900;  /* Font weight for the solid icons */
    font-size: 14px;  /* Adjust the size of the icon as necessary */
    height: 24px;
    width: 24px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.4s;
}


.switch input:checked + .switch-slider {
    background-color: #4caf50;
}

.switch input:checked + .switch-slider:before {
    transform: translateX(50px);
}

</style>

<div class="navbar fixed bottom-0 left-0 w-full z-10 flex items-center justify-around p-4">
    <a href="/" class="nav-icon">
        <i class="fas fa-search"></i>
    </a>
    <button class="nav-icon" on:click={toggleMenu}>
        <i class="fas fa-plus"></i>
    </button>
    <a href="/profile" class="nav-icon">
        <i class="fas fa-user"></i>
    </a>
    <a href="/inbox" class="nav-icon">
        <i class="fas fa-envelope"></i>
    </a>
    <a href="/settings" class="nav-icon">
        <i class="fas fa-cog"></i>
    </a>
    <div class="switch">
        <input type="checkbox" id="modeToggle" on:click={toggleMode}>
        
        <label for="modeToggle" class="switch-slider"></label>
    </div>
</div>

<div class="menu pb-20" class:open={isMenuOpen}>
    <!-- Updated menu options to include button styling -->
    <div class="menu-option button-style bg-green-500" on:click={closeMenu}>
        <span class="button-text">Create New Contract</span>
        <i class="fas fa-file-contract button-icon"></i>
    </div>
    <div class="menu-option button-style bg-green-500" on:click={closeMenu}>
        <a class="button-text" href="/equipment/add">Add Equipment</a>
        <i class="fas fa-tools button-icon"></i>
    </div>
    <div class="menu-option mr-2" on:click={closeMenu}>
        <span class="button-text text-green-500">Cancel</span>
        <i class="fas fa-times button-icon text-green-500"></i>
    </div>
</div>
