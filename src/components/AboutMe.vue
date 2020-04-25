<template>
    <div class="about-me">
        <Title title="About Me"/>
        <div class="content">
            Hello all ! I'm Sundhar Saravanan working as a fullstack developer for more than 2 years in a company based in Chennai, India. I studied a computer science and engineering degree in Tamilnadu, India. I'm intreasted in development of web applications. I was born 23 years ago in Tamilnadu, India.
        </div>
    </div>
</template>
<script>
import Title from '../components/SectionTitle';
export default {
    components:{
        Title
    }
}
</script>
<style scoped>
.content{
  font-size: 22px;
  text-align: left;
  color: #767676;
  margin-bottom: 48px;
}
</style>