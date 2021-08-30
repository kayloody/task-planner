<template>
	<!-- Value depends on isCompleted prop. Emit when changed. -->
	<input
		type="checkbox"
		v-model="isCompleted"
		:id=id
		@change="toggleState()"
	/>
	<label :for=id >{{name}}</label>
</template>

<script>
	export default {
		name: "Task",
		props: {
			id: String,
			name: String,
			isCompleted: Boolean,
		},
		methods: {
			toggleState() {	// Emit id and state so as to properly update database
				this.$emit('onToggleState', this.id, this.isCompleted);
			}
		},
		emits: ["onToggleState"]
	}
</script>