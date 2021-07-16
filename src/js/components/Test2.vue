<template>
  <section class="wrapper-content">
    <h1>{{filter.length}}</h1>
    <form class="filter">
      <div class="filter__item">
        <select 
          name="filter-name"
          id="filter-name"
          class="filter__item-select"
          placholder="Имя"
          v-model="filterName"
        >
          <option value="Все">
            Все
          </option>
          <option value="Артем">
            Артем
          </option>
            <option value="Владислав">
            Владислав
          </option>
            <option value="Дмитрий">
            Дмитрий
          </option>
            <option value="Даниил">
            Даниил
          </option>
          <option value="Илья">
            Илья
          </option>
        </select>
      </div>
      <div class="filter__item">
        <select 
          name="filter-age"
          id="filter-age"
          class="filter__item-select"
          placholder="Возраст"
          v-model="filterAge"
        >
          <option value="Все">
            Все
          </option>
          <option value="18">
            18
          </option>
            <option value="19">
            19
          </option>
            <option value="20">
            20
          </option>
            <option value="21">
            21
          </option>
            <option value="22">
            22
          </option>
          <option value="23">
            23
          </option>
          <option value="24">
            24
          </option>
        </select>
      </div>
      <div class="filter__item">
        <select 
          name="filter-role"
          id="filter-role"
          class="filter__item-select"
          placholder="Амплуа"
          v-model="filterRole"
        >
          <option value="Все">
            Все
          </option>
          <option value="Защита">
            Защита
          </option>
          <option value="Атака">
            Атака
          </option>
          <option value="Полузащита">
            Полузащита
          </option>
        </select>
      </div>
      <div class="filter__item">
        <select 
          name="filter-team"
          id="filter-team"
          class="filter__item-select"
          placholder="Клуб"
          v-model="filterTeam"
        >
          <option value="Все">
            Все
          </option>
          <option value="Салават Юлаевый">
            Салават Юлаевый
          </option>
          <option value="Локомотив">
            Локомотив
          </option>
          <option value="Динамо">
            Динамо
          </option>
          <option value="КуньЛунь РС">
            КуньЛунь РС
          </option>
          <option value="ЦСКА">
            ЦСКА
          </option>
          <option value="Металлург">
            Металлург
          </option>
        </select>
      </div>
      <div class="filter__item">
        <select
          name="filter-hand"
          id="filter-hand"
          class="filter__item-select"
          placholder="Хват"
          v-model="filterHand"
        >
          <option value="Все">
            Все
          </option>
          <option value="Левый">
            Левый
          </option>
            <option value="Правый">
            Правый
          </option>
        </select>
      </div>
      <div class="filter__item">
        <select
          name="filter-country"
          id="filter-country"
          class="filter__item-select"
          placholder="Страна"
          v-model="filterCountry"
        >
          <option value="Все">
            Все
          </option>
          <option value="Россия">
            Нидерланды
          </option>
            <option value="Украина">
            Украина
          </option>
            <option value="Польша">
            Польша
          </option>
            <option value="Швейцария">
            Швейцария
          </option>
            <option value="Германия">
            Германия
          </option>
          <option value="Япония">
            Япония
          </option>
          <option value="Япония">
            Нидерланды
          </option>
        </select>
      </div>
    </form> 
    <div class="table-filter">
      <table>
        <thead>
          <tr>
            <td>
              Имя
            </td>
            <td>
              Возраст
            </td>
            <td>
              Амплуа
            </td>
            <td>
              Команда
            </td>
            <td>
              Хват
            </td>
            <td>
              Страна
            </td>
          </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in filter" :key="item.id">
            <td>
              {{item.name}}
            </td>
            <td>
              {{item.age}}
            </td>
            <td>
                {{item.role}}
            </td>
            <td>
                {{item.team}}
            </td>
            <td>
              {{item.hand}}
            </td>
            <td>
                {{item.country}}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="paging">
      <button
        type="button"
        class="paging__arrow paging-arrow__prev"
        v-if="page != 1"
        @click="page--"
      >
        Prev
      </button>
      <button
        type="button"
        class="paging__item"
        v-for="(pageNumber, index) in pages.slice(page-1,page+5)"
        :key="index"
        @click="page = pageNumber"
        :class="{'paging__item--current': pageNumber == page}"
      >
        {{pageNumber}}
      </button>
      <button
        type="button"
        class="paging__arrow paging__arrow--prev"
        v-if="page < pages.length"
        @click="page++"
      >
        Next
      </button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      arr: [
        {
          id: 1,
          age: 21,
          name: 'Артем',
          role: 'Защита',
          team: 'Салават Юлаевый',
          hand: 'Правый',
          country: 'Россия'
        },
        {
          id: 2,
          age: 22,
          name: 'Владислав',
          role: 'Атака',
          team: 'Динамо',
          hand: 'Левый',
          country: 'Украина'
        },
        {
          id: 3,
          age: 25,
          name: 'Илья',
          role: 'Полузащита',
          team: 'Металлург',
          hand: 'Правый',
          country: 'Польша'
        },
        {
          id: 4,
          age: 24,
          name: 'Даниил',
          role: 'Защита',
          team: 'ЦСКА',
          hand: 'Левый',
          country: 'Германия'
        },
        {
          id: 5,
          age: 23,
          name: 'Дмитрий',
          role: 'Полузащита',
          team: 'Динамо',
          hand: 'Правый',
          country: 'Швейцария'
        },
        {
          id: 6,
          age: 21,
          name: 'Артем',
          role: 'Защита',
          team: 'Салават Юлаевый',
          hand: 'Правый',
          country: 'Россия'
        },
        {
          id: 7,
          age: 22,
          name: 'Владислав',
          role: 'Атака',
          team: 'Динамо',
          hand: 'Левый',
          country: 'Украина'
        },
        {
          id: 8,
          age: 22,
          name: 'Илья',
          role: 'Полузащита',
          team: 'Металлург',
          hand: 'Правый',
          country: 'Япония'
        },
        {
          id: 9,
          age: 29,
          name: 'Даниил',
          role: 'Защита',
          team: 'ЦСКА',
          hand: 'Левый',
          country: 'Германия'
        },
        {
          id: 10,
          age: 23,
          name: 'Дмитрий',
          role: 'Полузащита',
          team: 'Динамо',
          hand: 'Правый',
          country: 'Нидерланды'
        },
        {
          id: 11,
          age: 21,
          name: 'Артем',
          role: 'Защита',
          team: 'Салават Юлаевый',
          hand: 'Правый',
          country: 'Япония'
        },
        {
          id: 12,
          age: 22,
          name: 'Владислав',
          role: 'Атака',
          team: 'Динамо',
          hand: 'Прввый',
          country: 'Швейцария'
        },
        {
          id: 13,
          age: 25,
          name: 'Илья',
          role: 'Полузащита',
          team: 'Металлург',
          hand: 'Правый',
          country: 'Германия'
        },
        {
          id: 14,
          age: 24,
          name: 'Даниил',
          role: 'Защита',
          team: 'ЦСКА',
          hand: 'Левый',
          country: 'Германия'
        },
        {
          id: 15,
          age: 23,
          name: 'Дмитрий',
          role: 'Полузащита',
          team: 'Динамо',
          hand: 'Правый',
          country: 'Нидерланды'
        },
        {
          id: 16,
          age: 20,
          name: 'Артем',
          role: 'Защита',
          team: 'КуньЛунь РС',
          hand: 'Правый',
          country: 'Россия'
        },
        {
          id: 17,
          age: 22,
          name: 'Владислав',
          role: 'Атака',
          team: 'Динамо',
          hand: 'Левый',
          country: 'Украина'
        },
        {
          id: 18,
          age: 18,
          name: 'Илья',
          role: 'Полузащита',
          team: 'Металлург',
          hand: 'Правый',
          country: 'Польша'
        },
        {
          id: 19,
          age: 18,
          name: 'Даниил',
          role: 'Защита',
          team: 'ЦСКА',
          hand: 'Левый',
          country: 'Германия'
        },
        {
          id: 20,
          age: 19,
          name: 'Дмитрий',
          role: 'Полузащита',
          team: 'Динамо',
          hand: 'Правый',
          country: 'Германия'
        },
        {
          id: 21,
          age: 19,
          name: 'Артем',
          role: 'Защита',
          team: 'КуньЛунь РС',
          hand: 'Правый',
          country: 'Япония'
        },
        {
          id: 22,
          age: 19,
          name: 'Владислав',
          role: 'Атака',
          team: 'Динамо',
          hand: 'Левый',
          country: 'Япония'
        },
        {
          id: 23,
          age: 25,
          name: 'Илья',
          role: 'Полузащита',
          team: 'Металлург',
          hand: 'Правый',
          country: 'Япония'
        },
        {
          id: 24,
          age: 24,
          name: 'Даниил',
          role: 'Защита',
          team: 'ЦСКА',
          hand: 'Левый',
          country: 'Польша'
        },
        {
          id: 25,
          age: 23,
          name: 'Дмитрий',
          role: 'Полузащита',
          team: 'Динамо',
          hand: 'Правый',
          country: 'Нидерланды'
        },
        {
          id: 26,
          age: 20,
          name: 'Артем',
          role: 'Защита',
          team: 'ЦСКА',
          hand: 'Правый',
          country: 'Россия'
        },
        {
          id: 27,
          age: 22,
          name: 'Владислав',
          role: 'Атака',
          team: 'Динамо',
          hand: 'Левый',
          country: 'Украина'
        },
        {
          id: 28,
          age: 25,
          name: 'Илья',
          role: 'Полузащита',
          team: 'Металлург',
          hand: 'Правый',
          country: 'Польша'
        },
        {
          id: 29,
          age: 24,
          name: 'Даниил',
          role: 'Защита',
          team: 'ЦСКА',
          hand: 'Левый',
          country: 'Германия'
        },
        {
          id: 30,
          age: 23,
          name: 'Дмитрий',
          role: 'Полузащита',
          team: 'Динамо',
          hand: 'Правый',
          country: 'Нидерланды'
        },
        {
          id: 31,
          age: 20,
          name: 'Артем',
          role: 'Защита',
          team: 'ЦСКА',
          hand: 'Правый',
          country: 'Украина'
        },
        {
          id: 32,
          age: 22,
          name: 'Владислав',
          role: 'Атака',
          team: 'Динамо',
          hand: 'Левый',
          country: 'Украина'
        },
        {
          id: 33,
          age: 25,
          name: 'Илья',
          role: 'Полузащита',
          team: 'Металлург',
          hand: 'Правый',
          country: 'Польша'
        },
        {
          id: 34,
          age: 24,
          name: 'Даниил',
          role: 'Защита',
          team: 'ЦСКА',
          hand: 'Левый',
          country: 'Германия'
        },
        {
          id: 35,
          age: 23,
          name: 'Дмитрий',
          role: 'Полузащита',
          team: 'КуньЛунь РС',
          hand: 'Правый',
          country: 'Украина'
        },
        {
          id: 36,
          age: 20,
          name: 'Артем',
          role: 'Защита',
          team: 'Салават Юлаевый',
          hand: 'Правый',
          country: 'Россия'
        },
        {
          id: 37,
          age: 22,
          name: 'Владислав',
          role: 'Атака',
          team: 'КуньЛунь РС',
          hand: 'Левый',
          country: 'Украина'
        },
        {
          id: 38,
          age: 25,
          name: 'Илья',
          role: 'Полузащита',
          team: 'Металлург',
          hand: 'Правый',
          country: 'Украина'
        },
        {
          id: 39,
          age: 24,
          name: 'Даниил',
          role: 'Защита',
          team: 'КуньЛунь РС',
          hand: 'Левый',
          country: 'Германия'
        },
        {
          id: 40,
          age: 23,
          name: 'Дмитрий',
          role: 'Полузащита',
          team: 'Локомотив',
          hand: 'Правый',
          country: 'Нидерланды'
        },
        {
          id: 41,
          age: 23,
          name: 'Артем',
          role: 'Полузащита',
          team: 'Локомотив',
          hand: 'Левый',
          country: 'Нидерланды'
        },
        {
          id: 42,
          age: 28,
          name: 'Илья',
          role: 'Полузащита',
          team: 'Динамо',
          hand: 'Левый',
          country: 'Польша'
        },
        {
          id: 43,
          age: 33,
          name: 'Владислав',
          role: 'Атака',
          team: 'Динамо',
          hand: 'Левый',
          country: 'Япония'
        },
        {
          id: 44,
          age: 17,
          name: 'Даниил',
          role: 'Атака',
          team: 'Динамо',
          hand: 'Левый',
          country: 'Германия'
        },

      ],
      filterName: 'Все',
      filterAge: 'Все',
      filterRole: 'Все',
      filterTeam: 'Все',
      filterHand: 'Все',
      filterCountry: 'Все',
      page: 1,
      perPage: 5,
      pages: []
    }
  },
  methods: {
    paginate (arr) {
      let page = this.page
      let perPage = this.perPage
      let from = (page * perPage) - perPage
      let to = (page * perPage)
      return arr.slice(from, to);
    }
  },
  computed: {
    filter() {
      let arrFilter = this.arr
      arrFilter = arrFilter.filter((value) => {
        if (this.filterName === 'Все') {
          return true
        } else {
          return value.name === this.filterName
        }
      })
      arrFilter = arrFilter.filter((value) => {
        if (this.filterAge === 'Все') {
          return true
        } else {
          return value.age == this.filterAge
        }
      })
      arrFilter = arrFilter.filter((value) => {
        if (this.filterRole === 'Все') {
          return true
        } else {
          return value.role === this.filterRole
        }
      })
      arrFilter = arrFilter.filter((value) => {
        if (this.filterTeam === 'Все') {
          return true
        } else {
          return value.team === this.filterTeam
        }
      })
      arrFilter = arrFilter.filter((value) => {
        if (this.filterHand === 'Все') {
          return true
        } else {
          return value.hand === this.filterHand
        }
      })
      arrFilter = arrFilter.filter((value) => {
        if (this.filterCountry === 'Все') {
          return true
        } else {
          return value.country === this.filterCountry
        }
      })
      let numOfPages = Math.ceil(arrFilter.length / this.perPage || 1)
      this.pages = []
      console.log(this.page + ": " + numOfPages)
      if (this.page > numOfPages) {
        console.log(this.pages.length)
        this.page = 1
      }
      for (let i = 1; i <= numOfPages; i++) {
        this.pages.push(i)
      }
      return this.paginate(arrFilter)
    },
   
  }
}
</script>
