<template>
  <div>
    <v-timeline align-top>
      <v-timeline-item
        v-for="(item, index) in sortDate"
        :key="index"
        color="cyan darken-3"
        icon="event_note"
        fill-dot
      >
        <template v-slot:opposite>
          <span>{{ item | datify }}</span>
        </template>
        <!-- <v-card class="elevation-2">
                <v-card-title class="title">{{ date | datify }}</v-card-title>
        </v-card>-->
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
    label: {
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