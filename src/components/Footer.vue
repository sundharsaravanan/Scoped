<template>
<div class="footer">
    <ul class="content">
        <li>&copy; 2020 blog app is developed by &nbsp; <a href="https://twitter.com/SundharSaravan2" target="_blank">Sundhar Saravanan</a>.</li>  
    </ul>  
</div>    
</template>
<style scoped>
    .footer{
        color: white;
        background-color: black;
        height: 4rem;
        display: flex;
        align-items: center;
        justify-content: center;        
    }
    .content{
        max-width: 50%;
        list-style-type: none;
    }
    .bottom { 
        position: absolute;
        bottom: 0;
        transform: translateX(-50%);
        left: 50%;
        list-style-type: none;
    } 
</style>