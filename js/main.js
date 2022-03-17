const app = new Vue({
    el: '#app',
    data:{
        activeImage: 0,
        images: [
            {
                url: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
            },
            {
                url: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
            },
            {
                url: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
            },
            {
                url: 'img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
            },
            {
                url: 'img/05.jpg',
                title: 'Paradise',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
            },
        ]
    },
    methods: {
        buttonUp(){
            if (this.activeImage === 0){
                this.activeImage = this.images.length - 1;
            }else{
                this.activeImage--;
            }
        },
        buttonBottom(){
            if (this.activeImage === this.images.length - 1){
                this.activeImage = 0;
            }else{
                this.activeImage++;
            }
        },
        clickSlide(imageI){
            this.activeImage = imageI;
        }
    }
})






