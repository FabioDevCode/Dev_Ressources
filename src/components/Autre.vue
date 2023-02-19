<script setup>
import { data } from "../assets/data";

const autreData = []

data.forEach(el => {
    if(el.namespace === 'Autre') {
        autreData.push(el);
    }
});

</script>


<template>
    <h1 class="ma-5">Autre</h1>

    <v-divider></v-divider>

    <div class="ma-3">
        <section id="container">
            <div class="card-container Autre">
                <a class="card" :href="el.link" target="_blank" :key="autreData.indexOf(el)" v-for="el in autreData">
                    <h3>
                        {{ el.name }}
                    </h3>
                    <p>
                        {{ el.desc }}
                    </p>
                </a>
            </div>
        </section>
    </div>
</template>


<style scoped>
    .Autre {
        background-color: transparent;
    }
    .Autre .card:hover {
        background-color: #FFE0B2;
        box-shadow: 0 0 8px rgba(0, 0, 0, .6);
    }

    #container {
        border-radius: 5px;
        position: relative;
        display: flex;
        flex-direction: column;
    }
    .card-container {
        display: flex;
        justify-content: start;
        flex-wrap: wrap;
        overflow: hidden;
    }

    .card {
        overflow: hidden;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 200px;
        width: 30%;
        min-width: 300px;
        max-width: 380px;
        margin: 10px;
        background-color: #FFF3E0;
        border-radius: 3px;
        box-shadow: 0 0 8px rgba(0, 0, 0, .3);
        transition: all 250ms ease;
    }

    .card h3 {
        color: black;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        top: 0;
        width: 100%;
        height: 35%;
        transition: all 250ms ease;
        font-size: 1.5em;
    }

    .card p {
        color: #333333;
        position: absolute;
        display: flex;
        justify-content: start;
        align-items: center;
        overflow: hidden;
        bottom: 0;
        padding: 20px;
        height: 65%;
        width: 100%;
        font-size: 1.1em;
        transition: all 250ms ease;
    }
</style>