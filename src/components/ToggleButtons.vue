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
      Group1
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
      Group2
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
      Group3
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
        console.log("activeGroup is changed")
      this.$emit("group", this.mActiveGroup);
    }
  }
};
</script>
