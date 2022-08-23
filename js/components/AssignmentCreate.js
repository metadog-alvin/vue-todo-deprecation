export default {
    template: `
        <form @submit.prevent="add">
            <div class="border border-gray-600 text-black flex">
                <input v-model="newAssignment" type="text" placeholder="typeing something" class="p-2">
                <button class="bg-white p-2 border-l" >Add</button>
            </div>
        </form>
    `,

    props: {
      assignments: Array
    },

    data() {
        return {
            newAssignment: '',
        }
    },

    methods: {
        add() {
            this.$emit('add', this.newAssignment);

            this.newAssignment = '';
        }
    }

}