<template>
    <section class="lists-content-page">
        <div>
            <filtered />
        </div>
    </section>
</template>
<script>
import Filtered from '@/components/filtered/Filtered';
export default {
    name: 'ListPage',
    components: { Filtered }
}
</script>

