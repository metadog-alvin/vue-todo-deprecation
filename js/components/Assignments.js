import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
    components: { AssignmentList,  AssignmentCreate, },

    template: `
        <section class="flex gap-8">
            <assignment-list :assignments="filters.inProcess" title="In Process"></assignment-list>
            <assignment-list :assignments="filters.completed" title="Complete"></assignment-list>

            <assignment-create @add="add"></assignment-create>
        </section>
    `,

    data() {
        return {
            assignments: [],
            active: false,
        }
    },

    created() {
        fetch('http://localhost:3001/assignments')
            .then(response => response.json())
            .then(assignments => {
                this.assignments = assignments;
            })
    },

    computed: {
        filters() {
            return {
                'inProcess': this.assignments.filter(a => !a.complete),
                'completed': this.assignments.filter(a => a.complete),
            }
        },
    },

    methods: {
        toggle() {
            this.active = !this.active
        },

        add(name) {
            this.assignments.push({
                name: name,
                complete: false,
                id: this.assignments.length + 1
            })

            this.newAssignment = '';
        }
    },
}