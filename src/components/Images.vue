<script setup>
import { data } from "../assets/data";

const imagesData = []

data.forEach(el => {
    if(el.namespace === 'Icones') {
        imagesData.push(el);
    }
});

</script>


<template>
    <h1 class="ma-5">Images</h1>

    <v-divider></v-divider>

    <div class="ma-3">
        <section id="container">
            <div class="card-container Images">
                <a class="card" :href="el.link" target="_blank" :key="imagesData.indexOf(el)" v-for="el in imagesData">
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

    .Images {
        background-color: transparent;
    }
    .Images .card:hover {
        background-color: #A5D6A7;
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
        background-color: #E8F5E9;
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
        height: 65%;
        width: 100%;
        padding: 20px;
        font-size: 1.1em;
        transition: all 250ms ease;
    }
</style>