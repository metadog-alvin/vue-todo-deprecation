import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
    components: { AssignmentList,  AssignmentCreate, },

    template: `
        <section class="flex gap-8">
            <assignment-list :assignments="filters.inProcess" title="In Process">
                <assignment-create @add="add"></assignment-create>
            </assignment-list>

            <div v-if="showCompleted">            
                <assignment-list 
                    :assignments="filters.completed" 
                    title="Complete" 
                    can-toggle
                    @toggle="showCompleted = !showCompleted"
                ></assignment-list>
            </div>       
        </section>
    `,

    data() {
        return {
            assignments: [],
            showCompleted: true,
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