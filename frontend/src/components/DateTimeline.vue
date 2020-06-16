<template>
  <div class="date-timeline-wrapper">
    <h1 class="product-title">{{ title }}</h1>
    <v-timeline align-top>
      <v-timeline-item
        v-for="(item, index) in sortDate"
        :key="index"
        color="teal darken-3"
        icon="event_note"
        fill-dot
        dark
      >
        <template v-slot:opposite>
          <span class="title-2 date-timeline">{{ item | datify }}</span>
        </template>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sortDate: []
    };
  },
  props: {
    date: {
      type: Array
    },
    title: {
      type: String
    }
  },
  methods: {
    sortArrayDate() {
      this.sortDate = this.date
        .slice()
        .sort((a, b) => new Date(b) - new Date(a));
    }
  },
  mounted() {
    this.sortArrayDate();
  },
  filters: {
    datify(date) {
      var options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "Indian/Mauritius"
        // hour: "numeric",
        // minute: "numeric"
      };
      return new Date(date).toLocaleDateString("en", options);
    }
  }
};
</script>

<style lang="scss">
.date-timeline-wrapper {
  .theme--dark.v-timeline::before {
    background: rgba(0, 0, 0, 0.12);
  }
  .date-timeline {
    color: rgba(0, 0, 0, 0.6);
  }
}
</style>