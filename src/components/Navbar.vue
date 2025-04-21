<template>
    <div class="bg-white sticky top-0 z-2">
        <div class="flex justify-between items-center px-10 md:px-0 md:w-3/4 py-7 mx-auto">
            <img alt="Vue logo" class="logo" src="@/assets/logo.png" width="381" height="510" />
            <div class="flex gap-10">
                <i class="pi pi-bell"/>
                <i class="pi pi-cog"/>
                <i class="pi pi-sign-out"/>
            </div>
        </div>
    </div>
    <div class="bg-cyan-500 h-50 mb-15">
        <div class="relative md:w-3/4 mx-auto">
            <div class="flex items-center gap-3 absolute top-20">
            <img alt="Vue logo" class="logo" src="@/assets/Avatar.png"/>
            <div class="flex items-end">
                <div class="text-white mr-5">
                    <h1 class="text-3xl font-bold">John Doe</h1>
                    <p class="font-light">Last online: 2 days ago</p>
                </div>
                <div class="border border-white bg-white rounded flex h-12 w-42 justify-center items-center text-cyan-500 gap-2 cursor-pointer hover:bg-cyan-500 hover:text-white mr-2">
                    <i class="pi pi-send"/>
                    <p>Send Message</p>
                </div>
                <div class="border border-white bg-cyan-500 rounded flex h-12 w-42 justify-center items-center text-white gap-2 cursor-pointer hover:bg-white hover:text-cyan-500">
                    <i class="pi pi-plus"/>
                    <p>Add Friend</p>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>