<script>
// https://codepen.io/leemartin/pen/VwQQVZQ
export default {
  data() {
    return {
      cards: [],
      misses: 0,
      selecting: false,
      selection: null,
      songs: [
        'king',
        'free',
        'choreomania',
        'back-in-town',
        'girls-against-god',
        'dream-girl-evil',
        'prayer-factory',
        'cassandra'
      ] // Update to include 8 unique card values
    };
  },
  computed: {
    firstCard() {
      return this.cards[this.selection];
    }
  },
  methods: {
    async selectCard(i) {
      this.selecting = true;
      this.playSound('select');
      await this.flipCard(i);

      if (this.firstCard) {
        let secondCard = this.cards[i];

        if (this.firstCard.slug === secondCard.slug) {
          console.log('Match!');
          this.playSound('match');
          this.playSound(this.firstCard.slug);
          this.cards[this.selection].matched = true;
          this.cards[i].matched = true;
          this.selection = null;
        } else {
          console.log('Not match.');
          this.playSound('wrong');
          await Promise.all([
            this.flipCard(this.selection),
            this.flipCard(i)
          ]);
          this.selection = null;
          this.misses += 1;
        }
      } else {
        this.selection = i;
      }

      this.selecting = false;
    },
    playSound(name) {
      const audio = new Audio(`https://assets.codepen.io/141041/${name}.mp3`);
      audio.play();
    },
    flipCard(i) {
      // This is where you would perform card flipping animations, but since you want to remove GSAP, you can leave it empty or remove it entirely.
      // You can add transitions or other CSS effects if needed.
    }
  },
  mounted() {
    // Duplicate the 8 unique cards to create a total of 16 cards
    const allCards = this.songs.flatMap(slug => [{ slug, matched: false }, { slug, matched: false }]);

    // Add a unique ID to each card
    this.cards = allCards.map((card, index) => ({
      ...card,
      id: index
    }));

    this.shuffleArray(this.cards);
  },
  methods: {
    shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
  }
};
</script>


<template>
  <div id="game">
    <header>
      <img src="https://assets.codepen.io/141041/dance-fever.png" alt="Dance Fever" />
      <div>Concentration</div>
    </header>

    <section>
      <article>
        <div id="cards" v-if="cards.length" class="card-grid">
          <div
            v-for="(card, i) in cards"
            :key="card.id"
            class="card"
            :class="{ disabled: selecting || card.matched }"
            @click="selectCard(i)"
          >
            <div class="face front" :style="{ backgroundImage: `url('https://reading.florenceandthemachine.net/images/cards/1x/${card.slug}.jpg')` }"></div>
            <div class="face back"></div>
          </div>
        </div>
      </article>
    </section>

    <footer>You have missed {{ misses }} {{ misses === 1 ? 'time' : 'times' }}</footer>
  </div>
</template>



<style scoped>
  html, body, #app, #game {
    height: 100%;
    width: 100%;
  }
  /* ... (the rest of your styles remain the same) */
  .card-grid {
    display: grid;
    gap: 12px;
    grid-template-columns: repeat(4, 5rem); /* 4 columns for 16 cards */
    grid-template-rows: repeat(4, 10rem); /* 4 rows for 16 cards */
  }
  /* ... (the rest of your styles remain the same) */

  .card{
    background-color: pink;
  }
</style>
