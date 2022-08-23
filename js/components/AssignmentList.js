import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";

export default {
    components: { Assignment, AssignmentTags },
    template: `
        <section v-show="assignments.length">
            <h2 class="font-bold mb-2">
                {{ title }}
                <span>({{ assignments.length }})</span>
                
                <assignment-tags 
                    v-model="currentTag"
                    :initial-tags="assignments.map(a => a.tag)"
                />
            </h2>

            <ul class="border border-gray-600 divide-y divide-gray-600 mt-6">
                <assignment
                    v-for="assignment in filteredAssignments"
                    :key="assignment.id"
                    :assignment="assignment"
                ></assignment>
            </ul>
            
            <slot></slot>
        </section>
`,
    props: {
        assignments: Array,
        title: String
    },
    computed: {
        filteredAssignments() {
            if (this.currentTag === 'all') {
                return this.assignments;
            }

            return this.assignments.filter(a => a.tag === this.currentTag)
        }
    },
    data() {
        return {
            currentTag: 'all'
        };
    },
}