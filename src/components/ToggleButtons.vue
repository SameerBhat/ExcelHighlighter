<template>
  <div class="btn-group btn-group-toggle mb-3" data-toggle="buttons">
    <label class="btn btn-danger" :class="{ active: mActiveGroup == 'group1' }">
      <input
        type="radio"
        name="options"
        value="group1"
        id="option1"
        autocomplete="off"
        v-model="mActiveGroup"
      />
      TechTerms
    </label>
    <label class="btn btn-danger" :class="{ active: mActiveGroup == 'group2' }">
      <input
        type="radio"
        name="options"
        value="group2"
        id="option2"
        autocomplete="off"
        v-model="mActiveGroup"
      />
      Service
    </label>
    <label class="btn btn-danger" :class="{ active: mActiveGroup == 'group3' }">
      <input
        type="radio"
        name="options"
        value="group3"
        id="option3"
        autocomplete="off"
        v-model="mActiveGroup"
      />
      Problems
    </label>

    <label class="btn btn-danger" :class="{ active: mActiveGroup == 'all' }">
      <input
        type="radio"
        name="options"
        value="all"
        id="option4"
        autocomplete="off"
        v-model="mActiveGroup"
      />
      All
    </label>
  </div>
</template>

<script>
export default {
  props: ["activeGroup"],
  data() {
    return {
        mActiveGroup: this.activeGroup
    };
  },

  watch: {
    mActiveGroup() {
       
      this.$emit("group", this.mActiveGroup);
    }
  }
};
</script>
