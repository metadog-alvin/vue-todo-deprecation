import AssignmentList from "./AssignmentList.js";

export default {
    components: {
        AssignmentList,
    }, template: `
        <section class="space-y-6">
            <assignment-list :assignments="filters.inProcess" title="In Process"></assignment-list>
            <assignment-list :assignments="filters.completed" title="Complete"></assignment-list>
            
            <form @submit.prevent="add">
                <div class="border border-gray-600 text-black">
                    <input v-model="newAssignment" type="text" placeholder="typeing something" class="p-2">
                    <button class="bg-white p-2 border-l" >Add</button>
                </div>
            </form>
        </section>
    `, data() {
        return {
            assignments: [
                {name: 'Finish Project', complete: false, id: 1, tag:'math'},
                {name: 'Read Chapter 4', complete: false, id: 2, tag:'science'},
                {name: 'Turn in Homework', complete: false, id: 3, tag:'math'},
            ],
            active: false,
            newAssignment: '',
        }
    }, computed: {
        filters() {
            return {
                'inProcess': this.assignments.filter(a => !a.complete),
                'completed': this.assignments.filter(a => a.complete),
            }
        },
    }, methods: {
        toggle() {
            this.active = !this.active
        },
        add() {
            this.assignments.push({
                name: this.newAssignment,
                complete: false,
                id: this.assignments.length + 1
            })

            this.newAssignment = '';
        }
    },
}