<template>
  <div class="q-ma-lg">
    <div class="column">
      <div class="row">
        <template>
          <div class="q-pa-sm">
            <q-table
              color="green"
              card-class="bg-light-green-2"
              row-key="name"
              title="Medicamentos"
              :filter="filter"
              no-results-label="Nenhum resultado encontrado."
              no-data-label="Nenhum produto cadastrado."
              :data="products"
              :columns="columnsProduct"
            >

              <template v-slot:top-right>
                <q-input dense debounce="100" v-model="filter" placeholder="Pesquisar">
                  <q-icon slot="append" name="search" />
                </q-input>
              </template>

              <template v-slot:body="props">
                <q-tr :props="props">
                  <q-td key="name" :props="props">
                    {{ props.row.name }}
                  </q-td>
                  <q-td key="price" :props="props">
                    {{ props.row.price }}
                  </q-td>
                </q-tr>
              </template>

            </q-table>
          </div>
        </template>
      </div>

      <VBorder>
        <Subtitle :label="'Nova Venda'"/>
        <div class="row q-gutter-sm">
          <div class="col-3">
            <q-select
              :dense="true"
              filled
              v-model="newSale.seller" 
              :options="sellers" 
              label="Vendedor"
            />
          </div>
          <div class="col-3">
            <q-select
              :dense="true"
              filled
              v-model="newSale.product" 
              :options="productsSelect" 
              label="Produto" 
              @blur="totalValue(newSale.product, newSale.amount)"
            />
          </div>
          <div class="col-2">
            <q-input
              :dense="true" 
              filled
              type="number"
              v-model="newSale.amount" 
              label="Quantidade"
              @blur="totalValue(newSale.product, newSale.amount)"
            />
          </div>
          <div class="col-3">
            <q-input
            :dense="true"
            filled
            v-model="newSale.value"
            label="Valor Total"
            readonly
          />
          </div>
          <div class="col-2">
            <q-btn 
              color="light-green-5"  
              label="Vender"
              @click="addSale(newSale)"
              :disable="!newSale.seller.label || !newSale.product.label || !newSale.amount || !newSale.value"
            />
          </div>
        </div>
      </VBorder>

      <div class="row">
        <template>
          <div class="q-pa-sm">
            <q-table
              color="green"
              card-class="bg-light-green-2"
              row-key="seller"
              title="Vendas"
              :filter="filter"
              no-results-label="Nenhum resultado encontrado."
              no-data-label="Nenhuma venda encontrada."
              :data="sales"
              :columns="columnsSales"
            >

              <template v-slot:top-right>
                <q-input dense debounce="100" v-model="filter" placeholder="Pesquisar">
                  <q-icon slot="append" name="search" />
                </q-input>
              </template>

              <template v-slot:body="props">
                <q-tr :props="props">
                  <q-td key="seller" :props="props">
                    {{ props.row.seller }}
                  </q-td>
                  <q-td key="product" :props="props">
                    {{ props.row.product }}
                  </q-td>
                  <q-td key="amount" :props="props">
                    {{ props.row.amount }}
                  </q-td>
                  <q-td key="value" :props="props">
                    {{ props.row.value }}
                  </q-td>
                </q-tr>
              </template>

            </q-table>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import VBorder from 'components/VBorder.vue'
import Subtitle from 'components/Subtitle.vue'

export default {
  name: 'PageSeller',
  components: {VBorder, Subtitle},
  data(){
    return {
      products: [
        {
          name: 'Paracetamol',
          price: 5.10
        },
        {
          name: 'Alphagan Z',
          price: 51.99
        }
      ],
      columnsProduct: [
        {
          name: 'name',
          field: row => row.name,
          align: 'left',
          required: true,
          label: 'Nome',
          sortable: true,
        },
        {
          name: 'price',
          field: row => row.price,
          align: 'right',
          required: true,
          label: 'Preço',
          sortable: true,
        }
      ],
      sellers:[
        {
          label: 'João Carlos',
        },
        {
          label: 'Alisson Almagro',
        }
      ],
      productsSelect: [
        {
          label: 'Paracetamol',
          price: 5.10
        },
        {
          label: 'Alphagan Z',
          price: 51.99
        }
      ],
      columnsSales: [
        {
          name: 'product',
          field: row => row.product,
          align: 'left',
          required: true,
          label: 'Produto',
          sortable: true,
        },
        {
          name: 'seller',
          field: row => row.seller,
          align: 'left',
          required: true,
          label: 'Vendedor',
          sortable: true,
        },
        {
          name: 'amount',
          field: row => row.amount,
          align: 'left',
          required: true,
          label: 'Quantidade',
        },
        {
          name: 'value',
          field: row => row.value,
          align: 'left',
          required: true,
          label: 'Valor',
        },
      ],
      sales: [
        {
          product: 'Paracetamol',
          amount: 111,
          seller: 'João Carlos',
          value: 566.1
        },
        {
          product: 'Alphagan Z',
          amount: 8,
          seller: 'João Carlos',
          value: 415.92
        },
        {
          product: 'Paracetamol',
          amount: 20,
          seller: 'Alisson Almagro',
          value: 102
        },
        {
          product: 'Alphagan Z',
          amount: 30,
          seller: 'Alisson Almagro',
          value: 1559.7
        }
      ],
      filter: '',
      user: {},
      newSale:{
        seller: {
          label: ''
        },
        product: {
          label: ''
        },
        amount: null,
        value: null
      }
    }
  },

  methods:{
    // Calculate the full price
    totalValue(product, amount){
      if(product.price && amount){
        this.newSale.value = (product.price*amount).toFixed(2)
      }else{
        this.newSale.value = 0
      }
    },

    // Create a new sale
    addSale(sale){
      this.sales.push({product: sale.product.label, seller: sale.seller.label, amount: sale.amount, value: sale.value})
      this.$q.notify({
        message: 'Venda finalizada!',
        type: 'positive'
      })
    }
  }
}
</script>
