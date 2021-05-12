<template>
  <div class="q-ma-lg">
    <div class="column">
      <VBorder>
        <Subtitle :label="'Adicionar um Produto'"/>
        <div class="row q-gutter-sm">
          <div class="col-3">
            <q-input
              :dense="true" 
              filled 
              v-model="newProduct.name" 
              label="Nome do Produto" />
          </div>
          <div class="col-2">
            <q-input
              :dense="true" 
              filled
              v-model="newProduct.price"
              label="Preço"
              mask="#.##"
              fill-mask="0"
              reverse-fill-mask
              input-class="text-right"
            />
          </div>

          <div class="col-2">
            <q-btn 
              color="light-green-5"  
              label="Adicionar" 
              @click="addProduct(newProduct)"/>
          </div>
        </div>
      </VBorder>

      <div class="row">
        <template>
          <div class="q-pa-sm">
            <q-table
              color="green"
              card-class="bg-light-green-2"
              row-key="name"
              no-data-label="Nenhum produto cadastrado."
              :data="products"
              :columns="columns">

              <template v-slot:body="props">
                <q-tr :props="props">
                  <q-td key="name" :props="props">
                    {{ props.row.name }}
                  </q-td>

                  <q-td key="price" :props="props">
                    {{ props.row.price }}
                  </q-td>

                  <q-td key="edit" :props="props">
                    <q-btn color="light-green-5" icon="edit"/>
                  </q-td>

                  <q-td key="delete" :props="props">
                    <q-btn color="red-8" icon="delete"  @click="deleteProduct(props.row.name)"/>
                  </q-td>
                </q-tr>
              </template>
            </q-table>
          </div>
        </template>
        
        <VBorder v-if="editProduct">
          <div></div>
        </VBorder>
      </div>

      <VBorder>
        <div class="row">
          teste para depois
        </div>
      </VBorder>
    </div>
  </div>
</template>

<script>
import $store from 'src/store/user.js'

import VBorder from 'components/VBorder.vue'
import Subtitle from 'components/Subtitle.vue'

export default {
  name: 'PageAdmin',
  components: { VBorder, Subtitle },
  data(){
    return {
      products:[
        {
          name: 'Paracetamol',
          price: 5.10
        },
        {
          name: 'Alphagan Z',
          price: 51.99
        }
      ],
      columns:[
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
        },
        {
          name: 'edit',
          align: 'center',
          required: true,
          label: 'Editar',
        },
        {
          name: 'delete',
          align: 'center',
          required: true,
          label: 'Deletar',
        }
      ],
      newProduct:{
        name: '',
        price: null,
      },
      editProduct: false,
      user:{},
    }
  },

  methods:{
    deleteProduct(productName){
      for(var x = 0; x<=this.products.length; x++){
        if (productName == this.products[x].name){
          this.products.splice(x, 1)
          return null
        }
      }
      console.log(productName)
    },

    addProduct(newProduct){
      if(newProduct.name.length == 0){
        console.log("O nome não pode estar vazio")
      }else if(newProduct.price <= 0){
        console.log("Valor inválido")
      }else if(newProduct.name){
        for(let product of this.products){
          console.log(product.name.toLowerCase(), newProduct.name.toLowerCase())
          if(product.name.toLowerCase() == newProduct.name.toLowerCase()){
            console.log("O nome do produto deve ser único")
            return null
          }
        }
        
        this.products.push({name: newProduct.name, price: newProduct.price})
      }
    }
  },
}
</script>
