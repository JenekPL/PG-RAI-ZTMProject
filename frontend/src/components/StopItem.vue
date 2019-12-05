<template>
    <span class="d-flex">
        <span class="mr-4 d-block-inline align-self-center" v-if="isInFavourites">❤️</span>
        <div class="mr-4 d-inline-block align-self-center" v-else>🤍</div> 
        <div class="d-inline-block flex-fill">
            <span class="d-block">{{ name }}</span>
            <span class="d-block">{{ zone }}</span>
        </div>
        
    </span>
</template>

<script>
export default {
    name: "StopItem",
    props: ["name", "isInFavourites", "zone"]
}
</script>