Vue.component('Playlist', {
data() {
    return {
        songs: [
            { id: 1, artist: 'Lil John', title: 'Turn down for what'},
            { id: 2, artist: 'Jastin Bieber', title: 'never say never'},
            { id: 3, artist: 'Jastin Bieber', title: 'Love yourself'},
            { id: 4, artist: 'Ariana Grande', title: 'Side to Side'},
            { id: 5, artist: 'Ariana Grande', title: 'One last time'}
        ],
        newSong: '',
        newArtist: ''
    }
},
methods: {
    addItem(){
    if(this.newSong == '') return;
    this.songs.push({
        artist: this.newArtist,
        title: this.newSong
    });

    //reset
    this.newSong= '',
    this.newArtist= ''
    },

    removeSong(x){
     this.songs.splice(x, 1);

    }
 },
 template:`
 <div>
    <div class="list-group">
        <song v-for="(song, index) in songs" :key="song.id">
            {{ song.artist }} - {{ song.title }}
            <button class="btn btn-primary" @click="removeSong(index)">Remove</button>
        </song>
    </div>
    <div>
        <form @submit.prevent="addItem">
            <input type="text" placeholder="enter a song..." v-model="newSong" />
            <input type="text" placeholder="enter a artist..." v-model="newArtist" />
            <button type="submit" class="btn btn-primary">Add</button>
        </form>
    </div>

 </div>`
})

 Vue.component('Song', {
 data() {
     return {}
 },
 methods: {
      removeSong(x){
           this.$emit('removeSongEvent', this.songIndex);
      }
  },
  mounted() {
  },
  template:`
<div>
    <div class="list-group-item" @click="removeSong">
        <slot></slot>
    </div>
</div>
     `
  })

const app = new Vue({
    el: '#app'
});
