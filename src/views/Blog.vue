<template>
<div>
    <Header/>
    <BlogHeader :blog="blog"/>
    <div class="container">
        <div class="markdown">
        <component :is="getContent"/>
        </div>
    </div>
    <Footer/>
</div>    
</template>
<script>
import Header from '../components/Header';
import BlogHeader from '../components/BlogHeader';
import Footer from '../components/Footer';

export default {
    props:{
        blog:{
            type: Object,
            required: true
        }
    },
    components:{
        Header,
        BlogHeader,
        Footer
    },
    methods:{
        getContent(){
            return import('../contents/blog/'+this.blog.id+'.md')
        }
    }
}
</script>
<style scoped>
@media (min-width: 768px){
    .markdown {
        padding: 2rem 0;
        font-size: 19px;
    }
}
.markdown{
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    text-align: justify;
    text-justify: inter-word;
}
</style>