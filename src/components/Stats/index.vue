<template>
  <div class="stats">
    <div class="card">
      <span class="card__icon">
        <TrendingUpIcon size="24" />
      </span>

      <h4 class="card__title">
        {{ numberToBRL(totalValue) }}
      </h4>
      <p>
        Total em vendas
      </p>
    </div>

    <div class="card">
      <span class="card__icon">
        <ActivityIcon size="24" />
      </span>
      <h4 class="card__title">
        {{ numberToBRL(averageTicket) }}
      </h4>
      <p>
        Ticket médio
      </p>
    </div>

    <div class="card">
      <span class="card__icon">
        <PackageIcon size="24" />
      </span>
      <h4 class="card__title">
        {{ totalItems.toLocaleString() }}
      </h4>
      <p class="card__info">
        Total de unidades venditas
      </p>
    </div>
  </div>
</template>

<script>
import { TrendingUpIcon, ActivityIcon, PackageIcon } from 'vue-feather-icons'

import numberToBRL from '@/utils/numberToBRL'

export default {
  name: 'Stats',

  components: {
    TrendingUpIcon,
    ActivityIcon,
    PackageIcon
  },

  props: {
    totalItems: {
      type: Number,
      required: true
    },
    totalValue: {
      type: Number,
      required: true
    },
    averageTicket: {
      type: Number,
      required: true
    }
  },

  methods: {
    numberToBRL
  }
}
</script>
<style lang="scss" scoped src="./styles.scss"></style>
