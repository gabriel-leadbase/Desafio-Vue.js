<template>
  <b-container fluid>
    <h1 class="h3 color-text mb-4">Dashboard</h1>
    <b-row>
      <b-col>
        <b-card
          class="border-primary border-top-0 border-right-0 border-bottom-0 bg-light"
        >
          <p class="text-primary">Total</p>
          <b-card-text class="display-4">{{ total.toFixed(2) }}</b-card-text>
        </b-card>
      </b-col>
      <b-col>
        <b-card
          class="border-warning border-top-0 border-right-0 border-bottom-0 bg-light"
        >
          <p class="text-warning">Total de unidades vendidas</p>
          <b-card-text class="display-4">{{ totalUnits }}</b-card-text>
        </b-card>
      </b-col>
      <b-col>
        <b-card
          class="border-success border-top-0 border-right-0 border-bottom-0 bg-light"
        >
          <p class="text-success">Ticket Medio</p>
          <b-card-text class="display-4">{{ ticket }}</b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      total: 0,
      ticket: 0,
      totalUnits: 0,
    };
  },

  mounted: function () {
    this.getSales();
  },

  methods: {
    getSales() {
      const database = this.$firebase
        .firestore()
        .collection("pharmacy")
        .doc("sales");
      database.onSnapshot((doc) => {
        if (doc.exists) {
          const sales = doc.data().sales;
          for (let index in sales) {
            this.total = this.total + sales[index].value * sales[index].amount;
            this.totalUnits = this.totalUnits + Number(sales[index].amount)
          }
          this.ticket = (this.total / sales.length).toFixed(2);
        }
      });
    },
  },
};
</script>

<style>
</style>