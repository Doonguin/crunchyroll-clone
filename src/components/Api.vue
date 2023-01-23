<template>

</template>

<script lang="ts">
import { getAnime } from '@/plugins/Api';

export default {
    mounted() {
        getAnime();
    }
}
</script>