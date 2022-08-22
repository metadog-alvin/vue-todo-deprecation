export default {
    template: `
                  <button 
                  :class="{
                    'border rounded px-5 py-2 disabled:cursor-not-allowed': true,
                    'bg-blue-600 hover:bg-blue-400': type === 'primary',
                    'bg-purple-200 hover:bg-purple-400': type === 'secondary',
                    'bg-purple-200 hover:bg-purple-400': type === 'muted',
                    'is-loading': processing,
                  }" 
                  @click="toggle" 
                  :disabled="processing">
                    <slot/>
                  </button>
                `,
    methods: {
        toggle() {
            alert(111);
        }
    },
    props: {
        type: {
            type: String,
            default: 'primary'
        },
        processing: {
            type: Boolean,
            default: false,
        }
    }
}
