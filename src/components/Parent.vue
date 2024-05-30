<template>
    <div>
        <button @click="parentUpdate">Parent</button>
        <Child1 :msg="message" />
        <Child2 :msg="message" />
    </div>
</template>

<script>
import Child1 from './Child1.vue'
import Child2 from './Child2.vue'
export default {
    name: "Parent",
    components: {
        Child1,
        Child2
    },
    methods: {
        parentUpdate() {
            console.log("parent component")
        }
    }, data() {
        return {
            message: "this is message from parent component"
        }
    }
}
</script>